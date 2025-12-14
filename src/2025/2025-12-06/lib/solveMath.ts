import type { MathInputType } from './fileReader.js'

/**
 * Calculates the grand total of all vertical colums' result values.
 * @param {MathInputType} input - A `MathInputType` object `{ numbers[][], operations[] }` containing input data.
 * @returns {number}
 */
export const additionMultiplication = (input: MathInputType) => {
  let grandTotal = 0
  const { numbers, operations } = input

  const rowLength = numbers.length
  const colLength = operations.length

  for (let i = 0; i < colLength; i += 1) {
    let resultValue = numbers[0]![i] ?? 1
    let rowStart = 1
    const operation = operations[i]

    while (rowStart < rowLength) {
      const nextValue = numbers[rowStart]![i]

      if (operation === '*') {
        resultValue *= nextValue ?? 1
      }

      if (operation === '+') {
        resultValue += nextValue ?? 0
      }

      rowStart += 1
    }

    grandTotal += resultValue
  }

  return grandTotal
}
