export enum GuardDirection {
  UP = '^',
  RIGHT = '>',
  DOWN = 'v',
  LEFT = '<'
}

export enum GuardStatus {
  IDLE = 'idle',
  ACTIVE = 'active',
  EXIT = 'exit'
}

export type GuardState = {
  direction: GuardDirection | null;
  xPos: number;
  yPos: number;
  status: GuardStatus;
}

/**
 * @class Guard
 * @description Game object that can move and mark its trail in a 2D grid
 */
export class Guard {
  direction: GuardDirection | null = null
  xPos: number = 0
  yPos: number = 0
  status: GuardStatus = GuardStatus.IDLE

  /**
   * @constructor
   * @param {GuardState} state - Initial state of the guard
   * @param {GridDimensions} [gridDimensions={ length: 5, width: 5 }] - Dimensions of the grid
   */
  constructor (
    state: GuardState
  ) {
    this.direction = state.direction
    this.xPos = state.xPos || 0
    this.yPos = state.yPos || 0
    this.status = state.status
  }

  /**
   * Turn the guard's direction by rotating clockwise once
   * @returns {void}
   */
  turn (): void {
    if (this.direction === null) return

    const directions = Object.values(GuardDirection)
    const currentDirectionIndex = directions.indexOf(this.direction)

    const nextIndex = (currentDirectionIndex + 1) < directions.length
      ? currentDirectionIndex + 1
      : 0

    this.direction = directions[nextIndex] as GuardDirection
  }

  /**
   * Moves the guard one (1) coordinate [x,y] position in the grid and marks the new position
   * @param xDirection {number} x coordinate
   * @param yDirection {number} y coordinate
   * @returns {void}
   */
  walk (xDirection: number, yDirection: number): void {
    if (xDirection === undefined || yDirection === undefined) return

    this.xPos += xDirection
    this.yPos += yDirection
  }

  /**
   * Set's the guard's status to "exited"
   */
  exit (): void {
    this.status = GuardStatus.EXIT
  }
}
