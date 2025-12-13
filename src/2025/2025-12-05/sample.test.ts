import { test, expect } from 'vitest'

import { file } from '@/aoc/file/utils.js'
import { fileReader } from './lib/fileReader.js'
import { findFreshIngredients } from './lib/ingredients.js'

const inputFile = file(import.meta.url, 'input.txt')
const input = fileReader(inputFile)

test('part 1: fresh ingredients count', () => {
  const freshCount = findFreshIngredients(input.freshIds, input.availableIds)
  expect(freshCount).toBe(4)
})
