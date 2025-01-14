import { GuardDirection } from '@/2024/2024-12-06/lib/guard.types.js'
import { getGridCoordinate } from '@/aoc/grid/utils.js'
import type { Point } from '@/aoc/point/types.js'

/**
 * @class Robot
 * @description A set of methods, objects and variables for managing a `Robot`
 */
export class Robot {
  /** Symbol representation in the grid */
  symbol: string = '@'

  /** Current (y,x) grid coordinate */
  pos: Point = { x: -1, y: -1 }

  /** Direction indicator up/down/left/right */
  direction: Point = { x: 0, y: 0 }

  /** Current active move instruction symbol */
  instruction: GuardDirection | '-' = '-'

  /** Moves instructions set */
  instructions: string[]

  /**
   * @constructor
   * @param {string[][]} grid - 2D string array grid
   */
  constructor (grid: string[][], instructions: string[]) {
    this.findInitialPosition(grid)
    this.instructions = [...instructions]
  }

  /**
   * Finds the robot's initial `Point` position in the 2D grid, storing them in the `this.pos` object
   * @param {string[][]} grid - 2D string array grid
   */
  findInitialPosition (grid: string[][]): void {
    const start = getGridCoordinate(grid, this.symbol)

    this.pos.x = start.x
    this.pos.y = start.y
  }

  /** Reads the next instruction and sets the (y,x) direction */
  readInstruction (): void {
    this.instruction = this.instructions.pop() as GuardDirection || '-'

    switch(this.instruction) {
    case GuardDirection.UP:
      this.direction = { x: 0, y: -1 }
      break
    case GuardDirection.DOWN:
      this.direction = { x: 0, y: 1 }
      break
    case GuardDirection.LEFT:
      this.direction = { x: -1, y: 0 }
      break
    case GuardDirection.RIGHT:
      this.direction = { x: 1, y: 0 }
      break
    default:
      break
    }
  }

  /** Increments the robot's (y,x) coordinate by direction */
  walk (): void {
    this.pos.x += this.direction.x
    this.pos.y += this.direction.y
  }

  /**
   * Finds the next (y,x) coordinate of the robot or a given `Point` parameter using the robot's current direction.
   * @param {Point} [point] - (Optional) (y,x) coordinate to find the next step coorndinate from
   * @returns {Point} Next (y,x) coordinate after 1 step
   */
  next (point?: Point): Point {
    const x = point?.x || this.pos.x
    const y = point?.y || this.pos.y

    const nextX = x + this.direction.x
    const nextY = y + this.direction.y

    return {
      x: nextX, y: nextY
    }
  }

  /**
   * Finds the robot's previous (y,x) coordinate or a given `Point` parameter using the robot's current direction.
   * @param {Point} [point] - (Optional) (y,x) coordinate to find the previous step coorndinate from
   * @returns {Point} Next (y,x) coordinate before the provided coordinate
   */
  prev (point?: Point): Point {
    const x = point?.x || this.pos.x
    const y = point?.y || this.pos.y

    const nextX = x - this.direction.x
    const nextY = y - this.direction.y

    return {
      x: nextX, y: nextY
    }
  }
}
