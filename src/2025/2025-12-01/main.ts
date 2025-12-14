import { decodePassword, method0x434C49434B } from './lib/decode.js'
import { fileReader } from './lib/fileReader.js'
import { file } from '@/aoc/file/utils.js'

const inputFile = file(import.meta.url, 'input-01.txt')
const input = fileReader(inputFile)

/**
 * Part 1/2 of the 2025-12-01 quiz
 * Decodes the secret password by counting the total number of times
 * the dial ends in `0` at the end of a dial rotation
 */
export const quiz20251201_01 = () => {
  const password = decodePassword(input)
  console.log(`Password is: ${password}`)
}

/**
 * Part 2/2 of the 2025-12-01 quiz
 * Decodes the secret password by counting the total number of times
 * the dial passes `0` during a dial rotation
 */
export const quiz20251201_02 = () => {
  const password = method0x434C49434B(input)
  console.log(`Method 0x434C49434B password is: ${password}`)
}

quiz20251201_01()
quiz20251201_02()
