import { test, expect } from 'vitest'

import { AOCOutputType, readAOCInputFile } from '@/aoc/file/aocfile.js'
import { file } from '@/aoc/file/utils.js'
import { findMaxJoltage } from './lib/maxJoltage.js'

const input = readAOCInputFile({
  filePath: file(import.meta.url, 'input.txt'),
  type: AOCOutputType.STRING_ARRAY,
  delimiter: '\n'
}) as string[]

test('part 1: maximum joltage', () => {
  const joltage = findMaxJoltage(input)
  expect(joltage).toBe(357)
})
