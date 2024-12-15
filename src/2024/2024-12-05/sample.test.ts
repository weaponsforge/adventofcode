import { test, expect } from 'vitest'
import { sumOfCorrectUpdates } from './lib/orderedUpdates.js'
import { fileReader } from './lib/fileReader.js'
import type { QuizData } from './lib/fileReader.js'

const data: QuizData = fileReader('input.txt')

test('Count middle pages - demo', () => {
  expect(sumOfCorrectUpdates(data)).toBe(232)
})
