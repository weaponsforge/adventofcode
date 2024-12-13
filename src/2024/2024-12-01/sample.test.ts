import { test, expect } from 'vitest'
import { getTotalDistance } from './listTotalDistance.js'

test('listTotalDistance - demo', () => {
  const array1 = [3, 4, 2, 1, 3, 3]
  const array2 = [4, 3, 5, 3, 9, 3]

  expect(getTotalDistance(array1, array2)).toBe(11)
})
