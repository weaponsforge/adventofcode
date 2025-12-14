import { file } from '@/aoc/file/utils.js'

import { fileReader } from './lib/fileReader.js'
import { freshIngredientIDs, findFreshIngredients } from './lib/ingredients.js'

const inputFile = file(import.meta.url, 'input-01.txt')
const input = fileReader(inputFile)

/**
 * Part 1/2 of the 2025-12-05 quiz
 * Counts the number of fresh ingredients from a list of available ingredients.
 */
const quiz20251205_01 = () => {
  const freshCount = findFreshIngredients(input.freshIds, input.availableIds)
  console.log(`Part 1 Number of fresh ingredients: ${freshCount}`)
}

/**
 * Part 2/2 of the 2025-12-05 quiz
 * Counts the number of fresh ingredients from the   database.
 */
const quiz20251205_02 = () => {
  const freshCount = freshIngredientIDs(input.freshIds)
  console.log(`Part 2 Number of fresh ingredients: ${freshCount}`)
}

quiz20251205_01()
quiz20251205_02()
