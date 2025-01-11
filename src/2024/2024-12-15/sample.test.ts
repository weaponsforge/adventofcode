import { test, expect } from 'vitest'

import { fileReader } from './lib/fileReader.js'
import { moveBoxes, calculateGPS } from './lib/calculateGPS.js'

test('Part 1: Move boxes and calculate GPS', () => {
  const data = fileReader('../input.txt')
  const data2 = fileReader('../input2.txt')

  moveBoxes(data.grid, data.instructions)
  expect(calculateGPS(data.grid)).toBe(2027)

  moveBoxes(data2.grid, data2.instructions)
  expect(calculateGPS(data2.grid)).toBe(9897)
})
