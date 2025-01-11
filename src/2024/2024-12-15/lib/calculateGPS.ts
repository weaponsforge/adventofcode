import type { Point } from '@/aoc/point/types.js'

import { getCoordinateSymbol, isOutOfBounds } from '@/aoc/grid/utils.js'
import { Robot } from './robot.js'

/**
 * Moves the robot and boxes across the grid
 * @param {string[][]} grid - 2D string array containing walls, boxes and space data
 * @param {string[]} instructions - String array containing the robot's move instructions
 * @returns {void}
 */
export const moveBoxes = (grid: string[][], instructions: string[]): void => {
  const dimensions = { length: grid.length, width: grid[0]!.length }
  const robot = new Robot(grid, instructions)

  while (robot.instructions.length > 0) {
    robot.readInstruction()

    let nextPos = robot.next()
    let nextSymbol = getCoordinateSymbol(nextPos, grid)?.symbol

    // Move robot to the next blank space
    if (nextSymbol === '.') {
      grid[robot.pos.y]![robot.pos.x] = '.'
      grid[nextPos.y]![nextPos.x] = robot.symbol
      robot.walk()
    }

    // Find connected boxes until a space symbol
    if (nextSymbol === 'O') {
      const boxes: Point[] = [nextPos]

      while (!isOutOfBounds(nextPos, dimensions) && nextSymbol === 'O') {
        nextPos = robot.next(nextPos)
        nextSymbol = getCoordinateSymbol(nextPos, grid)?.symbol

        if (nextSymbol === 'O') {
          boxes.push(nextPos)
        }
      }

      // Move groups of boxes if there's a space at their end
      if (nextSymbol === '.' && boxes.length > 0) {
        for (let i = boxes.length - 1; i >= 0; i -= 1) {
          const next = robot.next(boxes[i])

          grid[boxes[i]!.y]![boxes[i]!.x] = '.'
          grid[next.y]![next.x] = 'O'
        }

        // Move the robot
        grid[robot.pos.y]![robot.pos.x] = '.'
        robot.walk()

        grid[robot.pos.y]![robot.pos.x] = robot.symbol
      }
    }
  }
}

/**
 * Calculates the GPS sum of all boxes in the grid
 * @param {string[][]} grid - 2D string array containing walls, boxes and space data
 * @returns {number} GPS sum of all boxes in the grid
 */
export const calculateGPS = (grid: string[][]): number => {
  const dimensions = { length: grid.length, width: grid[0]!.length }
  let sumGPS = 0

  for (let y = 0; y < dimensions.length; y += 1) {
    for (let x = 0; x < dimensions.width; x += 1) {
      if (grid[y]![x] === 'O') {
        sumGPS += y * 100 + x
      }
    }
  }

  return sumGPS
}
