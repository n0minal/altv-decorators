# altv-decorators
A useful lightweight library which helps to registry **server-side/client-side** events via [decorators](https://www.typescriptlang.org/docs/handbook/decorators.html) for AltvMP

* [Installation](#installation)
* [Examples](#examples)
* [API](#api)

# Installation

Via [npm](https://github.com/npm/cli):
`$ npm i https://github.com/wuzi/altv-decorators.git

Via [yarn](https://yarnpkg.com/cli/install):
`$ yarn add https://github.com/wuzi/altv-decorators.git

# Examples

**NinjaEvents.ts** *event example*
```typescript
import { event, eventable } from 'altv-decorators'

@eventable()
class NinjaEvents {
  @event("playerJoin")
  ninjaJoin(player: PlayerMp) {
    console.log(`Ninja ${player.name} has just joined.`))
  }
}
```

**NinjaKeys.ts** *key example*
```typescript
import { key, keyable } from 'altv-decorators'

@keyable()
class NinjaKeys {
  @key('release', 82)
  ninjaJoin(player: PlayerMp) {
    console.log(`Ninja ${player.name} released T key.`))
  }
}
```

# API
## **eventable()**
Resolve any events which passed to classes with decorator eventable

## **event(eventName)**
**Parameters**
* `eventName` [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)[] - event(s) name, which will be added to `alt.on('eventName', callback)`

## **keyable()**
Resolve any key presses/releases which passed to classes with decorator keyable

## **key(action, keyCode)**
**Parameters**
* `action` [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) - key action (`press` or `release`)
* `keyCode` [number](https://keycode.info) - the key code to bind the function
