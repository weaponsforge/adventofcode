import { test, expect } from 'vitest'
import { countSafeReports } from './lib/countSafeReports.js'

// Sample data
export const data: number[][] = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`
  .split('\n')
  .map(row => row.split(' ').map(Number))


test('countSafeReports - demo', () => {
  expect(countSafeReports(data)).toBe(2)
})

test('countSafeReports with Dampener - demo', () => {
  expect(countSafeReports(data, true)).toBe(4)
})
