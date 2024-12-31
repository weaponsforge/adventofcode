import type { Point } from '@/2024/2024-12-08/lib/types.js'
import type { IllegalCoordinateParams } from './types.js'

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
 * Checks if a point at coordinate (y,x) in a grid is illegal: if it's out of bounds of the grid area
 * or if its symbol differs from the symbol parameter.
 * @param params {IllegalCoordinateParams} - Object input parameters.
 *  See the `IllegalCoordinateParams` for more information.
 * @returns {boolean} Flag if a coordinate is illegae
 */
export const isIllegalCoordinate = (params: IllegalCoordinateParams): boolean => {
  const { point, symbol, gridMeta } = params

  return (
    point.x < 0 ||
    point.x >= gridMeta.width ||
    point.y < 0 ||
    point.y >= gridMeta.length ||
    params.grid[point.y]![point.x] !== symbol
  )
}
