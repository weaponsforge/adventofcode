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
        }
      }
    }
  }

  return freshIngredients.length
}
