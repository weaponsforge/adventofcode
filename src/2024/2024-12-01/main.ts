import { fileReader } from './lib/fileReader.js'
import { getTotalDistance } from './lib/listTotalDistance.js'
import { similarityScore } from './lib/similarityScore.js'

const input = fileReader()

/**
 * Part 1/2 of the 2024-12-01 quiz
 * @returns {number} total distance of items in list1 and list2
 */
export const quiz20241201_01 = (): number => {
  // Count the total distance
  const total = getTotalDistance(
    input.list1.map(Number),
    input.list2.map(Number)
  )

  console.log('TOTAL DISTANCE:', total)
  return total
}

/**
 * Part 2/2 of the 2024-12-01 quiz
 * @returns {number} similarity score of list1 with list 2
 */
export const quiz20241201_02 = (): number => {
  const similarCount = similarityScore(
    input.list1.map(Number),
    input.list2.map(Number)
  )

  console.log('SIMILARITY COUNT:', similarCount)
  return similarCount
}

quiz20241201_01()
quiz20241201_02()
