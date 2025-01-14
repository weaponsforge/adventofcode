import type { MatrixData, StepsTokens } from './types.js'
import { solveEquation } from './utils.js'

/**
 * Counts the number of tokens needed to win all possible prizes with adjusted +10000000000000 coordinates.
 * @param {CountTokensParams} param - Object input parameters of the `countTokensPrizes()` function.
 *  See the `CountTokensParams` type for more information.
 * @returns {StepsTokens} Object containing the number of tokens and prizes
 */
export const countTokensOnAdjustedPrizes = (
  data: MatrixData<number[]>,
  log: boolean = false
): StepsTokens => {
  let countPrizes = 0
  let countTokens = 0

  for (const key in data) {
    if (data[key] !== undefined) {
      const [eq1, eq2] = data[key]

      // Add 10000000000000 to the prize (x,y) coordinate
      if (eq1?.[2] !== undefined && eq2?.[2] !== undefined) {
        eq1[2] = 10000000000000 + eq1[2]
        eq2[2] = 10000000000000 + eq2[2]
      }
    }

    // Calculate (2) system of equations
    const { x, y } = solveEquation(data[key] as number[][])

    // Skip decimals
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
