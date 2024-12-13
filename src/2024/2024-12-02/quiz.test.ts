import { test, expect } from 'vitest'
import { quiz20241202_01, quiz20241202_02 } from './quiz.js'

test('no. of safe reports quiz', () => {
  expect(quiz20241202_01()).toBe(598)
})

test('no. of safe reports quiz with dampener', () => {
  expect(quiz20241202_02()).toBe(634)
})
