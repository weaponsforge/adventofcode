import { AOCOutputType, readAOCInputFile } from '@/aoc/file/aocfile.js'

type Operations = '+' | '*'

export type MathInputType = {
  numbers: number[][];
  operations: Operations[];
}

/**
 * Returns a `MathInputType` object containing a list of input numbers `{ numbers[][] }` arranged in grid and their vertical operations in `{ operations[] }`.
 * @param {string} inputFilePath - Complete system file path to the input file.
 * @returns {MathInputType} A `MathInputType` object.
 */
export const fileReader = (inputFilePath: string): MathInputType => {
  const input = readAOCInputFile({
    filePath: inputFilePath,
    type: AOCOutputType.STRING_ARRAY_2D,
    delimiter: ' '
  }) as string[][]

  const SYMBOLS = ['*', '+']
  const operations: Operations[] = []
  const numbers: number[][] = []

  for (let i = 0; i < input.length; i += 1) {
    const row = input[i]!
      .filter((item: string) => item !== '')
      .map((item: string | Operations) => {
        if (SYMBOLS.includes(item)) {
          operations.push(item as Operations)
          return -1
        } else {
          return Number(item)
        }
      }) as number[]

    numbers.push(row)
  }

  // Remove the symbols row
  numbers.pop()

  return {
    numbers,
    operations
  }
}
