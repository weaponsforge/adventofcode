import { file } from '@/aoc/file/utils.js'

import { threeLargestCircuits } from './lib/distance3d.js'
import { fileReader } from './lib/fileReader.js'

const input = fileReader(file(import.meta.url, 'input.txt'))
const numConnections = 10

/**
 * Part 1/2 of the 2025-12-08 quiz.
 * Multiplies the sizes of the 3 largest circuits.
 */
const  quiz20251208_01 = () => {
  const value = threeLargestCircuits(input, numConnections)
  console.log(`Part 1 multiply (3) largest cicruits: ${value}`)
}

quiz20251208_01()
