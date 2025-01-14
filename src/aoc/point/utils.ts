import type { Point } from './types.js'

/**
 * Finds all coordinates of the neighboring plots from a specified coordinate (up/down/left/right)
 * @param {Point} point - (y,x) coordinate object in a 2D array grid
 * @param {GridDimensions} gridMeta - grid length and width
 * @param {string[][]} grid - 2D string array input
 * @returns {PointSteps[]} Array of neighboring similar plants from the given `point`
 */
export const findNeighbors = (point: Point): Point[] | undefined => {
  // All 4 possible locations (directions) from a coordinate
  const steps = [
    { ...point, x: point.x - 1 }, // left
    { ...point, x: point.x + 1 }, // right
    { ...point, y: point.y - 1 }, // down
    { ...point, y: point.y + 1 }  // up
  ]

  return steps
}

/**
 * Checks if two (2) `Points` are diagonally aligned
 * @param {Point} p1 - (y,x) Start `Point`
 * @param {Point} p2 - (y,x) End `Point`
 * @returns {boolean} Flag indicating if 2 `Points` are diagonally aligned
 */
export const isDiagonal = (p1: Point, p2: Point): boolean => {
  const diff = {
    x: Math.abs(p1.x - p2.x),
    y: Math.abs(p1.y - p2.y)
  }

  return diff.x == 1 && diff.y === 1
}
