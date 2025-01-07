import { arrangeArray, ARRAY_ORDERING } from '@/aoc/arrays.js'

/**
 * Calculates the total distance between the smallest value-pairs from list `a` and list `b`
 * @param a {number[]} Array of numbers. `a[]` and `b[]` should have equal number of items.
 * @param b {number[]} Array of numbers. `a[]` and `b[]` should have equal number of items.
 * @returns Total distance
 */
export const getTotalDistance = (a: number[], b: number[]): number => {
  a.sort(arrangeArray(ARRAY_ORDERING.ASC))
  b.sort(arrangeArray(ARRAY_ORDERING.ASC))

  return a.reduce((sum, item, index) => {
    return sum += Math.abs(item - (b[index] || 0))
  }, 0)
}
