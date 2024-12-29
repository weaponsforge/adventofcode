import { GuardDirection, GuardStatus } from './guard.types.js'
import { Guard } from './guard.js'
import { Grid } from './grid.js'

/**
 * Runs the `Guard` on the grid, counting distinct positions/steps
 * @param {string[][]} data 2D string array containing the guards grid paths
 * @param {boolean} printTrail Flag to display the distinct guard positions in the grid
 * @returns {number} Number of unique guard positions
 */
export const guardController = (data: string[][], printTrail: boolean = false): Grid => {
  const grid = new Grid(structuredClone(data))
  const guard = new Guard(grid.findGuardStartPosition())

  while (
    guard.status !== GuardStatus.EXIT &&
    !grid.isOutOfBounds(guard.xPos, guard.yPos)
  ) {
    let yDirection = 0
    let xDirection = 0

    // Set the guard's direction in the grid
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
    default:
      break
    }

    if (
      guard.yPos === grid.board.length - 1 &&
      guard.xPos === (grid.board[0] as string[])?.length - 1
    ) {
      // Exit if the coordinates are at the edge of the Grid
      guard.exit()
    }

    const xAhead = guard.xPos + xDirection
    const yAhead = guard.yPos + yDirection
    const symbol = grid.board[yAhead]?.[xAhead]

    if (symbol !== grid.obstruction) {
      // Walk and mark the current coordinates
      grid.mark(guard.xPos, guard.yPos)
      guard.walk(xDirection, yDirection)
    } else {
      // Turn (rotate clockwise) if the symbol ahead is an obstruction `"#"
      guard.turn()
    }
  }

  if (printTrail) grid.print()
  return grid
}
