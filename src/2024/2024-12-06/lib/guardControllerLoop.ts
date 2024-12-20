import { GuardDirection, GuardStatus } from './guard.types.js'
import { Guard } from './guard.js'
import { Grid } from './grid.js'
import { guardController } from './guardController.js'

/**
 * Runs the `Guard` on a `Grid` with obstacles, checking the placement of paths and obstacles that will make the `Guard` walk in an infinite loop
 * @param {string[][]} data 2D string array containing the original `Grid` inserted with a new obstruction symbol `"#"
 * @param {boolean} printTrail Flag to display the distinct guard positions in the grid
 * @returns {number} Number of unique guard positions
 */
export const gridHasInfiniteLoop = (
  data: string[][],
  printTrail: boolean = false
): boolean => {
  const grid = new Grid(data, '#')
  const initialPosition = grid.findGuardStartPosition()

  const guard = new Guard({
    ...initialPosition,
    yPos: initialPosition.yPos - 1
  })

  const trail = []
  let isLoop = false

  while (
    guard.status !== GuardStatus.EXIT &&
    !grid.isOutOfBounds(guard.xPos, guard.yPos) &&
    !isLoop
  ) {
    let yDirection = 0
    let xDirection = 0

    // Find the guard's direction
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
      const coord = `${guard.xPos},${guard.yPos},${guard.direction}`

      if (trail.indexOf(coord) >= 0) {
        // If the coordinates and direction repeat,
        // Guard has already entered an infinite loop
        isLoop = true
      } else {
        // Note the (x,y) coordinates and direction
        trail.push(coord)
      }

      grid.mark(guard.xPos, guard.yPos)
      guard.walk(xDirection, yDirection)
    } else {
      // Turn (rotate clockwise) if the symbol ahead is an obstruction `"#"
      guard.turn()
    }
  }

  if (printTrail) grid.print()
  return isLoop
}

/**
 * Counts the number of positions in the `Grid` in which inserting one (1)
 * obstruction symbol # will cause the `Guard` to walk in an infinite loop.
 * @param {number} data data 2D string array containing the `Grid` paths
 */
export const findObstructionPositions = (data: string[][], printGrid: boolean = false) => {
  let loopCount = 0
  const paths: Grid = guardController(data)
  const extras = Array.from({ length: data.length }, () => Array(data.length).fill('.'))

  for (let y = 0; y < paths.board.length; y += 1) {
    const row = paths.board[y] as string[]

    for (let x = 0; x < row.length; x += 1) {
      if (row[x] !== 'X') continue
      if (x === paths.start.x && y === paths.start.y) {
        continue
      }

      const xData: string[][] = structuredClone(data)
      const r = xData[y] as string[]
      r[x] = '#'

      const isLoop = gridHasInfiniteLoop(xData)

      if (isLoop) {
        const e = extras[y] as string[]
        e[x] = 'O'
        loopCount += 1
      }
    }
  }

  if (printGrid) console.log(extras.map(x => x.join(' ')))
  return loopCount
}
