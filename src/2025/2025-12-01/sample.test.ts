import { test, expect } from 'vitest'

import { decodePassword } from './lib/decode.js'
import { fileReader } from './lib/fileReader.js'
import { file } from '@/aoc/file/utils.js'

const inputFile = file(import.meta.url, 'input.txt')
const input = fileReader(inputFile)

/**
 * Tests the answer to part 1/2 of the AOC 2025 day 1 quiz
 */
test('part 1: secret code', () => {
  const password = decodePassword(input)
  expect(password).toBe(3)
})
