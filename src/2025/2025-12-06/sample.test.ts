import { test, expect } from 'vitest'

import { file } from '@/aoc/file/utils.js'
import { fileReader, fileReaderRTL } from './lib/fileReader.js'
import { additionMultiplication, cephalopodMath } from './lib/solveMath.js'

test('part 1: grand total of vertical columns result', () => {
  const input = fileReader(file(import.meta.url, 'input.txt'))
  const grandTotal = additionMultiplication(input)

  expect(grandTotal).toBe(4255626)
})

test('part 2: grand total of vertical columns result', () => {
  const input = fileReaderRTL(file(import.meta.url, 'input.txt'))
  const grandTotal = cephalopodMath(input)

  expect(grandTotal).toBe(2891978)
})
