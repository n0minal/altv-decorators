/**
 * An enviroment
 */
export const enum ENVIROMENT {
  SERVERSIDE,
  CLIENTSIDE,
}

/**
 * An interface of command entity
 */
export interface ICommand {
  cmd: string[];
  desc: string[];
  callable: string;
  group?: string;
}

/**
 * An interface of event entity
 */
export interface IEvent {
  event: string[];
  callable: string;
  func?: Function;
}

export interface IKey {
  code: number;
  action: "press" | "release";
  callable: string;
  func?: Function;
}

/**
 * A collection of commands
 */
export type CommandCollection = Map<string, ICommand | ICommand[]>;

/**
 * A collection of events
 */
export type EventCollection = Map<string, IEvent[]>;

/**
 * A collection of keys
 */
export type KeyCollection = Map<string, IKey[]>;
