import type { Point } from '@/aoc/point/types.js'

import { getDiagonalNeighbors } from '@/aoc/grid/utils.js'
import { getGridDimensions, isOutOfBounds } from '@/aoc/grid/utils.js'


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
