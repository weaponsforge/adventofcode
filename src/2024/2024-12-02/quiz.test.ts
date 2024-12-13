import { test, expect } from 'vitest'
import { quiz20241202_01 } from './quiz.js'

test('no. of safe reports quiz', () => {
  expect(quiz20241202_01()).toBe(598)
})
