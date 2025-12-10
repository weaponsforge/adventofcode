import { AOCOutputType, readAOCInputFile } from '@/aoc/file/aocfile.js'

/**
 * Reads the input file, converting `"L"` numbers to negative and `"R"` numbers to positive
 * @returns {number[]} - parsed and formatted input
 */
export const fileReader = (inputFilePath: string): number[] => {
  const input = readAOCInputFile({
    filePath: inputFilePath,
    type: AOCOutputType.STRING_ARRAY,
    delimiter: '\n'
  })

  const negative = 'L'
  const positive = 'R'

  return input
    .map(code => {
      const startLetter = code.substring(0, 1)

      if (![negative, positive].includes(startLetter)) {
        throw new Error(`Invalid input: "${code}"`)
      }

      const step = code.startsWith(negative)
        ? Number(code.replace(negative, '')) * -1
        : Number(code.replace(positive, ''))

      return step
    })
}
