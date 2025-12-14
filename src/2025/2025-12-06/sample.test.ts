import { test, expect } from 'vitest'

import { file } from '@/aoc/file/utils.js'
import { fileReader } from './lib/fileReader.js'
import { additionMultiplication } from './lib/solveMath.js'

const input = fileReader(file(import.meta.url, 'input.txt'))

test('part 1: grand total of vertical columns result', () => {
  const grandTotal = additionMultiplication(input)
  expect(grandTotal).toBe(4255626)
})
