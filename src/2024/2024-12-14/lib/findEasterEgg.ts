import type { RobotProperty } from './types.js'

import { Board } from './board.js'
import { getCoordinateSymbol, printGrid } from '@/aoc/grid/utils.js'
import type { RobotSimulationParams } from './types.js'

/**
 * Counts the no. of seconds before robots display (form) the easter egg.
 * @typedef {RobotSimulationParams} params - Object input parameters. See the `RobotSimulationParams` interface for more information.
 * @returns {number} Number of seconds elapsed before robots display the easter egg.
 */
export const findEasterEgg = (params: RobotSimulationParams): number => {
  const { length, width } = params.gridMeta
  const board = new Board({ length, width })

  /**
   * Count of horizontally adjacent robots without breaks (spaces) between.
   * Hints: Count >= 30 marks the rendering start of the xmas tree's top border
   */
  let countAdjacentStreak = 0
  let seconds = 0

  const MAX_ADJACENT_STREAK = 30

  // Set robots initial data
  for (let i = 0; i < params.data.length; i += 1) {
    board.setRobot(params.data[i] as RobotProperty)
  }

  board.simulateRobotsWalk(params.seconds, (elapsedSeconds: number) => {
    if (countAdjacentStreak >= MAX_ADJACENT_STREAK) return

    // Watch for adjacent symbols streak
    for (let y = 0; y < board.settings.length; y += 1) {
      for (let x = 0; x < board.settings.width - 1; x += 1) {
        const symbol = getCoordinateSymbol({ x, y }, board.grid)?.symbol
        const nextSymbol = getCoordinateSymbol({ x: x + 1, y }, board.grid)?.symbol

        if (symbol === board.tileSymbol || nextSymbol === board.tileSymbol) {
          countAdjacentStreak = 0
          continue
        }

        if (symbol === nextSymbol) {
          countAdjacentStreak += 1
        } else {
          countAdjacentStreak = 0
        }

        if (countAdjacentStreak >= MAX_ADJACENT_STREAK) {
          if (params.log) {
            printGrid(board.grid, '')
            console.log('Printing grid at', x, y)
          }

          seconds = elapsedSeconds
          break
        }
      }

      if (countAdjacentStreak >= MAX_ADJACENT_STREAK) break
    }
  })

  return seconds
}
