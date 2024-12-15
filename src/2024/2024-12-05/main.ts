import { fileReader } from './lib/fileReader.js'
import type { QuizData } from './lib/fileReader.js'

import { sumOfCorrectUpdates } from './lib/orderedUpdates.js'
import { fixOrderingUpdates } from './lib/fixOrderingUpdates.js'

const data: QuizData = fileReader('input.txt')

/**
 * Part 1/2 of the 2024-12-05 quiz
 * Counts the sum of middle pages from correct updates
 */
const quiz20241205_01 = () => {
  const sum = sumOfCorrectUpdates(data, true)
  console.log('Sum of middle page numbers:', sum)
}

/**
 * Part 2/2 of the 2024-12-05 quiz
 * Fixes incorrectly-ordered updates and counts
 *  the sum of middle pages from corrected updates
 */
const quiz20241205_02 = () => {
  const sum = fixOrderingUpdates(data, true)
  console.log('Sum of corrected middle page numbers:', sum)
}

quiz20241205_01()
quiz20241205_02()
