

import { Guard, GuardDirection } from './guard.js'
import { Grid } from './grid.js'
import { GuardStatus } from './guard.js'

/**
 *
 * @param {string[][]} data 2D string array containing the guards grid paths
 * @param {boolean} printTrail Flag to display the distinct guard positions in the grid
 * @returns {number} Number of unique guard positions
 */
export const guardController = (data: string[][], printTrail: boolean = false): number => {
  const grid = new Grid(data)
  const guard = new Guard(grid.findGuardStartPosition())

  while (
    guard.status !== GuardStatus.EXIT &&
    !grid.isOutOfBounds(guard.xPos, guard.yPos)
  ) {
    let yDirection = 0
    let xDirection = 0

    switch(guard.direction) {
    case GuardDirection.UP:
      yDirection = -1
      break
    case GuardDirection.DOWN:
      yDirection = 1
      break
    case GuardDirection.LEFT:
      xDirection = -1
      break
    case GuardDirection.RIGHT:
      xDirection = 1
      break
    }

    if (grid.board[guard.yPos + yDirection]?.[guard.xPos + xDirection] !== grid.obstruction) {
      if (
        guard.yPos === grid.board.length - 1 &&
        guard.xPos === (grid.board[0] as string[])?.length - 1
      ) {
        guard.exit()
      } else {
        grid.mark(guard.xPos, guard.yPos)
        guard.walk(xDirection, yDirection)
      }
    } else {
      guard.turn()
    }
  }

  if (printTrail) {
    grid.print()
  }

  return grid.positionCount
}
