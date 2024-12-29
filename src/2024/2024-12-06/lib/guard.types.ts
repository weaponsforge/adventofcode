/**
 * Directions that a `Guard` can face in a `Grid`
 *
 * @enum {string}
 * @property {string} UP - Upward direction `"^"`
 * @property {string} RIGHT - Upward direction `">"`
 * @property {string} DOWN - Upward direction `"v"`
 * @property {string} LEFT - Upward direction `"<"`
 */
export enum GuardDirection {
  UP = '^',
  RIGHT = '>',
  DOWN = 'v',
  LEFT = '<'
}

/**
 * Mapping of `GuardDirections` to their corresponding numeric direction vectors.
 * The vector indicates the direction of movement in the `Grid`
 *
 * @constant
 * @type {Record<string, number>}
 * @property {string} [GuardDirection.UP] - Upwards movement direction along the y-axis
 * @property {string} [GuardDirection.RIGHT] - Right-ise movement direction along the x-axis
 * @property {string} [GuardDirection.DOWN] - Downwards movement direction along the y-axis
 * @property {string} [GuardDirection.left] - Left-wise movement direction along the x-axis
 */
export const GuardDirectionVector: Record<string, number> = {
  [GuardDirection.UP]: -1,
  [GuardDirection.RIGHT]: 1,
  [GuardDirection.DOWN]: 1,
  [GuardDirection.LEFT]: -1
}

/**
 * `Guard` activity status in the `Grid` board
 *
 * @enum {string}
 * @property {string} IDLE - Initial status
 * @property {string} ACTIVE - Indicates active placement on the `Grid`
 * @property {string} EXIT - Indicates off-Grid placement
 */
export enum GuardStatus {
  IDLE = 'idle',
  ACTIVE = 'active',
  EXIT = 'exit'
}

/**
 * Properties identifying the current state/status of a `Guard`
 *
 * @property {GuardDirection | null} direction Current direction of a `Guard` in the `Grid`
 * @property {number} xPos x-coordinate of the `Guard` in the `Grid`
 * @property {number} yPos y-coordinate of the `Guard` in the `Grid`
 * @property {GuardStatus} status `Guard` activity status
 */
export type GuardState = {
  direction: GuardDirection | null;
  xPos: number;
  yPos: number;
  status: GuardStatus;
}
