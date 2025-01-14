import type { Point, PointSymbol } from '@/aoc/point/types.js'
import { getCoordinateSymbol } from '@/aoc/grid/utils.js'

/**
 * Checks if the `symbol` parameter is an expanded box symbol `"["` or `"]"`
 * @param {string} symbol - String character representing an expanded box symbol
 * @returns {boolean} Flag indicating if the `symbol` character is a box symbol
 */
export const isExpandedBoxSymbol = (symbol: string) => ['[', ']'].includes(symbol as string)

/**
 * Retrieves the 2 half-box (y,x) coordinates of a full expanded box - left and right `PointSymbol`
 * @param {Point} point - (x,y) coordinate of one side of the box
 */
export const getBoxStartCoordinates = (point: Point, grid: string[][]):
{ side1: PointSymbol, side2: PointSymbol } => {

  const rightCoord = { ...point, x: point.x + 1 }
  const leftCoord = { ...point, x: point.x - 1 }
  let side2: PointSymbol = { x: -1, y: -1, symbol: '-' }

  const symbol = getCoordinateSymbol(point, grid)?.symbol as string
  const right = getCoordinateSymbol(rightCoord, grid)?.symbol as string
  const left = getCoordinateSymbol(leftCoord, grid)?.symbol as string

  if (`${symbol}${right}` === '[]') {
    side2 = { ...side2, ...rightCoord, symbol: right }
  }

  if (`${left}${symbol}` === '[]') {
    side2 = { ...side2, ...leftCoord, symbol: left }
  }

  const side1 = { ...point, symbol }

  return {
    side1,
    side2
  }
}

/**
 * Retrieves the reverse matching symbol of an expanded box symbol
 * @param {string} symbol -  String character representing an expanded box symbol
 * @returns {string | undefined} Reverse matching symbol of an expanded box symbol or `undefined`
 */
export const getReverseSymbol = (symbol: string): string | undefined => {
  if (!['[', ']'].includes(symbol)) return
  return symbol === '[' ? ']' : '['
}

/**
 * Retrieves the `x` direction associated with an expanded box symbol
 * @param symbol - String character representing an expanded box symbol
 * @returns {number | undefined}
 */
export const getSymbolDirection = (symbol: string): number | undefined => {
  if (!['[', ']'].includes(symbol)) return

  let xDirection = 0

  if (symbol === '[') xDirection = 1
  if (symbol === ']') xDirection = -1

  return xDirection
}
