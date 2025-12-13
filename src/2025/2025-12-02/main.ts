import { file } from '@/aoc/file/utils.js'

import { fileReader } from './lib/fileReader.js'
import { invalidID2x, invalidIDMultiple } from './lib/invalidIds.js'

const inputFile = file(import.meta.url, 'input.txt')
const input = fileReader(inputFile)

/**
 * Part 1/2 of the 2025-12-02 quiz
 * Counts the sum of invalid IDs
 */
export const quiz20251202_01 = () => {
  const sumInvalid = invalidID2x(input)
  console.log(`Sum of invalid IDs part 1: ${sumInvalid}`)
}

export const quiz20251202_02 = () => {
  const sumInvalid = invalidIDMultiple(input)
  console.log(`Sum of invalid IDs part 2: ${sumInvalid}`)
}

quiz20251202_01()
quiz20251202_02()
