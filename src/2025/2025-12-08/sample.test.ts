import { test, expect } from 'vitest'

import { file } from '@/aoc/file/utils.js'
import { fileReader } from './lib/fileReader.js'
import { singleCircuit, threeLargestCircuits } from './lib/distance3d.js'

const input = fileReader(file(import.meta.url, 'input.txt'))
const numConnections = 10

test('part 1: product of 3 largest circuit sizes', () => {
  const value = threeLargestCircuits(input, numConnections)
  expect(value).toBe(32)
})

test('part 2: product of 2 x-coordinates', () => {
  const value = singleCircuit(input)
  expect(value).toBe(11232)
})
