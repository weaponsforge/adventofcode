import { test, expect } from 'vitest'
import { extractMultiply } from './lib/extractMultiply.js'

const data = 'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))'

test('extract mul() and process - demo', () => {
  expect(extractMultiply(data)).toBe(161)
})
