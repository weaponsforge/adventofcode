import { test, expect } from 'vitest'

import { fileReader } from './lib/fileReader.js'
import { calculateSafetyFactor } from './lib/safetyFactor.js'
import { findEasterEgg } from './lib/findEasterEgg.js'

const dataSample = fileReader('../input_sample.txt')
const dataQuiz = fileReader('../input.txt')

// Grid dimensions for the sample input
const gridSample = { length: 7, width: 11 }

// Grid dimensions for the randomized quiz input
const gridQuiz = { length: 103, width: 101 }

test('Safety factor:', () => {
  const safetyFactor = calculateSafetyFactor({
    data: dataSample,
    gridMeta: gridSample,
    seconds: 100
  })

  expect(safetyFactor).toBe(10)
})

test('Easter egg iteration no. (seconds):', () => {
  const seconds = findEasterEgg({
    data: dataQuiz,
    gridMeta: gridQuiz,
    seconds: 10000
  })

  expect(seconds).toBe(1)
})
