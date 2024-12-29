import type { GuardState } from './guard.types.js'
import { GuardDirection, GuardStatus } from './guard.types.js'

/**
 * @class Guard
 * @description Game object that can move around in a 2D grid array
 */
export class Guard {
  direction: GuardDirection | null = null
  xPos: number = 0
  yPos: number = 0
  status: GuardStatus = GuardStatus.IDLE
  steps: number = 0

  /**
   * Creates an instance of the `Guard` class
   * @constructor
   * @param {GuardState} state - Initial state of the guard
   */
  constructor (state: GuardState) {
    this.direction = state.direction
    this.xPos = state.xPos || 0
    this.yPos = state.yPos || 0
    this.status = state.status
  }

  /**
   * Turn the guard's direction clockwise by 90 degrees.
   * If the direction is `null`, does nothing.
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
   * Moves the guard by one (1) coordinate [x,y] position in the `Grid`
   * @param xDirection {number} x coordinate
   * @param yDirection {number} y coordinate
   * @returns {void}
   */
  walk (xDirection: number, yDirection: number): void {
    if (xDirection === undefined || yDirection === undefined) return

    this.xPos += xDirection
    this.yPos += yDirection
    this.steps += 1
  }

  /**
   * Set's the guard's status to "exited"
   */
  exit (): void {
    this.status = GuardStatus.EXIT
  }
}
