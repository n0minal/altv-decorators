import 'reflect-metadata'
import * as alt from 'alt'

import { ENVIROMENT, CommandCollection, ICommand, EventCollection, IEvent, KeyCollection, IKey } from './types'

export * from './types'

/**
 * The current enviroment
 */
export const enviroment = typeof alt.Player.local !== 'undefined' ? ENVIROMENT.CLIENTSIDE : ENVIROMENT.SERVERSIDE

/**
 * A storage of commands which is called by decorator command
 */
export const registeredCommands: CommandCollection = new Map<string, ICommand | ICommand[]>()

/**
 * A storage of events which is called by decorator event
 */
export const registeredEvents: EventCollection = new Map<string, IEvent[]>()

/**
 * A storage of keys which is called by decorator key
 */
export const registeredKeys: KeyCollection = new Map<string, IKey[]>()

export * from './event'
export * from './eventable'
export * from './key';
export * from './keyable';
