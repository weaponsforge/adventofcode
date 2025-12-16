import type { MathInputType } from './fileReader.js'

/**
 * Calculates the grand total of all vertical colums' result values.
 * @param {MathInputType} input - A `MathInputType` object `{ numbers[][], operations[] }` containing input data.
 * @returns {number}
 */
export const additionMultiplication = (input: MathInputType) => {
  let grandTotal = 0
  const { numbers, operations } = input

  const inputRowLength = numbers.length
  const colLength = operations.length

  for (let i = 0; i < colLength; i += 1) {
    let resultValue = numbers[0]![i] ?? 0
    let rowStart = 1
    const operation = operations[i]

    while (rowStart < inputRowLength) {
      const digitCol = numbers[rowStart]![i]

      if (operation === '*') {
        resultValue *= digitCol ?? 1
      }

      if (operation === '+') {
        resultValue += digitCol ?? 0
      }

      rowStart += 1
    }

    grandTotal += resultValue
  }

  return grandTotal
}

/**
 * Calculates the grand total of vertical colums' result values using cephalopod math,
 * reading vertically-aligned digits and spaces (0's) assigned to a block (problem) operator
 * from right to left and top to bottom along the columns.
 * @param {MathInputType} input - A `MathInputType` object `{ numbers[][], operations[] }` containing input data.
 * @returns {number}
 */
export const cephalopodMath = (input: MathInputType) => {
  const { numbers, operations } = input

  const inputRowLength = numbers.length
  const colLength = numbers[0]?.length ?? 0
  const colResults: Record<string, number> = {}
  let grandTotal = 0

  // Current operation
  let operation = operations.pop()

  // Read digits from the right side
  for (let col = colLength - 1; col >= 0; col -= 1) {
    let rowStart = 0
    let verticalDigits = ''

    // Read the digits vertically of the current column
    while (rowStart < inputRowLength) {
      const row = numbers[rowStart] ?? []
      const digitCol = row[col] ?? -2

      if (digitCol > 0) {
        verticalDigits += digitCol?.toString()
      }

      rowStart += 1
    }

    // Process and store the final vertical digits
    if (verticalDigits !== '') {
      const columnIndex = operations.length

      if (colResults[columnIndex] === undefined) {
        const initialValue = operation === '*' ? 1 : 0
        colResults[columnIndex] = initialValue
      }

      if (operation === '+') {
        colResults[columnIndex] += Number(verticalDigits)
      }

      if (operation === '*') {
        colResults[columnIndex] *= Number(verticalDigits)
      }
    }

    // Moved to the next left column and its a space (-1)?
    if (numbers[0]?.[col] === -1) {
      operation = operations.pop()
    }
  }

  grandTotal = Object
    .values(colResults)
    .reduce((list, value) => list + value, 0)

  return grandTotal
}
