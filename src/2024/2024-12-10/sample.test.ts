import { test, expect } from 'vitest'

import { AOC_OUTPUT_TYPE, readAOCInputFile } from '@/utils/aocInputFile.js'
import { file } from '@/utils/file.js'

import { countTrailScores } from './lib/scores.js'

const input = readAOCInputFile({
  filePath: file(import.meta.url, 'input.txt'),
  type: AOC_OUTPUT_TYPE.NUMBER_ARRAY_2D
}) as number[][]

test('Defragmented disk checksum', () => {
  expect(countTrailScores(input).total).toBe(17)
})
