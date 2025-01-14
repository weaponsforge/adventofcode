import { test, expect } from 'vitest'

import { fileReader } from './lib/fileReader.js'
import { fileReaderExpand } from './lib/fileReaderExpanded.js'

import { moveBoxes, calculateGPS } from './lib/calculateGPS.js'
import { moveExpandedBoxes, calculateExpandedGPS } from './lib/calculateExpandedGPS.js'

test('Part 1: Move boxes and calculate GPS', () => {
  const data = fileReader('../input.txt')
  const data2 = fileReader('../input2.txt')

  moveBoxes(data.grid, data.instructions)
  expect(calculateGPS(data.grid)).toBe(2027)

  moveBoxes(data2.grid, data2.instructions)
  expect(calculateGPS(data2.grid)).toBe(9897)
})

test('Part 2: Move expanded boxes and calculate GPS', () => {
  const data = fileReaderExpand('../input.txt')
  const data2 = fileReaderExpand('../input2.txt')

  moveExpandedBoxes(data.grid, data.instructions)
  expect(calculateExpandedGPS(data.grid)).toBe(1950)

  moveExpandedBoxes(data2.grid, data2.instructions)
  expect(calculateExpandedGPS(data2.grid)).toBe(9125)
})
