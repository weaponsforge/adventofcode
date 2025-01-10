import type { Point } from '../point/types.js'

/**
 * Represents a "(y,x)" coordinate in string and its value from a 2D array.
 * @template T Extends `string` or `number`, representing the type of the symbol value.
 * @property {string} coordinate - String version of a "(y,x)" coordinate
 * @property {T} symbol - Number or character in a 2D array denoted by the (y,x) coordinate
 */
export type GridCoordinateSymbol<T extends string | number> = {
  coordinate: string;
  symbol: T
}

/**
 * `Grid` dimensions properties
 *
 * @property {number} length - Length of the grid
 * @property {number} wwidth - Width of the grid
 */
export type GridDimensions = {
  length: number;
  width: number;
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
