import { test, expect } from 'vitest'

import { AOCOutputType, readAOCInputFile } from '@/aoc/file/aocfile.js'
import { file } from '@/aoc/file/utils.js'
import { findMaxRectangleArea } from './lib/rectangles.js'

const input = readAOCInputFile({
  filePath: file(import.meta.url, 'input.txt'),
  type: AOCOutputType.NUMBER_ARRAY_2D,
  delimiter: ','
}) as number[][]

test('part 1: maximum rectangular area', () => {
  const maxArea = findMaxRectangleArea(input)
  expect(maxArea).toBe(45)
})
