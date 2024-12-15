import { test, expect } from 'vitest'
import { countSafeReports } from './lib/countSafeReports.js'

// Sample data
export const data: number[][] = `9 8 6 4 3
6 8 13 14 15
12 10 9 5 4
5 7 6 8 9
16 14 12 12 9`
  .split('\n')
  .map(row => row.split(' ').map(Number))

test('countSafeReports - demo', () => {
  expect(countSafeReports(data)).toBe(1)
})

test('countSafeReports with Dampener - demo', () => {
  expect(countSafeReports(data, true)).toBe(3)
})
