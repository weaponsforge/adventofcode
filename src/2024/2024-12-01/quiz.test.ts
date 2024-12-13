import { test, expect } from 'vitest'
import { quiz20241201_01, quiz20241201_02 } from './quiz.js'

test('listTotalDistance quiz', () => {
  expect(quiz20241201_01()).toBe(2086478)
})

test('similarity score quiz', () => {
  expect(quiz20241201_02()).toBe(24941624)
})
