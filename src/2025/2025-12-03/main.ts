import { AOCOutputType, readAOCInputFile } from '@/aoc/file/aocfile.js'
import { file } from '@/aoc/file/utils.js'
import { findMaxJoltage } from './lib/maxJoltage.js'

const input = readAOCInputFile({
  filePath: file(import.meta.url, 'input.txt'),
  type: AOCOutputType.STRING_ARRAY,
  delimiter: '\n'
}) as string[]

/**
 * Part 1/2 of the 2025-12-03 quiz
 * Counts the total maximum joltage per bank
 */
export const quiz20251203_01 = () => {
  const joltage = findMaxJoltage(input)
  console.log(`Total maximum joltage part 1: ${joltage}`)
}

quiz20251203_01()
