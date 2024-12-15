import { test, expect } from 'vitest'
import { fileReader } from './lib/fileReader.js'
import type { QuizData } from './lib/fileReader.js'

import { sumOfCorrectUpdates } from './lib/orderedUpdates.js'
import { fixOrderingUpdates } from './lib/fixOrderingUpdates.js'

const data: QuizData = fileReader('input.txt')

test('Count middle pages - demo', () => {
  expect(sumOfCorrectUpdates(data)).toBe(232)
})

test('Fix ordering - demo', () => {
  expect(fixOrderingUpdates(data)).toBe(126)
})
