import { test, expect } from 'vitest'

import { AOCOutputType, readAOCInputFile } from '@/aoc/file/aocfile.js'
import { file } from '@/aoc/file/utils.js'
import { accessiblePaperRolls } from './lib/paperRolls.js'

const input = readAOCInputFile({
  filePath: file(import.meta.url, 'input.txt'),
  type: AOCOutputType.STRING_ARRAY_2D,
  delimiter: ''
}) as string[][]

test('part 1: accessible paper rolls', () => {
  const rollsCount = accessiblePaperRolls(input)
  expect(rollsCount).toBe(15)
})
