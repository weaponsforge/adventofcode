import { AOCOutputType, readAOCInputFile } from '@/aoc/file/aocfile.js'

type Operations = '+' | '*'

export interface MathInputType {
  numbers: number[][];
  operations: Operations[];
}

/**
 * Returns a `MathInputType` object containing a compact list of input numbers `{ numbers[][] }` arranged in grid and their vertical operations in `{ operations[] }`.
 * @param {string} inputFilePath - Complete system file path to the input file.
 * @returns {MathInputType} A `MathInputType` object.
 */
export const fileReader = (inputFilePath: string): MathInputType => {
  const input = readAOCInputFile({
    filePath: inputFilePath,
    type: AOCOutputType.STRING_ARRAY_2D,
    delimiter: ' '
  }) as string[][]

  let operations: Operations[] = []
  const numbers: number[][] = []

  for (let i = 0; i < input.length; i += 1) {
    const row = (input[i] ?? [])
      .filter((item: string) => !['', ' ', '\n', '\r'].includes(item))

    if (i === input.length - 1) {
      // Process operations
      operations = <Operations[]>row
    } else {
      // Process numbers data
      numbers.push(
        row.map((item: string | Operations) => Number(item))
      )
    }
  }

  return {
    numbers,
    operations
  }
}

/**
 * Returns a `MathInputType` object containing an expanded list of input numbers `{ numbers[][] }` arranged in grid and their vertical operations in `{ operations[] }`. The `numbers[][]` data contains `"0"` for digit spaces and `"-1"` for vertical column separators.
 * @param {string} inputFilePath - Complete system file path to the input file.
 * @returns {MathInputType} A `MathInputType` object.
 */
export const fileReaderRTL = (inputFilePath: string): MathInputType => {
  const spaces: Record<string, number> = {}
  const compactList: number[][] = []
  let spaceColumns: number[] = []

  const input = (readAOCInputFile({
    filePath: inputFilePath,
    type: AOCOutputType.STRING_ARRAY_2D,
    delimiter: ''
  }) as string[][])
    .map(row =>
      row.filter(item => item !== '\n' && item !== '\r')
    )

  const spaceColumnLength = input.length

  // Find the indices of columns with spaces corresponding to the problem block separator (column with all spaces).
  // The key (column index) with the largest value is index of the space separator.
  for (let i = 0; i < input.length; i += 1) {
    const row = input[i] ?? []

    for (let j = 0; j < row.length - 1; j += 1) {
      if (row[j] !== ' ') continue

      const current = spaces[j] ?? 0
      spaces[j] = current + 1
    }
  }

  // Retrieve the keys (column indices) of only space columns
  spaceColumns = Object
    .keys(spaces)
    .filter(key => spaces[key] === spaceColumnLength)
    .map(item => Number(item))

  // Reconstruct the input with 0's for spaces and the space separator replaced with -1's
  for (let i = 0; i < input.length - 1; i += 1) {
    const row = input[i] ?? []
    const digits = []

    for (let col = 0; col < row?.length; col += 1) {
      if (spaceColumns.includes(col)) {
        // Replace the space column separator value with -1
        digits.push(-1)
      } else {
        // Replace spaces with 0 and convert digits to number
        const digit = row[col] === ' ' ? 0 : Number(row[col])
        digits.push(digit)
      }
    }

    compactList.push(digits)
  }

  // Extract the list of operations
  const operations = <Operations[]>input[input.length - 1]?.filter(item => item !== ' ')

  return {
    numbers: compactList,
    operations
  }
}
