import { AOCOutputType, readAOCInputFile } from '@/aoc/file/aocfile.js'
import { file } from '@/aoc/file/utils.js'

import { countTachyonSplit } from './lib/tachyonSplit.js'

const input = readAOCInputFile({
  filePath: file(import.meta.url, 'input.txt'),
  type: AOCOutputType.STRING_ARRAY_2D,
  delimiter: ''
}) as string[][]

/**
 * Part 1/2 of the 2025-12-07 quiz.
 * Counts the number of times the tachyon beam splitted.
 */
const quiz20251207_01 = () => {
  const splitCount = countTachyonSplit(input)
  console.log(`Part 1 tachyon beam split count: ${splitCount}`)
}

quiz20251207_01()
