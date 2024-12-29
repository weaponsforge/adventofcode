/**
 * Point (y,x) coordinate in a 2D array with direction
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
 * Point (y,x) coordinate in a 2D array with a list of valid coordinates from its location.
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

/**
 * Represents a "(y,x)" coordinate in string and its value from a 2D array.
 * @param {string} coordinate - String version of an "(y,x)" coordinate
 * @param {string | number} symbol - Number or character in a 2D arary denoted by the (y,x) coordinate
 */
export type GridCoordinateSymbol = {
  coordinate: string;
  symbol: string | number;
}

/**
 * Data returned by the trailhead scores counting function.
 * @param {Record<string, string[]>} scores - Object list of trailhead scores per (y,x) coordinate that starts with a unique `0` and ends with a `9`
 * @param {number} total - Total sum of the `scores`
 */
export type TrailScores = {
  scores: Record<string, string[]>,
  total: number;
}
