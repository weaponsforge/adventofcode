import { test, expect } from 'vitest'
import { wordCount } from './lib/wordCount.js'
import { countMASword } from './lib/xmasCount.js'

const data: string[][] = `ABCDEFGHIJ
XMASXMASXM
GMUMSHLGWH
MXAXAXMHRD
ASHSGJM2AX`
  .split('\n')
  .map(row => row.split(''))

test('Count "XMAS" words - demo', () => {
  expect(wordCount(data, 'XMAS')).toBe(4)
})

test('Count "MAS-only" crossed words - demo', () => {
  expect(countMASword(data, 'MAS')).toBe(1)
})
