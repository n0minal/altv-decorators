import * as alt from "alt"
import { KeyCollection } from "./types"
import { ENVIROMENT, enviroment, registeredKeys } from "."

/**
 * Resolve any keys which passed to classes with decorator keyable
 */
export const keyable = () => {
  return function(target: any): any {
    return class extends target {
      constructor(...args: any[]) {
        super(...args)

        if (enviroment !== ENVIROMENT.CLIENTSIDE) {
          throw new Error('keyable decorator only works in clientside!')
        }

        if (!Reflect.getMetadata("design:keylist:init", target.prototype)) {
          const keys: KeyCollection = Reflect.getMetadata("design:keylist", target.prototype) || []

          keys.forEach((keyObjects, actionName) => {
            keyObjects = keyObjects.map(keyObject => {
              const { action, code, callable } = keyObject
              const eventName = action === 'press' ? 'keydown' : 'keyup';
  
              const callableMethod = this[callable].bind(this)
              if (typeof this[callable] !== 'function') throw new Error(`Key[${actionName}] in ${this.constructor.name} is not callable!`)
  
              alt.on(eventName, (key: number) => {
                if (key === code) {
                  callableMethod();
                }
              })

              keyObject.func = callableMethod

              return keyObject
            })

            const registeredKey = registeredKeys.get(actionName) || []
            registeredKeys.set(actionName, [...registeredKey, ...keyObjects])
          })
          Reflect.defineMetadata("design:keylist:init", true, target.prototype)
        }
      }
    }
  }
}
