import { IKey, KeyCollection } from "./types"

/**
 * Decorator for adding keys into Altv API
 * 
 * @param action - the key action
 * @param code - the key to be binded with the method
 * 
 * @example
 * decorator usage:
 * key("press", 82)
 * key("release", 82)
 */
export const key = (action: 'press' | 'release', code: number): MethodDecorator => {
  const newKey: IKey = {
    code,
    action,
    callable: ''
  }

  const actionName = `${action}:${code}`;

  // return methodDecorator in which we define our IKey into metadata
  return function(target: Object, callableMethod: string | symbol, descriptor: TypedPropertyDescriptor<any>) {
    // method must be callable
    if (!(descriptor.value instanceof Function)) throw new Error(`Key[${actionName}] must be callable`)

    // get the target metadata to merge new IKey
    const targetKeys: KeyCollection = Reflect.getMetadata("design:keylist", target) || new Map<string, IKey>()

    // set the callable key
    newKey.callable = callableMethod.toString()

    // merge with existing keys
    const keyObjects = targetKeys.get(actionName)
    targetKeys.set(actionName, keyObjects && [...keyObjects, newKey] || [newKey])

    // store them into metadata
    Reflect.defineMetadata("design:keylist", targetKeys, target)

    return descriptor
  }
}
