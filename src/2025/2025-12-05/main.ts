import { file } from '@/aoc/file/utils.js'

import { fileReader } from './lib/fileReader.js'
import { findFreshIngredients } from './lib/ingredients.js'

const inputFile = file(import.meta.url, 'input.txt')
const input = fileReader(inputFile)

/**
 * Part 1/2 of the 2025-12-05 quiz
 * Counts the number of fresh ingredients from a list of available ingredients.
 */
const quiz20251205_01 = () => {
  const freshCount = findFreshIngredients(input.freshIds, input.availableIds)
  console.log(`Part 1 Number of fresh ingredients: ${freshCount}`)
}

quiz20251205_01()
