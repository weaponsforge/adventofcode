import { file } from '@/aoc/file/utils.js'
import { test, expect } from 'vitest'

import { fileReader } from './lib/fileReader.js'
import { invalidID2x } from './lib/invalidIds.js'

const inputFile = file(import.meta.url, 'input.txt')
const input = fileReader(inputFile)

test('part 1: sum of invald ids', () => {
  const sumInvalid = invalidID2x(input)
  expect(sumInvalid).toBe(1227775554)
})
