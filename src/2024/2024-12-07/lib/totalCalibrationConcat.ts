import { operatorCombinations } from './totalCalibration.js'

/**
 * Returns the result of an AoC text equation and a set of operator symbols with the condition:
 *  - Concatenate two (2) numbers with the `||` symbol in between
 *  - Left to write equation processing, disregarding operator precedence
 * @param {string} eqnString Math equation expressed as string
 * @returns {number} Result of the `eqnString`
 */
const doEquationWithConcat = (numbers: number[], operators: string[]): number => {
  let sum = numbers[0] as number

  operators.forEach((operator, index) => {
    if (operator === '+') {
      sum += numbers[index + 1] as number
    }

    if (operator === '*') {
      sum *= numbers[index + 1] as number
    }

    if (operator === '||') {
      const concatNum = `${sum}${numbers[index + 1]}`
      sum = Number(concatNum)
    }
  })

  return sum
}

/**
 * Counts the total calibration sum of input lines whose single or concatenated "joined" elements (numbers)
 * match the line's target sum after processing with one of N possible combinations
 * of `+`, `*` and `||` (concatenator) operator placements
 * @param input Input string array
 * @returns {number} Total calibration sum
 */
export const totalCalibrationConcat = (input: string[]): number => {
  let sum = 0

  for (let i = 0; i < input.length; i += 1) {
    const line = input[i]

    if (line === undefined) break

    const [targetSum, data] = line.split(': ')
    const numbers = data?.split(' ').map(Number) as number[]

    // Find all operator placement combinations
    const combinations = operatorCombinations(
      ['+', '*', '||'],
      numbers.length - 1
    )

    // Process the text equations
    for (let j = 0; j < combinations.length; j += 1) {
      const result = doEquationWithConcat(
        numbers,
        combinations[j] as string[]
      )

      if (result === Number(targetSum)) {
        sum += result
        break
      }
    }
  }

  return sum
}
