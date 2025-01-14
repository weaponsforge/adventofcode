import { test, expect } from 'vitest'

import { fileReader } from './lib/fileReader.js'
import { countTokensPrizes } from './lib/count.js'
import { countTokensOnAdjustedPrizes } from './lib/countAdjusted.js'

const data = fileReader('../input.txt')
const data2 = fileReader('../input2.txt')

test('Number of tokens and prizes', () => {
  const { prizes, tokens } = countTokensPrizes(data)

  expect(prizes).toBe(2)
  expect(tokens).toBe(480)
})

test('No. of tokens and prizes on prize location +10000000000000', () => {
  const { prizes, tokens } = countTokensOnAdjustedPrizes(data2)

  expect(prizes).toBe(92)
  expect(tokens).toBe(51808961380838)
})
