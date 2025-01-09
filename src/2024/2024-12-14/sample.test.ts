import { test, expect } from 'vitest'

import { fileReader } from './lib/fileReader.js'
import { calculateSafetyFactor } from './lib/safetyFactor.js'

const data = fileReader('../input.txt')

test('Safety factor:', () => {
  const safetyFactor = calculateSafetyFactor({
    data,
    gridMeta: { length: 7, width: 11 },
    seconds: 100,
    log: true
  })

  expect(safetyFactor).toBe(10)
})
