import type { Point } from '@/aoc/point/types.js'

/**
 * Counts the determinant of a 2x2 coefficient matrix. Currently only works with a 2x2 number matrix.
 * TO-DO: Support N-size matrices.
 * @param {number[][]} matrix - 2D number matrix input
 * @returns {number} Determinant of a 2x2 matrix
 */
export const getDeterminant = (matrix: number[][]): number => {
  const eq1 = matrix[0] as number[]
  const eq2 = matrix[1] as number[]

  return ((eq1[0] as number) * (eq2[1] as number)) -
    ((eq1[1] as number) * (eq2[0] as number))
}

/**
 * Builds a coefficient matrix by replacing column values with the constants.
 * Currently only works with a 2x2 number matrix. TO-DO: Support N-size matrices.
 * @param {number[][]} matrix - 2D number matrix input
 * @param {number} column - Matrix column index to replace with constants. Index starts at `0`.
 * @returns {number[][]} Coefficient matrix
 */
export const coefficientMatrix = (
  matrix: number[][],
  column: number = 0
): number[][] => {
  const maxCol = 2

  return matrix.reduce((list: number[][], row, y) => {
    const items = row.reduce((sublist: number[], item, x) => {
      if (x === column) {
        sublist.push(matrix[y]![maxCol] as number)
      } else if (x !== maxCol) {
        sublist.push(item)
      }
      return sublist
    }, [])
    return [...list, items]
  }, [])
}

/**
 * Calculates the number of needed (x,y) button A "and" B presses to reach the prize
 * by solving the 2 equations using Cramer's Rule.
 * https://www.youtube.com/watch?v=RdLo-9jh2EM. Currently only works with a 2x2 number matrix.
 * @param {number[][]} matrix - 2D number matrix input
 * @returns {Point} Object containing the number of `x` and `y` button presses
 */
export const solveEquation = (matrix: number[][]): Point => {
  const determinant = getDeterminant(matrix)

  const xCoefficient = coefficientMatrix(matrix, 0)
  const yCoefficient = coefficientMatrix(matrix, 1)

  const xD = getDeterminant(xCoefficient)
  const yD = getDeterminant(yCoefficient)

  const x = xD / determinant
  const y = yD / determinant

  return { x, y }
}
