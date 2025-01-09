import type { RobotProperty } from './types.js'

import { Board } from './board.js'
import { printGrid } from '@/aoc/grid/utils.js'
import type { RobotSimulationParams } from './types.js'

/**
 * Counts the safety factor after `params.seconds` of simulating moving the robots.
 * @typedef {RobotSimulationParams} params - Object input parameters. See the `RobotSimulationParams` interface for more information.
 * @returns {number} Safety factor after `params.seconds` have elapsed.
 */
export const calculateSafetyFactor = (params: RobotSimulationParams): number => {
  const { length, width } = params.gridMeta
  const board = new Board({ length, width })

  // Set robots initial data
  for (let i = 0; i < params.data.length; i += 1) {
    board.setRobot(params.data[i] as RobotProperty)
  }

  if (params.log) {
    console.log('Initialize grid')
    printGrid(board.grid)
  }

  // Simulate robots walking
  board.simulateRobotsWalk(params.seconds)

  if (params.log) {
    console.log(`Robots on grid after ${params.seconds} seconds`)
    printGrid(board.grid)
  }

  // Count robots per quadrant
  const robotsByQuadrant: Record<number, number> = {}

  for (let i = 0; i < board.robots.length; i += 1) {
    const { x, y } = board.robots[i] as RobotProperty

    const quadrant = board.getQuadrant({ x, y })
    if (quadrant === -1) continue

    if (robotsByQuadrant[quadrant] === undefined) {
      robotsByQuadrant[quadrant] = 1
    } else {
      robotsByQuadrant[quadrant] += 1
    }
  }

  const safetyFactor = Object.values(robotsByQuadrant).reduce((total, number) => {
    return total *= number
  }, 1)

  return safetyFactor
}
