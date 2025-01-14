import { test, expect } from 'vitest'

import { fileReader } from './lib/fileReader.js'
import { calculateSafetyFactor } from './lib/safetyFactor.js'
import { findEasterEgg } from './lib/findEasterEgg.js'

test('Safety factor:', () => {
  // Grid dimensions for the randomized quiz input
  const gridSettings = { length: 7, width: 11 }

  // Sample data. Replace with AoC quiz data.
  const dataInput = fileReader('../input1.txt')

  const safetyFactor = calculateSafetyFactor({
    data: dataInput,
    gridMeta: gridSettings,
    seconds: 100
  })

  expect(safetyFactor).toBe(10)
})

test('Easter egg iteration no. (seconds):', () => {
  // Grid dimensions for the randomized quiz input
  const gridSettings = { length: 103, width: 101 }

  // Random AoC auiz data
  const dataInput = fileReader('../input.txt')

  const seconds = findEasterEgg({
    data: dataInput,
    gridMeta: gridSettings,
    seconds: 10000
  })

  expect(seconds).toBe(1)
})
