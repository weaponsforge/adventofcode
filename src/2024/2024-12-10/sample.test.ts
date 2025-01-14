import { test, expect } from 'vitest'

import { AOCOutputType, readAOCInputFile } from '@/aoc/file/aocfile.js'
import { file } from '@/aoc/file/utils.js'

import { countTrailScores } from './lib/scoresRatings.js'

const input = readAOCInputFile({
  filePath: file(import.meta.url, 'input.txt'),
  type: AOCOutputType.NUMBER_ARRAY_2D
}) as number[][]

test('Total trailhead score:', () => {
  expect(
    countTrailScores(input).total
  ).toBe(17)
})

test('Trailhead rating:', () => {
  expect(
    countTrailScores(input, { isRating: true }).total
  ).toBe(25)
})
