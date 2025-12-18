import {
  getCoordinateSymbol,
  getGridCoordinate,
  getGridDimensions,
  isOutOfBounds
} from '@/aoc/grid/utils.js'

import type { Point } from '@/aoc/point/types.js'

/**
 * Counts the number of times the tachyon beam splitted starting from its initial position.
 * @param {string[][]} input - Tachyon manifold - a 2D array input of symbols
 * @returns {number} Total number of times the tachyon beam splitted.
 */
export const countTachyonSplit = (input: string[][]) => {
  const start = getGridCoordinate(input, 'S')
  const dimensions = getGridDimensions(input)
  const nodes: Point[] = [start]
  const visited: Record<string, number> = {}

  let cursor = { ...start }
  let next = { x: -1, y: -1 }
  let countSplitters = 0

  const SPACE_SYMBOL = '.'
  const SPLITTER_SYMBOL = '^'

  while (nodes.length > 0) {
    // Move down one step
    next = { ...cursor, y: cursor.y + 1 }

    if (!isOutOfBounds(next, dimensions)) {
      // Continue downwards
      const nextSymbolData = getCoordinateSymbol(next, input)

      if (!nextSymbolData) {
        cursor = { ...next }
        continue
      }

      const { symbol: nextSymbol, coordinate } = nextSymbolData
      const right = { ...next, x: next.x + 1 }
      const left = { ...next, x: next.x - 1 }

      if (nextSymbol === SPLITTER_SYMBOL) {
        // Move left
        cursor = { ...left }

        if (visited[coordinate] === undefined) {
          visited[coordinate] = 1
          countSplitters += 1

          // Keep the right node
          nodes.push(right)
        }
      } else if (nextSymbol === SPACE_SYMBOL) {
        input[next.y - 1]![next.x] = '|'
        input[next.y]![next.x] = '|'

        cursor = { ...next }
      } else {
        cursor = { ...next }
      }
    } else {
      // pop nodes
      cursor = nodes.pop() as Point
    }
  }

  return countSplitters
}
