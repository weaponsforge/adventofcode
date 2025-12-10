import { decodePassword } from './lib/decode.js'
import { fileReader } from './lib/fileReader.js'
import { file } from '@/aoc/file/utils.js'

const inputFile = file(import.meta.url, 'input.txt')
const input = fileReader(inputFile)

/**
 * Part 1/2 of the 2025-12-01 quiz
 * Decodes the secret password by counting the total number of times
 * the dial passes 0 during rotations
 */
export const quiz20251201_01 = () => {
  const password = decodePassword(input)
  console.log(`Password is: ${password}`)
}

quiz20251201_01()
