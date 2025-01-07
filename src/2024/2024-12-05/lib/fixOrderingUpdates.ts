import { isOrderedReport } from './orderedUpdates.js'
import { arrayMiddleIndex, uniformArrayElements } from '@/aoc/array/utils.js'

import type { Rules } from './fileReader.js'
import type { QuizData } from './fileReader.js'

type CurrentItem = {
  value: number;
  index: number;
}

/**
 * Finds the next appropriate array index to swap places with the incorrectly placed current item according to the "rules"
 * @param rules {Rules} Object containing parsed and formatted rules and updates data
 * @param restItems {number[]} "updates" array items content
 * @param currentItem {CurrentItem} Object containing the "current" item data in focus: value and array index
 * @returns {number} Array index to swap positions with the current item
 */
const nextHotSwapIndex = (rules: Rules, restItems: number[], currentItem: CurrentItem): number => {
  let indexToSwap = -1

  for (let i = currentItem.index; i < restItems.length; i += 1) {
    if (rules[restItems[i] as number]?.includes(currentItem.value)) {
      indexToSwap = i
      break
    }
  }

  if (indexToSwap === -1) {
    throw new Error('No array item to swap with')
  }

  return indexToSwap
}

/**
 * Fixes the ordering of an incorrectly-ordered "update" (row) by swapping its elements with target items.
 * @param rules {Rules} Object containing parsed and formatted rules and updates data
 * @param unorderedItems {number[]} "updates" array items content
 * @returns {number[]} Corrected "update" items
 */
export const fixOrdering = (rules: Rules, unorderedItems: number[]): number[] => {
  if (!uniformArrayElements(unorderedItems, 'number')) {
    throw new Error('Invalid item/s')
  }

  let currentItem: number = -2

  // Swaps incorrectly placed items with target items in the array
  const swapItems = (activeItem: CurrentItem, activeIndex: number) => {
    const indexToSwap = nextHotSwapIndex(
      rules,
      unorderedItems,
      activeItem
    )

    const temp = unorderedItems[indexToSwap] as number
    unorderedItems[indexToSwap] = activeItem.value
    unorderedItems[activeIndex] = temp
    currentItem = temp

    fixOrdering(rules, unorderedItems)
  }

  for (let i = 0; i < unorderedItems.length - 1; i += 1) {
    currentItem = unorderedItems[i] as number
    const currentItemData = { value: currentItem, index: i }

    // Correct "update" item should have en entry in the "rules" object
    // Swap places with other items if its incorrect
    if (rules[currentItem] === undefined) {
      swapItems(currentItemData, i)
    }

    // Get the rest of items after the current item for comparison
    const afterItems = unorderedItems.filter((_, index) => index > i)

    // Correct item's "rule" should have the after-item entries
    // Swap places with other items if its incorrect
    if (!afterItems.every(item => rules[currentItem]?.includes(item))) {
      swapItems(currentItemData, i)
    }
  }

  return [...unorderedItems]
}

/**
 * Fixes incorrectly-ordered "updates" and calculates their middle page numbers after fixing.
 * @param data {QuizData} Object containing "rules" and "updates" input
 * @param verbose {boolean} Flag to display processing log messages. Defaults to false.
 * @returns {number} Total middle page numbers from corrected "updates"
 */
export const fixOrderingUpdates = (data: QuizData, verbose: boolean = false): number => {
  let sum = 0

  for (let i = 0; i < data.updates.length; i += 1) {
    const isOrdered = isOrderedReport(data.rules, data.updates[i] ?? [])

    if (!isOrdered) {
      const corrected = fixOrdering(
        data.rules,
        [...data.updates[i] as number[]]
      )

      if (verbose) {
        console.log('---incorrect', data.updates[i])
        console.log('---corrected', corrected)
      }

      const middleIndex = arrayMiddleIndex(corrected)
      const item = corrected[middleIndex - 1]
      sum += item ?? 0
    }
  }

  return sum
}
