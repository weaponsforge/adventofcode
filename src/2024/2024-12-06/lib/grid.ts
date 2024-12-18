import { GuardStatus, GuardDirection } from './guard.js'
import type { GuardState } from './guard.js'

export type GridDimensions = {
  length: number;
  width: number;
}

export class Grid {
  board: string[][] = []
  length: number = 0
  width: number = 0
  positionCount: number = 0

  obstruction = '#'
  pathSymbol = '.'

  constructor (data: string[][]) {
    this.board = data
    this.length = data.length
    this.width = (data[0])?.length as number
  }

  /**
   * Finds the initial position and state of the guard in a 2D board array
   * @param data {string[][]} 2D string array of the guard board
   * @returns {GuardState} Initial position and state of the guard
   */
  findGuardStartPosition (): GuardState {
    const GuardDirections: string[] = Object.values(GuardDirection)

    const initialState: GuardState = {
      direction: null,
      xPos: -1,
      yPos: -1,
      status: GuardStatus.IDLE
    }

    for (let y = 0; y < this.board.length; y += 1) {
      const row = this.board[y]

      if (row === undefined) {
        throw new Error('Undefined row')
      }

      for (let i = 0; i < GuardDirections.length; i += 1) {
        const indexOfDirection = row.indexOf(GuardDirections[i] as string)

        if (indexOfDirection >= 0) {
          initialState.direction = GuardDirections[i] as GuardDirection
          initialState.xPos = indexOfDirection
          initialState.yPos = y
          initialState.status = GuardStatus.ACTIVE
          break
        }
      }

      if (initialState.status === GuardStatus.ACTIVE) break
    }

    return initialState
  }

  /**
   * Checks if an (x,y) coordinate is outside the grid area
   * @param {number} x array x coordinate
   * @param {number} y array y coordinate
   * @returns {boolean} Flag indicating if the guard is outside the grid
   */
  isOutOfBounds (x: number, y: number): boolean {
    const row = this.board[0] as string[]

    return x < 0 ||
      x >= row.length ||
      y < 0 ||
      y >= this.board.length
  }

  /**
   * Marks an (x,y) coordinate in the grid
   * @param {number} x array x coordinate
   * @param {number} y array y coordinate
   * @returns {void}
   */
  mark (x: number, y: number): void {
    const row = this.board[y]

    if (row !== undefined && row[x] !== 'X') {
      row[x] = 'X'
      this.positionCount += 1
    }
  }

  /**
   * Displays the guard's distinct positions in the grid
   */
  print () {
    console.log(this.board.map(row => row.join(' ')))
  }
}
