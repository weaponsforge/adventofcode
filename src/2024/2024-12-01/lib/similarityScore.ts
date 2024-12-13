/**
 * Calculates the similarity scores of elements in array `a` with array `b`.
 * Counts the occurrence of each item in array `a` in array `b`.
 * @param a {number[]} Array of numbers. `a[]` and `b[]` should have equal number of items.
 * @param b {number[]} Array of numbers. `a[]` and `b[]` should have equal number of items.
 * @returns Total similarity score of array `a` with array `b`
 */
export const similarityScore = (a: number[], b: number[]): number => {
  return a.reduce((sum, item) => {
    const duplicates = b.filter(x => x === item).length || 0
    return sum += item * duplicates
  }, 0)
}
