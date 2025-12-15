import { file } from '@/aoc/file/utils.js'
import { fileReader, fileReaderRTL } from './lib/fileReader.js'
import { additionMultiplication, cephalopodMath } from './lib/solveMath.js'

const input = fileReader(file(import.meta.url, 'input.txt'))
const input2 = fileReaderRTL(file(import.meta.url, 'input.txt'))

/**
 * Part 1/2 of the 2025-12-06 quiz.
 * Calculates the grand total of each vertical column operation.
 */
const quiz20251206_01 = () => {
  const grandTotal = additionMultiplication(input)
  console.log(`Part 1 Grand total: ${grandTotal}`)
}

/**
 * Part 2/2 of the 2025-12-06 quiz.
 * Calculates the grand total of each vertical column, reading from
 * top to bottom and left to right per column assigned to an operation.
 */
const quiz20251206_02 = () => {
  const grandTotal = cephalopodMath(input2)
  console.log(`Part 2 Grand total: ${grandTotal}`)
}


quiz20251206_01()
quiz20251206_02()
