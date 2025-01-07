import type { Point } from '@/2024/2024-12-08/lib/types.js'
import type { IllegalCoordinateParams, NeighborPoint } from './types.js'

import { getGridDimensions } from '@/aoc/grid/utils.js'
import { isOutOfBounds } from '@/2024/2024-12-10/lib/utils.js'

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

/**
 * Retrieves the four (4) diagonally-aligned (y,x) coordinates and the symbol character from a `Point` in the grid.
 * Substitutes a `"*"` symbol character in the `NeighborPoint.symbol`if the `point` is out of the grid bounds.
 * @param {Point} point - (y,x) coordinate object in a 2D array grid
 * @param {string[][]} data - 2D string array input
 * @returns {NeighborPoint[]} Array of `NeighborPoint` with symbol characters.
 */
export const getDiagonalNeighbors = (point: Point, data: string[][]): NeighborPoint[]  => {
  const grid = getGridDimensions(data)

  // diagonal coordinates
  const diagonals = [
    { x: point.x + 1, y: point.y - 1 },
    { x: point.x - 1, y: point.y - 1 },
    { x: point.x + 1, y: point.y + 1 },
    { x: point.x - 1, y: point.y + 1 }
  ]

  return diagonals.reduce((list: NeighborPoint[], pt) => {
    const item = { x: pt.x, y: pt.y, symbol: '*' }

    if (!isOutOfBounds(pt, grid)) {
      item.symbol = data[pt.y]![pt.x] as string
    }

    return [...list, item]
  }, [])
}

/**
 * Retrieves the four (4) horizontal/vertical aligned (y,x) coordinates and the symbol character from a `Point` in the grid.
 * Substitutes a `"*"` symbol character in the `NeighborPoint.symbol`if the `point` is out of the grid bounds.
 * @param {Point} point - (y,x) coordinate object in a 2D array grid
 * @param {string[][]} data - 2D string array input
 * @returns {NeighborPoint[]} Array of `NeighborPoint` with symbol characters.
 */
export const getCrossNeighbors = (point: Point, data: string[][]): NeighborPoint[] => {
  const neighbors = findNeighbors(point) as Point[]
  const grid = getGridDimensions(data)

  return neighbors.reduce((list: NeighborPoint[], pt) => {
    const item = { x: pt.x, y: pt.y, symbol: '*' }

    if (!isOutOfBounds(pt, grid)) {
      item.symbol = data[pt.y]![pt.x] as string
    }

    return [...list, item]
  }, [])
}

/**
 * Checks if two (2) `Points` are diagonally-aligned
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

/**
 * Counts the "inner" corners from groups of valid L-shaped `Points` that has the `point` parameter coordinate as its center
 * @param {Point} point - Origin (y,x) coordinate object in a 2D array grid
 * @param {string} symbol - Character to check in the `point` coordinate.
 * @param {string[][]} data - 2D string array input
 * @returns {number} Number of inner corners associated with a `Point`
 */
export const innerCorners = (
  point: Point,
  symbol: string,
  data: string[][]
): number => {
  const { x, y } = point
  const grid = getGridDimensions(data)

  const diagonals = getDiagonalNeighbors(point, data)
    .filter(pt => pt.symbol !== symbol)

  let innerCount = 0

  for (let i = 0; i < diagonals.length; i += 1) {
    const diff = { x: diagonals[i]!.x - x, y: diagonals[i]!.y - y }

    const direction = {
      x: diff.x > 0 ? 1 : -1,
      y: diff.y > 0 ? 1 : -1
    }

    const vertical = {
      x, y: point.y + 1 * direction.y
    }

    const horizontal = {
      x: point.x + 1 * direction.x, y
    }

    if (
      !isOutOfBounds(vertical, grid) &&
      !isOutOfBounds(horizontal, grid) &&
      data[vertical.y]![vertical.x] === symbol &&
      data[horizontal.y]![horizontal.x] === symbol
    ) {
      innerCount += 1
    }
  }

  return innerCount
}
