import type { InredientIdRange } from './fileReader.js'

/**
 * Counts the number of fresh ingredients from the available ingredients.
 * @param {InredientIdRange[]} database - Fresh ingredient ID ranges
 * @param {number[]} - List of available ingredient IDs
 * @returns {number} Number of fresh ingredients from the available ingredients.
 */
export const findFreshIngredients = (
  database: InredientIdRange[],
  freshIds: number[]
) => {
  const freshIngredients: number[] = []

  for (let i = 0; i < freshIds.length; i += 1) {
    for (let j = 0; j < database.length; j += 1) {
      const { min, max } = database[j]!
      const freshId = freshIds[i] ?? -1

      if (freshId >= min && freshId <= max) {
        if (!freshIngredients.includes(freshId)) {
          freshIngredients.push(freshId)
          break
        }
      }
    }
  }

  return freshIngredients.length
}

/**
 * Finds the total number of unique fresh ingredients in the database.
 * @param {InredientIdRange[]} database - Fresh ingredient ID ranges
 * @returns {number} Total number of fresh ingredients in the database.
 */
export const freshIngredientIDs = (database: InredientIdRange[]) => {
  let ingredientCount = 0

  // Arrange from lowest to highest ranges
  const sortedDatabase = database.sort((a, b) => a.min - b.min)

  // Merged database with overlapping ranges
  const mergedDatabase = [sortedDatabase[0]]

  // Merge overlapping ranges
  for (let i = 1; i < sortedDatabase.length; i += 1) {
    const sorted = sortedDatabase[i]
    const merged = mergedDatabase[mergedDatabase.length - 1]

    if (sorted!.min <= merged!.max) {
      merged!.max = Math.max(merged!.max, sorted!.max)
    } else {
      mergedDatabase.push(sorted)
    }
  }

  for (let i = 0; i < mergedDatabase.length; i += 1) {
    const { min, max } = mergedDatabase[i]!
    ingredientCount += max - min + 1
  }

  return ingredientCount
}
