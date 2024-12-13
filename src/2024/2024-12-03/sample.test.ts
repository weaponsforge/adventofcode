import { test, expect } from 'vitest'
import { extractMultiply, extractMultiplyCondition } from './lib/extractMultiply.js'

const data = 'mul(2,4)@^do_not_mul(7,3)+mul(9,23]then(mul(6,3))%&mul[4,2]!mul(11,8)'

// eslint-disable-next-line
const dataCondition = "&mul[8,4]!mul(18,4)^xmul(3,6)don't()_mul(2,3)+mul(4,7](mul(12,2)undo()?)"

test('extract mul() and process - demo', () => {
  expect(extractMultiply(data)).toBe(135)
})

test('extract and process mul() with do() - demo', () => {
  expect(extractMultiplyCondition(dataCondition)).toBe(90)
})
