import { test, expect } from 'vitest'

import { AOCOutputType, readAOCInputFile } from '@/aoc/file/aocfile.js'
import { file } from '@/aoc/file/utils.js'
import { accessiblePaperRolls, totalPaperRolls } from './lib/paperRolls.js'

const input = readAOCInputFile({
  filePath: file(import.meta.url, 'input.txt'),
  type: AOCOutputType.STRING_ARRAY_2D,
  delimiter: ''
}) as string[][]

test('part 1: accessible paper rolls', () => {
  const paperRolls = accessiblePaperRolls(input)
  expect(paperRolls.count).toBe(15)
})

test('part 2: total paper rolls removed', () => {
  const totalRemoved = totalPaperRolls(input)
  expect(totalRemoved).toBe(68)
})
