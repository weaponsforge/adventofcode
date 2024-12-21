/**
 * Finds the possible combinations in which to place operator symbols for an `N`-length array
 * @param {string[]} operators String array containing operator symbols
 * @param {number} N Length of a linear array
 * @returns {string[][]} List (2D-string array) of possible operators placement combinations
 */
export const operatorCombinations = (
  operators: string[] = ['+', '*'],
  N: number
): string[][] => {
  const combinations: string[][] = []
  const totalCombinations = Math.pow(operators.length, N)

  for (let i = 0; i < totalCombinations; i += 1) {
    const list: string[] = []
    let seed = i

    for (let j = 0; j < N; j += 1) {
      list.push(operators[seed % operators.length] as string)
      seed = Math.floor(seed / operators.length)
    }

    combinations.push(list)
  }

  return combinations
}

/**
 * Returns the result of an AoC text equation and a set of operator symbols with the condition:
 *  - Left to write equation processing, disregarding operator precedence
 * @param {string} eqnString Math equation expressed as string
 * @returns {number} Result of the `eqnString`
 */
export const doEquation = (numbers: number[], operators: string[]): number => {
  let sum = numbers[0] as number

  operators.forEach((operator, index) => {
    if (operator === '+') {
      sum += numbers[index + 1] as number
    }

    if (operator === '*') {
      sum *= numbers[index + 1] as number
    }
  })

  return sum
}

/**
 * Counts the total calibration sum of input lines whose elements (numbers) match the line's target sum
 * after processing with one of N possible combinations of `+` and `*` operator placements
 * @param input Input string array
 * @returns {number} Total calibration sum
 */
export const totalCalibrationResult = (input: string[]): number => {
  const operators = ['+', '*']
  let sum = 0

  for (let i = 0; i < input.length; i += 1) {
    const line = input[i]

    if (line === undefined) break

    const [targetSum, data] = line.split(': ')
    const numbers = data?.split(' ').map(Number) as number[]

    // Find all operator placement combinations
    const combinations = operatorCombinations(operators, numbers.length - 1)

    // Build the text equation
    for (let j = 0; j < combinations.length; j += 1) {
      // Process equation
      const result = doEquation(numbers, combinations[j] as string[])

      if (result === Number(targetSum)) {
        sum += result
        break
      }
    }
  }

  return sum
}
