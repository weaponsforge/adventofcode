import type { Point, PointSymbol } from '@/aoc/point/types.js'

import { getCoordinateSymbol, getGridDimensions, isOutOfBounds } from '@/aoc/grid/utils.js'

import {
  getBoxStartCoordinates,
  getReverseSymbol,
  getSymbolDirection,
  isExpandedBoxSymbol
} from './utils.js'

import { Robot } from './robot.js'

/**
 * Moves the robot and the expanded (2x size) boxes across the grid
 * @param {string[][]} grid - 2D string array containing walls, boxes and space data
 * @param {string[]} instructions - String array containing the robot's pushBox instructions
 * @returns {void}
 */
export const moveExpandedBoxes = (grid: string[][], instructions: string[]): void => {
  const dimensions = getGridDimensions(grid)
  const robot = new Robot(grid, instructions)

  while (robot.instructions.length > 0) {
    robot.readInstruction()

    let nextPos = robot.next()
    let nextSymbol = getCoordinateSymbol(nextPos, grid)?.symbol as string

    // Move robot to the next blank space
    if (nextSymbol === '.') {
      grid[robot.pos.y]![robot.pos.x] = '.'
      grid[nextPos.y]![nextPos.x] = robot.symbol
      robot.walk()
    }

    if (isExpandedBoxSymbol(nextSymbol)) {
      // Move boxes along the horizontal x-axis
      if (robot.direction.x !== 0) {
        const boxes: Point[] = [nextPos]

        while (!isOutOfBounds(nextPos, dimensions) && isExpandedBoxSymbol(nextSymbol)) {
          nextPos = robot.next(nextPos)
          nextSymbol = getCoordinateSymbol(nextPos, grid)?.symbol as string

          if (isExpandedBoxSymbol(nextSymbol)) {
            boxes.push(nextPos)
          }
        }

        // Move groups of boxes if there's a space at their end
        if (nextSymbol === '.' && boxes.length > 0) {
          for (let i = boxes.length - 1; i >= 0; i -= 1) {
            const next = robot.next(boxes[i])
            const temp = grid[boxes[i]!.y]![boxes[i]!.x] as string

            grid[boxes[i]!.y]![boxes[i]!.x] = '.'
            grid[next.y]![next.x] = temp
          }

          // Move the robot
          grid[robot.pos.y]![robot.pos.x] = '.'
          robot.walk()
          grid[robot.pos.y]![robot.pos.x] = robot.symbol
        }
      }

      // Move boxes along the vertical y-axis
      if (robot.direction.y !== 0) {
        // 1st box after the robot
        const { side1, side2 } = getBoxStartCoordinates(nextPos, grid)
        let start = { ...side1 }

        const visited: PointSymbol[] = []
        const retrace: PointSymbol[] = [side2]
        let canMove = true

        while (start && isExpandedBoxSymbol(start.symbol)) {
          const next = robot.next(start)
          const nextSym = getCoordinateSymbol(next, grid)!.symbol

          // Store the visited box coordinates
          visited.push(start)

          if (['.', '#'].includes(nextSym as string)) {
            // End of line reached (space or wall): Retrace unvisited connected coordinates
            start = retrace.pop() as PointSymbol

            // Connected boxes will not move at anytime a wall `#` is encountered
            if (nextSym === '#') {
              canMove = false
            }
          } else if (nextSym === start.symbol) {
            // Found stack of boxes:
            // Move to the next (up/down) coordinate if its symbol is similar to the current symbol
            start = { ...next } as PointSymbol
            start.symbol = getCoordinateSymbol(start, grid)!.symbol
          } else if (nextSym === getReverseSymbol(start.symbol)) {
            // Found half-stacked boxes:
            // Stack the next coordinate if it's symbol is different from the current symbol
            retrace.push({ ...next, symbol: nextSym })

            // Move to the next diagonally-aligned half-box symbol coordinate
            const xDirection = getSymbolDirection(nextSym)

            if (xDirection) {
              start = { ...next, x: next.x + xDirection } as PointSymbol
              start.symbol = getCoordinateSymbol(start, grid)!.symbol
            }
          }
        }

        // Move the boxes
        if (canMove) {
          visited
            .sort((a, b) => {
              if (robot.direction.y < 0) {
                return (a.y < b.y ? -1 : 1)
              } else {
                return (a.y > b.y ? -1 : 1)
              }
            })
            .forEach(item => {
              const next = robot.next(item)
              grid[item.y]![item.x] = '.'
              grid[next.y]![next.x] = item.symbol
            })

          grid[robot.pos.y]![robot.pos.x] = '.'
          grid[nextPos.y]![nextPos.x] = robot.symbol
          robot.walk()
        }
      }
    }
  }
}

/**
 * Calculates the GPS sum of all expanded boxes in the grid
 * @param {string[][]} grid - 2D string array containing walls, boxes and space data
 * @returns {number} GPS sum of all boxes in the grid
 */
export const calculateExpandedGPS = (grid: string[][]): number => {
  const dimensions = getGridDimensions(grid)
  let sumGPS = 0

  for (let y = 0; y < dimensions.length; y += 1) {
    for (let x = 0; x < dimensions.width; x += 1) {
      if (grid[y]![x] === '[') {
        sumGPS += y * 100 + x
      }
    }
  }

  return sumGPS
}
