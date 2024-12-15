import { test, expect } from 'vitest'
import { getTotalDistance } from './lib/listTotalDistance.js'
import { similarityScore } from './lib/similarityScore.js'

const array1 = [8, 6, 6, 3, 10, 7]
const array2 = [9, 5, 9, 5, 16, 7]

test('listTotalDistance - demo', () => {
  expect(getTotalDistance(array1, array2)).toBe(13)
})

test('similarityScore - demo', () => {
  expect(similarityScore(array1, array2)).toBe(7)
})
