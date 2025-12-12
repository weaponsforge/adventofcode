import { test, expect } from 'vitest'

import { decodePassword, method0x434C49434B } from './lib/decode.js'
import { fileReader } from './lib/fileReader.js'
import { file } from '@/aoc/file/utils.js'

const inputFile = file(import.meta.url, 'input.txt')
const input = fileReader(inputFile)

test('part 1: secret code', () => {
  const password = decodePassword(input)
  expect(password).toBe(3)
})

test('part 2: use method 0x434C49434B', () => {
  const password = method0x434C49434B(input)
  expect(password).toBe(6)
})

