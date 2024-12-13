import { test, expect } from 'vitest'
import { quiz20241203_01, quiz20241203_02 } from './quiz.js'

test('sum of mul(x,y) texts', () => {
  expect(quiz20241203_01()).toBe(187194524)
})

test('sum of mul(x,y) texts', () => {
  expect(quiz20241203_02()).toBe(127092535)
})
