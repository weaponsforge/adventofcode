import type { Point } from '@/2024/2024-12-08/lib/types.js'

import { isOutOfBounds } from '@/2024/2024-12-10/lib/utils.js'
import { getGridDimensions } from '@/aoc/grid/utils.js'
import { getCrossNeighbors, innerCorners, isDiagonal } from './utils.js'
import type { GardenRegionSides } from './types.js'

/**
 * @class WholesaleGarden
 * @description A set of methods and properties for calculating the wholesale fencing price of garden regions
 */
export class WholesaleGarden {
  visited: string[] = []

  /**
   * Calculates the number of corners (sides) of a whole region.
   * @param {Point} point - (y,x) coordinate object in a 2D array grid
   * @param {string} symbol - Character to check in the `point` coordinate.
   * @param {string[][]} data - 2D string array input
   * @returns {GardenRegionDetails} Object containing the area and whole region perimeter
   */
  calculateRegionCorners (point: Point, symbol: string, data: string[][]): GardenRegionSides {
    const stack: Point[] = [point]
    const grid = getGridDimensions(data)

    let corners = 0
    let area = 0

    while (stack.length > 0) {
      const pt = stack.pop() as Point
      const coordKey = `${pt.x},${pt.y}`

      if (this.visited.includes(coordKey)) continue

      // Vertical/horizontal coordinates data
      const neighbors = getCrossNeighbors(pt, data)
      const invalidPoints = neighbors.filter(item => item.symbol !== symbol)

      const next = neighbors.filter(item =>
        !isOutOfBounds(item, grid) &&
        item.symbol === symbol
      )

      // Coordinates containing other symbols count as corners 2x
      if (invalidPoints.length >= 3) {
        corners += 2 * Math.floor(invalidPoints.length / 2)
      }

      // Diagonally-aligned other symbols (if only 2) count as a corner
      if (invalidPoints.length === 2) {
        if (isDiagonal(invalidPoints[0] as Point, invalidPoints[1] as Point)) {
          corners += 1
        }
      }

      // Count the inner corner(s) in L-shaped Points
      corners += innerCorners(pt, symbol, data)
      area += 1

      this.visited.push(coordKey)
      next.forEach(item => stack.push(item))
    }

    return {
      sides: corners,
      area
    }
  }

  /**
   * Calculates the total fencing price of all regions in a garden using the formula: area * perimeter (of whole region).
   * @param {string[][]} data - 2D string array input
   * @param {boolean} log - Flag to display the log messages. Defaults to `false`
   * @returns {number} Total fencing price
   */
  calculateFencePrice (data: string[][], log: boolean = false): number {
    let total = 0
    const grid = getGridDimensions(data)

    this.visited = []

    for (let y = 0; y < grid.length; y += 1) {
      for (let x = 0; x < grid.width; x += 1) {
        const point = { x, y }
        const pointStr = `${x},${y}`
        const symbol = data[y]![x] as string

        if (this.visited.includes(pointStr)) continue

        const { sides, area } = this.calculateRegionCorners(point, symbol, data)
        const price = sides * area
        total += price

        if (log) {
          console.log(`Region ${symbol}: sides ${sides} * ${area} = ${price}`)
        }
      }
    }

    return total
  }
}
