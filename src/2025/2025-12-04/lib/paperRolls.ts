import { getCrossNeighbors, getDiagonalNeighbors } from '@/aoc/grid/utils.js'
import type { Point } from '@/aoc/point/types.js'

type AccessibleRolls = {
  count: number;
  coordinates: Point[];
}

/**
 * Returns the number of paper rolls that can be accessed by fork lifts and their `Point[]` coordinates.
 * Accessible paper rolls have "fewer than 4 rolls of paper in the eight adjacent positions"
 * @param {string[][]} input - Rolls of paper `"@"` arranged in a grid.
 * @returns {AccessibleRolls} An object `{ count, coordinates }` containing the number of paper rolls that can be accessed by fork lifts, and the `Point[]` coordinates of the accessible paper rolls.
 */
export const accessiblePaperRolls = (input: string[][]): AccessibleRolls => {
  const PAPER_ROLL = '@'

  const coordinates: Point[] = []
  let paperRollsCount = 0

  for (let row = 0; row < input.length; row += 1) {
    const line = input[row] as string[]

    for (let col = 0; col < line?.length; col += 1) {
      if (line[col] !== PAPER_ROLL) {
        continue
      }

      const point = { x: col, y: row }
      const cross = getCrossNeighbors(point, input)
      const diagonals = getDiagonalNeighbors(point, input)

      const crossCount = cross.filter(item => item.symbol === PAPER_ROLL)
      const diagonalsCount = diagonals.filter(item => item.symbol === PAPER_ROLL)
      const paperNeighborsCount = crossCount.length + diagonalsCount.length

      if (paperNeighborsCount < 4) {
        paperRollsCount += 1
        coordinates.push(point)
      }
    }
  }

  return {
    count: paperRollsCount,
    coordinates
  }
}

/**
 * Counts the total number of paper rolls removed by the Elves after
 * removing the "accessible" marked paper rolls.
 * @param {string[][]} input - Rolls of paper `"@"` arranged in a grid.
 * @returns {number} Total number of paper rolls removed by the Elves
 */
export const totalPaperRolls = (input: string[][]) => {
  let paperRolls = accessiblePaperRolls(input)
  let removedCount = 0

  while (paperRolls.count !== 0) {
    removedCount += paperRolls.count

    // Remove the accessible paper rolls
    for (let i = 0; i < paperRolls.coordinates.length; i += 1) {
      const point = paperRolls.coordinates[i]

      if (!point) continue
      input[point.y]![point.x] = 'x'
    }

    paperRolls = accessiblePaperRolls(input)
  }

  return removedCount
}
