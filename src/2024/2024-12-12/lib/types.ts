import type { GridDimensions } from '@/2024/2024-12-06/lib/grid.types.js'
import type { Point } from '@/2024/2024-12-08/lib/types.js'

/**
 * @type {Object} GardenRegionDetails
 * @property {number} area - Area of a garden region - sum of connected plots with similar symbols.
 * @property {number} perimeter - Perimeter of a garden region - sum of outer edges per plot.
 */
export type GardenRegionDetails = {
  area: number;
  perimeter: number;
}

/**
 * @type {Object} GardenRegionDetails
 * @property {number} area - Area of a garden region - sum of connected plots with similar symbols.
 * @property {number} sides - Number of sides (corners) of a region.
 */
export type GardenRegionSides = {
  area: number;
  sides: number;
}

/**
 * @type {Object} IllegalCoordinateParams
 * @property {Point} point - (y,x) coordinate object in a 2D array grid
 * @property {string} symbol - Character to check in the `point` coordinate.
 * @property {GridDimensions} gridMeta - Grid length and width
 * @property {string[][]} grid - 2D string array input
 */
export type IllegalCoordinateParams = {
  point: Point;
  symbol: string;
  gridMeta: GridDimensions;
  grid: string[][];
}

export interface NeighborPoint extends Point {
  symbol: string;
}
