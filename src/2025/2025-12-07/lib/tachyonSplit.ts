import {
  createGrid,
  getCoordinateSymbol,
  getGridCoordinate,
  getGridDimensions,
  isOutOfBounds
} from '@/aoc/grid/utils.js'

import type { Point } from '@/aoc/point/types.js'

/**
 * Counts the number of times the tachyon beam splitted starting from its initial position.
 * @param {string[][]} input - Tachyon manifold - a 2D array input of symbols.
 * @returns {number} Total number of times the tachyon beam splitted.
 */
export const countTachyonSplit = (input: string[][], isMarkBeams: boolean = false) => {
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
      } else {
        if (nextSymbol === SPACE_SYMBOL && isMarkBeams) {
          input[next.y - 1]![next.x] = '|'
          input[next.y]![next.x] = '|'
        }

        cursor = { ...next }
      }
    } else {
      // pop nodes
      cursor = nodes.pop() as Point
    }
  }

  return countSplitters
}

/**
 * Counts the cummulative sum of tachyon particles flowing to each left/right cell below splitters,
 * summing their total in the last row to count the total timelines the single tachyon particle
 * ended up on starting from its initial position.
 * @param {string[][]} input - 2D array input.
 * @returns {number} Count of timelines the tachyon particle went through.
 */
export const countTimelines = (input: string[][]) => {
  const start = getGridCoordinate(input, 'S')
  const dimensions = getGridDimensions(input)
  const computeGrid = createGrid(input, 0) as number[][]
  const SPLITTER_SYMBOL = '^'

  computeGrid[start.y]![start.x] = 1

  for (let y = 0; y < computeGrid.length - 1; y += 1) {
    const row = computeGrid[y] ?? []

    for (let x = 0; x < row.length; x += 1) {
      const current = { x, y }
      const next = { ...current, y: y + 1 }

      const symbol = getCoordinateSymbol(current, input)?.symbol ?? '-'
      const countValue = row[current.x] ?? 0

      if (countValue === 0) {
        continue
      }

      // Splitter symbol: record the cummulative sum of particle presence flowing from the start cell
      // to the left/right and next (downward) cells
      if (symbol === SPLITTER_SYMBOL) {
        const leftCell = { ...next, x: current.x - 1 }
        const rightCell = { ...next, x: current.x + 1 }

        // Increment sum in the left flow
        if (!isOutOfBounds(leftCell, dimensions)) {
          computeGrid[leftCell.y]![leftCell.x]! += countValue
        }

        // Increment sum in the right flow
        if (!isOutOfBounds(rightCell, dimensions)) {
          computeGrid[rightCell.y]![rightCell.x]! += countValue
        }
      } else {
        // Increment sum in the downward flow
        computeGrid[next.y]![next.x]! += countValue
      }
    }
  }

  const sumLastRow = (computeGrid[computeGrid.length - 1] ?? [])
    .reduce((list, item) => list + item, 0)

  return sumLastRow
}
