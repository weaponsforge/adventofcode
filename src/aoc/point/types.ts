/**
 * Point (y,x) coordinate in a 2D array
 * @type {Object}
 * @property {number} x - x-coordinate of the point
 * @property {number} y - y-coordinate of the point
 */
export interface Point {
  x: number;
  y: number;
}

/**
 * Point (y,x) coordinate in a 2D array with a direction that denotes either the vertical (y) or horizontal (x) direction of a `Point`
 * @type {Object}
 * @extends {Point}
 * @property {number} direction - Vertical (y) or horizontal (x) direction of a `Point`
 */
export interface Coordinate extends Point {
  direction: 1 | -1;
}

/**
 * Point (y,x) coordinate in a 2D array with symbol character
 * @type {Object}
 * @extends {Point}
 * @property {string | number} symbol - Character or number symbol in the (y,x) coordinate location
 */
export interface PointSymbol extends Point {
  symbol: string;
}

/**
 * Defines the x and y direction of a point and a 2D array data.
 * @type {Object}
 * @property {number} xDirection - `-1` or `1` x-coordinate direction
 * @property {number} yDirection - `-1` or `1` y-coordinate direction
 * @property {string[][] | number[][]} data - 2D string or number array
 */
export interface CoordinateData {
  xDirection: 1 | -1;
  yDirection: 1 | -1;
  data: string[][] | number[][]
}

/**
 * Point (y,x) coordinate in a 2D array with a (y,x) direction
 * @type {Object} PointSteps
 * @property {number} x - x-coordinate of the point
 * @property {number} y - y-coordinate of the point
 * @property {Object} direction - Direction vector
 * @property {number} direction.x - Left/right x-direction denoted by `+1` or `-1`
 * @property {number} direction.y - Up/down y-direction denoted by `-1` or `+1`
 */
export type PointSteps = {
  x: number;
  y: number;
  direction: {
    x: number;
    y: number;
  }
}

/**
 * Point (y,x) coordinate in a 2D array with a list of valid coordinate `PointSteps[]` from its location.
 * @type {Object} PointDirection
 * @property {number} x - x-coordinate of the point
 * @property {number} y - y-coordinate of the point
 * @property {PointSteps[]} validSteps - List of valid up/down/left/right coordinates from the (y,x) position.
 */
export type PointDirection = {
  x: number;
  y: number;
  validSteps: PointSteps[]
}
