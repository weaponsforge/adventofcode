import { fileReader } from './lib/fileReader.js'
import { sumOfCorrectUpdates } from './lib/orderedUpdates.js'
import type { QuizData } from './lib/fileReader.js'

const data: QuizData = fileReader('input.txt')

/**
 * Part 1/2 of the 2024-12-05 quiz
 * Counts the sum of middle pages from correct updates
 */
const quiz20241205 = () => {
  const sum = sumOfCorrectUpdates(data, true)
  console.log('Sum of middle page numbers:', sum)
}

quiz20241205()
