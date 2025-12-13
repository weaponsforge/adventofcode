import { file } from '@/aoc/file/utils.js'
import { test, expect } from 'vitest'

import { fileReader } from './lib/fileReader.js'
import { invalidID2x, invalidIDMultiple } from './lib/invalidIds.js'

const inputFile = file(import.meta.url, 'input.txt')
const input = fileReader(inputFile)

test('part 1: sum of invalid ids appearing 2x', () => {
  const sumInvalid = invalidID2x(input)
  expect(sumInvalid).toBe(1189292806)
})

test('part 2: sum of multiple invalid ids', () => {
  const sumInvalid = invalidIDMultiple(input)
  expect(sumInvalid).toBe(2014684396)
})
