import type {
  IllegalCoordinateParams,
  GridCoordinateSymbol,
  GridDimensions
} from './types.js'

import type { Point, PointSymbol } from '../point/types.js'

import { findNeighbors } from '../point/utils.js'

/**
 * Converts a 2D `Point` point object to a string and returns its value from the 2D `string` or `number` array
 * @template T Extends `string` or `number`, representing the type of elements in the 2D `data` array.
 * @param {Point} point - (y,x) coordinatate in the 2D array
 * @param {T[][]} data - 2D array containing `number` or `string` elements
 * @returns {GridCoordinateSymbol<T> | undefined} Returns the `GridCoordinateSymbol` (x,y) coordinate expressed in string and its value
 *  or `undefined` if the `point` coordinate is out of the grid bounds
 */
export const getCoordinateSymbol =
  <T extends string | number>(point: Point, data: T[][]): GridCoordinateSymbol<T> | undefined => {
    const gridMeta = { length: data.length, width: data[0]!.length }
    if (isOutOfBounds(point, gridMeta)) return

    return {
      coordinate: `${point!.x},${point!.y}`,
      symbol: data[point!.y]![point!.x] as T
    }
  }

/**
 * Retrieves the first `Point` (y,x) coordinate of a `symbol` that appears in a 2D array.
 * @param {T[][]} grid - 2D `string` or `number` array
 * @param {string} symbol - Character or number to look for in the `grid`
 * @returns {Point} Object containing the (y,x) coordinate of the `symbol`
 */
export const getGridCoordinate = <T extends string | number>(grid: T[][], symbol: T): Point => {
  const point: Point = { x: -1, y: -1 }

  for (let y = 0; y < grid.length; y += 1) {
    for (let x = 0; x < grid[0]!.length; x += 1) {
      if (grid[y]![x] === symbol) {
        point.x = x
        point.y = y
        break
      }

      if (point.x !== -1) break
    }
  }

  return point
}

/**
 * Retrieves the length and width of a generic 2D array
 * @template T Type of elements in the 2D `data` array.
 * @param {T[][]} data - 2D array, usually `string[][]`, `number[][]` or others.
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
 * @returns {boolean} Flag indicating if a coordinate is out of the grid area
 */
export const isOutOfBounds = (point: Point, gridMeta: GridDimensions): boolean => {
  return (
    point.x < 0 || point.x >= gridMeta.width ||
    point.y < 0 || point.y >= gridMeta.length
  )
}

/**
 * Retrieves the four (4) diagonally aligned (y,x) coordinates and the symbol character from a `Point` in the grid.
 * Substitutes a `"*"` symbol character in the `PointSymbol.symbol` to coordinates out of the grid bounds.
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
 * Substitutes a `"*"` symbol character in the `PointSymbol.symbol` to coordinates out of the grid bounds.
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

/**
 * Prints the contents of a 2D `string` or `number` array to screen.
 * @param {string[][] | number[][]} grid - 2D string or number array to print on screen.
 * @param {string} delimeter - String character to put between the array elements. Default value is a space `" "`.
 * @returns {void}
 */
export const printGrid = (grid: string[][] | number[][], delimeter: string = ' '): void => {
  if (!grid) return
  console.log(grid.map(row => row.join(delimeter)))
}

/**
 * Creates an empty grid mirroring the `GridDimensions` (row length, column length) of a 2D array input.
 * @template T Extends `string` or `number`, representing the type of elements in the 2D `grid` array.
 * @param {T[][]} grid - A `string[][]`, `number[][]` 2D array.
 * @param {string | number} defaultSymbol - Default symbol to fill the empty grid.
 * @returns
 */
export const createGrid = <T extends string | number>(
  grid: T[][],
  defaultSymbol: string | number
): string[][] | number[][] => {
  const rows = grid.length
  const columns = (grid[0] ?? []).length


  return Array(rows)
    .fill(null)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .map((_) => Array(columns).fill(defaultSymbol))
}
