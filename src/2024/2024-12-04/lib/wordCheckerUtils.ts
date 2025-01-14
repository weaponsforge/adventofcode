import type {
  Coordinate,
  Point,
  CoordinateData
} from '@/aoc/point/types.js'

/**
 * Finds the `WORD` input parameter in the vertical directions (up/down) from an (x,y) coordinate
 * @typedef coord {Coordinate} Coordinate object
 * @param coord.x {number} x coordinate (array x index)
 * @param coord.y {number} y coordinate (array y index)
 * @param coord.direction {number} Up or down letter-checking direction
 *   - `-1` for "up" going to (0,0)
 *   - `1` for "down" going to (N,N) from the `coord`
 * @param fullData {string[][]} 2D array of strings consisting of letters per item
 * @param WORD {string} Word to find
 * @returns {boolean} Flag indicating the existence of the `WORD`
 */
export const checkVertical = (coord: Coordinate, fullData: string[][], WORD: string): boolean => {
  let yIndex = coord.y
  let subWord = ''

  if (!Array.isArray(fullData)) return false

  for (let i = 0; i < WORD.length; i += 1) {
    if (yIndex < 0) break
    if (yIndex >= fullData.length) break

    subWord += (fullData[yIndex])?.[coord.x]
    yIndex += (coord.direction * 1)
  }

  return subWord === WORD
}

/**
 * Finds the `WORD` input parameter in the horizontal directions (left/right) from an (x,y) coordinate
 * @typedef coord {Coordinate} Coordinate object
 * @param coord.x {number} x coordinate (array x index)
 * @param coord.y {number} y coordinate (array y index)
 * @param coord.direction {number} `-1` for "left" going to (0,0) or `1` for "right" going to (N,N) from the `coord`
 * @param rowData {string[]} Array of row-wise letters from a 2D array
 * @returns {boolean} Flag indicating the existence of the `WORD`
 * @param WORD {string} Word to find
 */
export const checkHorizontal = (coord: Coordinate, rowData: string[], WORD: string): boolean => {
  let xIndex = coord.x
  let subWord = ''

  if (!Array.isArray(rowData)) return false

  for (let i = 0; i < WORD.length; i += 1) {
    if (xIndex < 0) break
    if (xIndex >= rowData.length) break

    subWord += rowData[xIndex]
    xIndex += (coord.direction * 1)
  }

  return subWord === WORD
}

/**
 * Finds the `WORD` input parameter in the horizontal directions from an (x,y) coordinate
 * @typedef coord {Coordinate} Coordinate object
 * @param coord.x {number} x coordinate (array x index)
 * @param coord.y {number} y coordinate (array y index)
 * @typedef param {CoordinateData} Direction and data object
 * @param param.xDirection {number} `-1` for "left" going to (0,0) or `1` for "right" going to (N,N) from the `coord`
 * @param param.yDirection {number} `-1` for "up" going to (0,0) or `1` for "down" going to (N,N) from the `coord`
 * @param param.data {string[][]} 2D string array containing the input text
 * @returns {boolean} Flag indicating the existence of the `WORD`
 * @param WORD {string} Word to find
 */
export const checkDiagonal = (coord: Point, param: CoordinateData, WORD: string): boolean => {
  let xIndex = coord.x
  let yIndex = coord.y
  let subWord = ''

  if (!Array.isArray(param.data)) return false
  if (param.data[0] === undefined) return false

  for (let i = 0; i < WORD.length; i += 1) {
    if (xIndex < 0 || xIndex >= param.data[0].length) break
    if (yIndex < 0 || yIndex >= param.data.length)  break

    subWord += (param.data[yIndex])?.[xIndex]

    xIndex += (param.xDirection * 1)
    yIndex += (param.yDirection * 1)
  }

  return subWord === WORD
}
