import { file } from '@/aoc/file/utils.js'
import { fileReader } from './lib/fileReader.js'
import { additionMultiplication } from './lib/solveMath.js'

const input = fileReader(file(import.meta.url, 'input.txt'))

/**
 * Part 1/2 of the 2025-12-06 quiz.
 * Calculates the grand total of each vertical column operation.
 */
const quiz20251206_01 = () => {
  const grandTotal = additionMultiplication(input)
  console.log(`Part 1 Grand total: ${grandTotal}`)
}

quiz20251206_01()
