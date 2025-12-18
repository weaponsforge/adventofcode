import { AOCOutputType, readAOCInputFile } from '@/aoc/file/aocfile.js'
import { file } from '@/aoc/file/utils.js'

import { countTachyonSplit, countTimelines } from './lib/tachyonSplit.js'

const input = readAOCInputFile({
  filePath: file(import.meta.url, 'input-01.txt'),
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

/**
 * Part 2/2 of the 2025-12-07 quiz.
 * Counts the number of timelines a tachyon particle could end up on.
 */
const quiz20251207_02 = () => {
  const timelinesCount = countTimelines(input)
  console.log(`Part 2 timeline count: ${timelinesCount}`)
}

quiz20251207_01()
quiz20251207_02()
