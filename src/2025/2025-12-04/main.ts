import { AOCOutputType, readAOCInputFile } from '@/aoc/file/aocfile.js'
import { file } from '@/aoc/file/utils.js'

import { accessiblePaperRolls } from './lib/paperRolls.js'

const input = readAOCInputFile({
  filePath: file(import.meta.url, 'input.txt'),
  type: AOCOutputType.STRING_ARRAY_2D,
  delimiter: ''
}) as string[][]

/**
 * Part 1/2 of the 2025-12-04 quiz
 * Counts the number of paper rolls that can be accessed by fork lifts.
 */
const quiz20251204_01 = () => {
  const rollsCount = accessiblePaperRolls(input)
  console.log(`Part 1 accessible paper rolls: ${rollsCount}`)
}

quiz20251204_01()
