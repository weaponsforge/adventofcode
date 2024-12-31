import type { GardenRegionDetails } from './types.js'
import type { GridDimensions } from '@/2024/2024-12-06/lib/grid.types.js'
import type { Point } from '@/2024/2024-12-08/lib/types.js'

import { findNeighbors, isIllegalCoordinate } from './utils.js'

/**
 * @class Garden
 * @description A set of methods and properties for calculating Garden, Region and Plots data
 */
export class Garden {
  /** Temporary storage containing processed coordinates */
  processed: string[] = []

  /** Total fencing price for all regions in the garden */
  totalPrice: number = 0

  /**
   * Calculates the perimeter and area of all garden regions in a 2D grid, each defined
   * by an initial symbol at a starting (y,x) coordinate.
   * Reference: https://en.wikipedia.org/wiki/Flood_fill
   * @param {Point} point - (y,x) coordinate object in a 2D array grid
   * @param {string} symbol - Character to check in the `point` coordinate.
   * @param {string[][]} grid - 2D string array input
   * @returns {GardenRegionDetails} Area and perimeter of a garden region.
   */
  calculatePlot (point: Point, symbol: string, grid: GridDimensions, data: string[][]): GardenRegionDetails {
    let list: Point[] = [point]
    let perimeter = 0
    let area = 0

    while (list.length > 0) {
      const point = list.pop()
      const coordStr = `${point!.x},${point!.y}`

      const isIllegal = isIllegalCoordinate({
        point: point as Point,
        symbol,
        gridMeta: grid,
        grid: data
      })

      // Illegal coordinates count as edges (perimeters)
      if (isIllegal) {
        perimeter += 1
        continue
      }

      if (this.processed.includes(coordStr)) continue
      this.processed.push(coordStr)

      // Flood-fill included points
      area += 1

      const steps = findNeighbors(point as Point) as Point[]
      list = [...list, ...steps]
    }

    return {
      area, perimeter
    }
  }

  /**
   * Calculates the total fencing price of all regions in a garden.
   * @param {string[][]} data - 2D string array input
   * @returns {number} Total fencing price
   */
  calculateFencePrice (data: string[][]): number {
    const gridMeta = {
      width: data[0]!.length,
      length: data.length
    }

    this.processed = []

    for (let y = 0; y < data.length; y += 1) {
      for (let x = 0; x < data[0]!.length; x += 1) {
        const coordKey = `${x},${y}`

        if (!this.processed.includes(coordKey)) {
          const point = { x, y }
          const symbol = data[y]![x]

          const { area, perimeter } = this.calculatePlot(
            point,
            symbol as string,
            gridMeta,
            data
          )

          const price = area * perimeter
          this.totalPrice += price

          console.log(`A region of ${symbol} plants with price ${area} * ${perimeter} = ${price}`)
        }
      }
    }

    return this.totalPrice
  }
}
