import { test, expect } from 'vitest'

import { file } from '@/aoc/file/utils.js'
import { fileReader } from './lib/fileReader.js'
import { threeLargestCircuits } from './lib/distance3d.js'

const input = fileReader(file(import.meta.url, 'input.txt'))
const numConnections = 10

test('part 1: multiply 3 largest circuit sizes', () => {
  const value = threeLargestCircuits(input, numConnections)
  expect(value).toBe(32)
})
