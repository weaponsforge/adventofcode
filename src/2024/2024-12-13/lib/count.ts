import type { MatrixData, StepsTokens } from './types.js'
import { solveEquation } from './utils.js'

/**
 * Counts the number of tokens needed to win all possible prizes.
 * @param {MatrixData<number[]>} data - Processed quiz data object containing 2D number matrices
 * @param {boolean} log - Flag to print the log messages to screen
 * @returns {StepsTokens} Object containing the number of tokens and prizes
 */
export const countTokensPrizes = (
  data: MatrixData<number[]>,
  log: boolean = false
): StepsTokens => {
  let countPrizes = 0
  let countTokens = 0

  for (const key in data) {
    // Calculate (2) system of equations
    const { x, y } = solveEquation(data[key] as number[][])
    if (!Number.isInteger(x) || !Number.isInteger(y)) continue

    const tokensA = x * 3
    const tokensB = y * 1

    countPrizes += 1
    countTokens += tokensA + tokensB

    if (log) {
      console.log(`Machine [${key}], Button A: ${x}, Button B: ${y}, TOTAL`, (tokensA + tokensB))
    }
  }

  return {
    prizes: countPrizes,
    tokens: countTokens
  }
}
