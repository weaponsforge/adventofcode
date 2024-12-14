import { test, expect } from 'vitest'
import { wordCount } from './lib/wordCount.js'

const data: string[][] = `ABCDEFGHIJ
XMASXMASXM
GMUASHLGWH
MXAXAXMHRD
AFHSGJM2AX`
  .split('\n')
  .map(row => row.split(''))

test('Count "XMAS" words - demo', () => {
  expect(wordCount(data, 'XMAS')).toBe(3)
})
