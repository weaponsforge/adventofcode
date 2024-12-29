import type { Antenna, Point } from './types.js'
import { GridAntiNodes } from './GridAntinodes.js'

/**
 * Finds all `Antinode` coordinates along a path within a 2D array (grid) given a `Point`, increment steps and a +/- direction
 * @param {Point} point (y,x) coordinate of an `Antenna` qualified for creating an `Antinode`
 * @param {Point} increments Amount of increments to increase/decrease the (y,x) offsets of a `Point`
 * @param {number} direction `+/-` positive or negative direction for increasing/decreasing a `Point`'s coordinates
 * @typedef {Object} board Dimensions of the 2D grid array
 * @param {number} board.length Length of the 2D array
 * @param {number} board.width Width of the 2D array
 * @returns {Set<string>} All `Antinode` (y,x) coordinates along the path
 */
const getAntinodesInPath = (
  point: Point,
  increments: Point,
  direction: number,
  board: { length: number, width: number  }
): Set<string> => {
  const antinodes = new Set<string>()
  const startPoint = { ...point }

  while (
    startPoint.x >= 0 && startPoint.x < board.length &&
    startPoint.y >= 0 && startPoint.y < board.width
  ) {
    antinodes.add(`${startPoint.y},${startPoint.x}`)

    startPoint.x += increments.x * direction
    startPoint.y += increments.y * direction
  }

  return antinodes
}

/**
 * Counts the unique locations in the grid that contains all locations of antinodes along a path
 * @param {string[][]} inputFile 2D string array containing grid paths and `Antennas`
 * @returns {number} Total number of unique antinodes in the grid
 */
export const countAllAntinodes = (inputFile: string[][]): number => {
  const grid = new GridAntiNodes(inputFile)

  while(grid.currentAntIndex < grid.antennas.length - 1) {
    // Antennas
    const a1 = grid.antennas[grid.currentAntIndex] as Antenna
    const a2 = grid.antennas[grid.nextAntIndex] as Antenna

    const gridDimensions = {
      length: grid.board.length,
      width: grid.board[0]!.length
    }

    // Skip processing antennas with different frequencies
    if (a1.frequency !== a2.frequency) {
      grid.incrementCursors()
      continue
    }

    // Antenna coordinate difference
    const diff = {
      x: a2.x - a1.x,
      y: a2.y - a1.y
    }

    if (
      a1.y < inputFile.length && a1.y >= 0 &&
      a1.x < inputFile[0]!.length && a1.x >= 0
    ) {
      // Find all aligned antinodes
      getAntinodesInPath(a1, diff, -1, gridDimensions)
        .forEach(
          item => grid.storeAntinode(item)
        )
    }

    if (
      a2.y < inputFile.length && a2.y >= 0 &&
      a2.x < inputFile[0]!.length && a2.x >= 0
    ) {
      // Find all aligned antinodes
      getAntinodesInPath(a2, diff, 1, gridDimensions)
        .forEach(
          item => grid.storeAntinode(item)
        )
    }

    grid.incrementCursors()
  }

  grid.printGrid(true)
  return grid.antinodes.size
}
