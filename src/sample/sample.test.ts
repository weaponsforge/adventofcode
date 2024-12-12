import { test, expect } from 'vitest'
import { greet } from './greet.js'

test('greet', () => {
  const message = greet('World')
  expect(message).toBeTypeOf('string')
})
