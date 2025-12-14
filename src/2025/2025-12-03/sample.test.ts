import { test, expect } from 'vitest'

import { AOCOutputType, readAOCInputFile } from '@/aoc/file/aocfile.js'
import { file } from '@/aoc/file/utils.js'
import { findMaxJoltage, findMaxJoltageN } from './lib/maxJoltage.js'

const input = readAOCInputFile({
  filePath: file(import.meta.url, 'input.txt'),
  type: AOCOutputType.STRING_ARRAY,
  delimiter: '\n'
}) as string[]

test('part 1: maximum joltage - 2 digits', () => {
  const joltage = findMaxJoltage(input)
  expect(joltage).toBe(346)
})

test('part 2: maximum joltage - 12 digits', () => {
  const joltage = findMaxJoltageN(input)
  expect(joltage).toBe(3021910778618)
})
