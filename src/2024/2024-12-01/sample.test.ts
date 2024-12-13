import { test, expect } from 'vitest'
import { getTotalDistance } from './lib/listTotalDistance.js'
import { similarityScore } from './lib/similarityScore.js'

const array1 = [3, 4, 2, 1, 3, 3]
const array2 = [4, 3, 5, 3, 9, 3]

test('listTotalDistance - demo', () => {
  expect(getTotalDistance(array1, array2)).toBe(11)
})

test('similarityScore - demo', () => {
  expect(similarityScore(array1, array2)).toBe(31)
})
