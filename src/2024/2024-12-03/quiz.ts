import path from 'path'
import { currentDirectory, readFile } from '@/utils/file.js'
import { extractMultiply } from './lib/extractMultiply.js'

const directory = currentDirectory(import.meta.url)
const input = readFile(path.join(directory, 'input.txt'))

/**
 * Part 1/2 of the 2024-12-03 quiz
 * @returns {number} Sum of "mul(x,y)" strings from long text
 */
export const quiz20241203_01 = (): number => {
  const sumMultiply = extractMultiply(input)

  console.log('MULTIPLICATION RESULTS:', sumMultiply)
  return sumMultiply
}
