
import { readAOCInputFile, AOC_OUTPUT_TYPE } from '@/utils/aocInputFile.js'
import { file } from '@/utils/file.js'

import { countTrailScores } from './lib/scores.js'

const input = readAOCInputFile({
  filePath: file(import.meta.url, 'input.txt'),
  type: AOC_OUTPUT_TYPE.NUMBER_ARRAY_2D
}) as number[][]

/**
 * Part 1/2 of the 2024-12-10 quiz
 * Counts the total trailhead scores
 */
const quiz20241210_01 = () => {
  const totalScore = countTrailScores(input, true)
  console.log('Total trailhead score:', totalScore.total)
}

quiz20241210_01()
