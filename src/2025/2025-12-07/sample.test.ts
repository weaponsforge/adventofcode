import { test, expect } from 'vitest'

import { AOCOutputType, readAOCInputFile } from '@/aoc/file/aocfile.js'
import { file } from '@/aoc/file/utils.js'

import { countTachyonSplit } from './lib/tachyonSplit.js'

const input = readAOCInputFile({
  filePath: file(import.meta.url, 'input.txt'),
  type: AOCOutputType.STRING_ARRAY_2D,
  delimiter: ''
}) as string[][]

test('part 1: grand total of vertical columns result', () => {
  const countSplits = countTachyonSplit(input)
  expect(countSplits).toBe(20)
})
