import type { GridDimensions } from '@/aoc/grid/types.js'
import { isOutOfBounds, printGrid } from '@/aoc/grid/utils.js'
import type { Point } from '@/aoc/point/types.js'
import type { Quadrant, RobotProperty } from './types.js'
import { arrayMiddleIndex } from '@/aoc/array/utils.js'

/**
 * @class Board
 * @description Manages the `Grid`-like 2D string array, methods, and properties in which robots run
 */
export class Board {
  /** Length and width settings of the 2D array */
  settings: GridDimensions = {
    length: 0,
    width: 0
  }

  /** Default character value in the 2D array without robots */
  tileSymbol: string = '.'

  /** 2D string array */
  grid: string[][] = []

  /** List (array) of robots coordinate and velocity data */
  robots: RobotProperty[] = []

  quadrants: Quadrant[] = []

  /**
   * @constructor
   * @param {GridDimensions} grid - Object containing the length and width of the board (a 2D `string[][]` array)
   */
  constructor (grid: GridDimensions) {
    this.settings = {
      length: grid.length,
      width: grid.width
    }

    this.create()
    this.quadrants = this.findQuadrants()
  }

  /**
   * Returns the value of the number or character in the `point` coordinate, or
   * `undefined` if the `point` coordinate is out of the grid bounds
   * @param {Point} point - Object containing (y,x) point coordinate
   * @returns {string | undefined} Value of the number or character
   */
  getTileValue (point: Point): string | undefined {
    if (isOutOfBounds(point, this.settings)) return
    return this.grid[point.y]![point.x]
  }

  /**
   * Sets the string value in the 2D `this.grid[][]` array
   * @param {Point} point - Object containing (y,x) point coordinate
   * @param {string} symbol - String character to render on the grid tile (usually a number character)
   * @returns {void | undefined }
   */
  setTileValue (point: Point, symbol: string): void | undefined {
    if (isOutOfBounds(point, this.settings)) return
    this.grid[point.y]![point.x] = symbol
  }

  /**
   * Sets a new robot into the `Board`'s robots list and marks its position in `this.grid[][]` array
   * @param {RobotProperty} robotData - Object containing one (1) robot coordinate and velocity data
   * @returns {void | undefined}
   */
  setRobot (robotData: RobotProperty): void | undefined {
    const { x, y } = robotData
    const tileValue = this.getTileValue(robotData)

    if (!tileValue) return

    const newPositionTileValue = tileValue === this.tileSymbol
      ? '1'
      : `${Number(tileValue) + 1}`

    this.setTileValue({ x, y }, newPositionTileValue)
    this.robots.push(robotData)
  }

  /**
   * Moves a robot from a tile and updates the current and new tile's robot count
   * @param {number} robotIndex - Array index number of a robot in the `this.robots[]` array
   * @param {Point} point - Object containing new (y,x) coordinates for the robot at `robotIndex`
   * @returns {void | undefined}
   */
  moveRobot (robotIndex: number, point: Point): void {
    if (robotIndex < 0 || robotIndex > this.robots.length) return

    const robotData = this.robots[robotIndex] as RobotProperty
    const currentTileValue = this.getTileValue(robotData)
    const newPositionTileValue = this.getTileValue(point)

    if (!currentTileValue || !newPositionTileValue) return

    // Clean old grid value
    const currentTileSymbol = currentTileValue === '1'
      ? this.tileSymbol
      : `${Number(currentTileValue) - 1}`

    // Set new grid value
    const newPositionTileSymbol = newPositionTileValue === this.tileSymbol
      ? '1'
      : `${Number(newPositionTileValue) + 1}`

    this.setTileValue(robotData, currentTileSymbol)
    this.setTileValue(point, newPositionTileSymbol)

    // Set the robot's new (y,x) coordinate
    this.robots[robotIndex]!.x = point.x
    this.robots[robotIndex]!.y = point.y
  }

  /**
   * Creates a blank `this.length` x `this.width` board, clearing
   * the current board contents
   */
  create (): void {
    const { length, width } = this.settings

    this.grid = Array.from({ length },
      () => Array(width).fill(this.tileSymbol)
    )
  }

  /**
   * Finds the four (4) main quadrants of `this.grid`, each containing a set of inclusive `start` and `end` coordinates.
   * @returns {Quadrant[]} An array of `Quadrant` objects containing the start and end coordinates of the board's 4 main quadrants.
   */
  findQuadrants (): Quadrant[] {
    const xMid = arrayMiddleIndex(this.grid[0] as string[]) - 1
    const yMid = arrayMiddleIndex(this.grid) - 1

    const q1: Quadrant = {
      id: 1,
      start: { x: 0, y: 0 },
      end: { x: xMid - 1, y: yMid - 1 }
    }

    const q2: Quadrant = {
      id: 2,
      start: { x: xMid + 1, y: 0 },
      end: { x: this.settings.width - 1, y: yMid - 1 }
    }

    const q3: Quadrant = {
      id: 3,
      start: { x: 0, y: yMid + 1 },
      end: { x: xMid - 1, y: this.settings.length - 1 }
    }

    const q4: Quadrant = {
      id: 4,
      start: { x: xMid + 1, y: yMid + 1 },
      end: { x: this.settings.width - 1, y: this.settings.length - 1 }
    }

    return [q1, q2, q3, q4]
  }

  /**
   * Finds the quadrant `ID` of a `Point` within the `this.grid` 2D array.
   * @param {Point} point - Object containing the (y,x) coordinates of a robot
   * @returns {number} `Quadrant.id` ID number of a `Point`
   */
  getQuadrant (point: Point): number {
    const { x, y } = point

    const middleX = this.quadrants[0]!.end.x + 1
    const middleY = this.quadrants[0]!.end.y + 1

    let quadrantID = -1 // gutter

    if (x < middleX && y < middleY) quadrantID = 1
    if (x > middleX && y < middleY) quadrantID = 2
    if (x < middleX && y > middleY) quadrantID = 3
    if (x > middleX && y > middleY) quadrantID = 4

    return quadrantID
  }

  /**
   * Draws categorized symbols per quadrant on a temporary 2D array for visualization.
   */
  viewQuadrants (): void {
    const symbols = ['*', '#', '@', '%']

    const { start, end } = this.quadrants[0] as Quadrant
    const length = end.y - start.y
    const width = end.x - start.x

    const grid = Array.from({ length: this.settings.length },
      () => Array(this.settings.width).fill(this.tileSymbol)
    )

    this.quadrants.forEach((quadrant: Quadrant, index: number) => {
      let { x, y } = quadrant.start

      for (let row = 0; row <= length; row += 1) {
        x = quadrant.start.x

        for (let col = 0; col <= width; col += 1) {
          grid[y]![x] = symbols[index] as string
          x += 1
        }

        y += 1
      }
    })

    printGrid(grid)
  }
}
