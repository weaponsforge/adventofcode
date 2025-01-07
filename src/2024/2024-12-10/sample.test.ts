import { test, expect } from 'vitest'

import { AOC_OUTPUT_TYPE, readAOCInputFile } from '@/aoc/aocInputFile.js'
import { file } from '@/aoc/file.js'

import { countTrailScores } from './lib/scoresRatings.js'

const input = readAOCInputFile({
  filePath: file(import.meta.url, 'input.txt'),
  type: AOC_OUTPUT_TYPE.NUMBER_ARRAY_2D
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
