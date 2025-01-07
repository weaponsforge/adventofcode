import path from 'path'
import { directory, readFile } from '@/aoc/file.js'
import { extractMultiply, extractMultiplyCondition } from './lib/extractMultiply.js'

const dir = directory(import.meta.url)
const input = readFile(path.join(dir, 'input.txt'))

/**
 * Part 1/2 of the 2024-12-03 quiz
 * @returns {number} Sum of "mul(x,y)" strings from long text
 */
export const quiz20241203_01 = (): number => {
  const sumMultiply = extractMultiply(input)

  console.log('MULTIPLICATION RESULTS:', sumMultiply)
  return sumMultiply
}

/**
 * Part 2/2 of the 2024-12-03 quiz
 * @returns {number} Sum of "mul(x,y)" strings with conditions from long text
 */
export const quiz20241203_02 = (): number => {
  const sumMultiply = extractMultiplyCondition(input)

  console.log('MULTIPLICATION WITH CONDITION:', sumMultiply)
  return sumMultiply
}

quiz20241203_01()
quiz20241203_02()
