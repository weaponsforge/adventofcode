import type {
  IllegalCoordinateParams,
  GridCoordinateSymbol,
  GridDimensions
} from './types.js'

import type { Point, PointSymbol } from '../point/types.js'

import { findNeighbors } from '../point/utils.js'

/**
 * Converts a 2D `Point` point object to a string and returns its value from the 2D array
 * @param {Point} point - (y,x) coordinatate in the 2D array
 * @param {number[][]} data - 2D number array containing hiking trail data
 * @returns {GridCoordinateSymbol} Returns the `GridCoordinateSymbol` (x,y) coordinate expressed in string and its value
 */
export const getCoordinateSymbol = (point: Point, data: number[][] | string[][]): GridCoordinateSymbol => {
  return {
    coordinate: `${point!.x},${point!.y}`,
    symbol: data[point!.y]![point!.x] as number
  }
}

/**
 * Retrieves the length and width of a generic 2D array
 * @param {T[][] | T[][]} data - 2D array, usually `string[][]`, `number[][]` or others.
 * @returns {GridDimensions} Object containig the length and width of the 2D array
 */
export const getGridDimensions = <T>(data: T[][]): GridDimensions => {
  return {
    length: data.length,
    width: data[0]!.length
  }
}

/**
 * Checks if a point at coordinate (y,x) in a grid is illegal: if it's out of bounds of the grid area
 * or if its symbol differs from the symbol parameter.
 * @param params {IllegalCoordinateParams} - Object input parameters.
 *  See the `IllegalCoordinateParams` for more information.
 * @returns {boolean} Flag if a coordinate is illegae
 */
export const isIllegalCoordinate = (params: IllegalCoordinateParams): boolean => {
  const { point, symbol, gridMeta } = params

  return (
    point.x < 0 ||
    point.x >= gridMeta.width ||
    point.y < 0 ||
    point.y >= gridMeta.length ||
    params.grid[point.y]![point.x] !== symbol
  )
}

/**
 * Checks if a (y,x) coordinate is out of the grid area
 * @param {Point} point - (y,x) coordinate
 * @param {GridDimensions} gridMeta - Length and width definitions of a 2D array (grid)
 * @returns {boolean} Flag if a coordinate is out of the grid area
 */
export const isOutOfBounds = (point: Point, gridMeta: GridDimensions): boolean => {
  return (
    point.x < 0 || point.x >= gridMeta.width ||
    point.y < 0 || point.y >= gridMeta.length
  )
}

/**
 * Retrieves the four (4) diagonally aligned (y,x) coordinates and the symbol character from a `Point` in the grid.
 * Substitutes a `"*"` symbol character in the `PointSymbol.symbol`if the `point` is out of the grid bounds.
 * @param {Point} point - (y,x) coordinate object in a 2D array grid
 * @param {string[][]} data - 2D string array input
 * @returns {PointSymbol[]} Array of `PointSymbol` with symbol characters.
 */
export const getDiagonalNeighbors = (point: Point, data: string[][]): PointSymbol[]  => {
  const grid = getGridDimensions(data)

  // diagonal coordinates
  const diagonals = [
    { x: point.x + 1, y: point.y - 1 },
    { x: point.x - 1, y: point.y - 1 },
    { x: point.x + 1, y: point.y + 1 },
    { x: point.x - 1, y: point.y + 1 }
  ]

  return diagonals.reduce((list: PointSymbol[], pt) => {
    const item = { x: pt.x, y: pt.y, symbol: '*' }

    if (!isOutOfBounds(pt, grid)) {
      item.symbol = data[pt.y]![pt.x] as string
    }

    return [...list, item]
  }, [])
}

/**
 * Retrieves the four (4) horizontal/vertical aligned (y,x) coordinates and the symbol character from a `Point` in the grid.
 * Substitutes a `"*"` symbol character in the `PointSymbol.symbol`if the `point` is out of the grid bounds.
 * @param {Point} point - (y,x) coordinate object in a 2D array grid
 * @param {string[][]} data - 2D string array input
 * @returns {PointSymbol[]} Array of `PointSymbol` with symbol characters.
 */
export const getCrossNeighbors = (point: Point, data: string[][]): PointSymbol[] => {
  const neighbors = findNeighbors(point) as Point[]
  const grid = getGridDimensions(data)

  return neighbors.reduce((list: PointSymbol[], pt) => {
    const item = { x: pt.x, y: pt.y, symbol: '*' }

    if (!isOutOfBounds(pt, grid)) {
      item.symbol = data[pt.y]![pt.x] as string
    }

    return [...list, item]
  }, [])
}
