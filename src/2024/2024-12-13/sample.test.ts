import { test, expect } from 'vitest'

import { fileReader } from './lib/fileReader.js'
import { countTokensPrizes } from './lib/count.js'

const data = fileReader('../input.txt')

test('Number of tokens and prizes', () => {
  expect(countTokensPrizes(data).prizes).toBe(2)
  expect(countTokensPrizes(data).tokens).toBe(480)
})
