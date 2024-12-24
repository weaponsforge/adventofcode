import type { Antenna, Point } from './types.js'
import { GridAntiNodes } from './GridAntinodes.js'

/**
 * Counts the unique locations in the grid that contains an antinode
 * @param {string[][]} inputFile 2D string array containing grid paths and `Antennas`
 * @returns {number} Total number of unique antinodes in the grid
 */
export const countAntinodes = (inputFile: string[][]): number => {
  const grid = new GridAntiNodes(inputFile)

  while(grid.currentAntIndex < grid.antennas.length - 1) {
    // Antennas
    const a1 = grid.antennas[grid.currentAntIndex] as Antenna
    const a2 = grid.antennas[grid.nextAntIndex] as Antenna

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

    // Antinode 1 coordinates
    const node1: Point = {
      x: a1.x - diff.x,
      y: a1.y - diff.y
    }

    // Antinode 2 coordinates
    const node2: Point = {
      x: a2.x + diff.x,
      y: a2.y + diff.y
    }

    if (
      node1.y < inputFile.length && node1.y >= 0 &&
      node1.x < inputFile[0]!.length && node1.x >= 0
    ) {
      grid.storeAntinode(`${node1.y},${node1.x}`)
    }

    if (
      node2.y < inputFile.length && node2.y >= 0 &&
      node2.x < inputFile[0]!.length && node2.x >= 0
    ) {
      grid.storeAntinode(`${node2.y},${node2.x}`)
    }

    grid.incrementCursors()
  }

  grid.printGrid(true)
  return grid.antinodes.size
}
