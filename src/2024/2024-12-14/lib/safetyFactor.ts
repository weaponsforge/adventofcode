import type { RobotProperty } from './types.js'

import { Board } from './board.js'
import { isOutOfBounds, printGrid } from '@/aoc/grid/utils.js'
import type { RobotSimulationParams } from './types.js'

/**
 * Counts the safety factor after `params.seconds` of simulating moving the robots.
 * @typedef {RobotSimulationParams} params - Object input parameters. See the `RobotSimulationParams` interface for more information.
 * @returns {number} Safety factor after `params.seconds` have elapsed.
 */
export const calculateSafetyFactor = (params: RobotSimulationParams) => {
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
  for (let i = 0; i < params.seconds; i += 1) {
    for (let j = 0; j < board.robots.length; j += 1) {
      // Robot's current (y,x) position
      let { x, y } = board.robots[j] as RobotProperty

      // Increment/decrement the current position by velocity
      x += board.robots[j]!.velocity.x
      y += board.robots[j]!.velocity.y

      // Correct the new (y,x) position if its out of the grid bounds
      if (isOutOfBounds({ x, y }, board.settings)) {
        if (x > board.settings.width - 1) {
          const overflow = x - board.settings.width
          x = overflow
        } else if (x < 0) {
          x = board.settings.width + x
        }

        if (y > board.settings.length - 1) {
          const overflow = y - board.settings.length
          y = overflow
        } else if (y < 0) {
          y = board.settings.length + y
        }
      }

      // Set the robot's new (y,x) position
      board.moveRobot(j, { x, y })
    }
  }

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
