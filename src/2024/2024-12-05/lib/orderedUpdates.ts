import type { QuizData, Rules } from './fileReader.js'
import { uniformArrayElements, arrayMiddleIndex } from '@/utils/arrays.js'

/**
 * Checks if an "update" list is correct according to defined "rules"
 * @param rules {Rules} Object containing parsed and formatted rules and updates data
 * @param updateItems {number[]} "updates" array items content
 * @returns Flag indicating if the set of `updateItems` is correct
 */
export const isOrderedReport = (rules: Rules, updateItems: number[]): boolean => {
  let isOrdered = true

  if (!uniformArrayElements(updateItems, 'number')) {
    throw new Error('Invalid updateItems item/s')
  }

  for (let i = 0; i < updateItems.length - 1; i += 1) {
    const currentItem = updateItems[i] as number

    // Current "update" item should have en entry in the "rules" object
    if (rules[currentItem] === undefined) {
      isOrdered = false
      break
    }

    // Get the rest of items after the current item for comparison
    const afterItems = updateItems.filter((_, index) => index > i)

    // Current item's "rule" should have the after-item entries
    if (!afterItems.every(item => rules[currentItem]?.includes(item))) {
      isOrdered = false
      break
    }
  }

  return isOrdered
}

/**
 * Counts the sum of middle page numbers from correctly-ordered "updates"
 * @param data {QuizData} Object containing "rules" and "updates" input
 * @param verbose {boolean} Flag to display processing log messages. Defaults to false.
 * @returns {number} Total middle page numbers from correct "updates"
 */
export const sumOfCorrectUpdates = (data: QuizData, verbose: boolean = false): number => {
  let sum = 0

  for (let i = 0; i < data.updates.length; i += 1) {
    const isOrdered = isOrderedReport(data.rules, data.updates[i] ?? [])

    if (isOrdered) {
      if (verbose) {
        console.log('---correct', data.updates[i])
      }

      const mid = arrayMiddleIndex(data.updates[i] as number[])
      const item = data.updates[i]?.[mid - 1]
      sum += item ?? 0
    }
  }

  return sum
}
