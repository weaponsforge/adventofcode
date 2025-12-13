import { getCrossNeighbors, getDiagonalNeighbors } from '@/aoc/grid/utils.js'

/**
 * Counts the number of paper rolls that can be accessed by fork lifts.
 * Accessible paper rolls have "fewer than 4 rolls of paper in the eight adjacent positions"
 * @param {string[][]} input - Rolls of paper `"@"` arranged in a grid.
 * @returns {number} Number of paper rolls that can be accessed by fork lifts
 */
export const accessiblePaperRolls = (input: string[][]) => {
  const PAPER_ROLL = '@'
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
      }
    }
  }

  return paperRollsCount
}
