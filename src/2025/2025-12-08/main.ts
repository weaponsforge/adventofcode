import { file } from '@/aoc/file/utils.js'

import { singleCircuit, threeLargestCircuits } from './lib/distance3d.js'
import { fileReader } from './lib/fileReader.js'

const input = fileReader(file(import.meta.url, 'input-01.txt'))
const numConnections = 10

/**
 * Part 1/2 of the 2025-12-08 quiz.
 * Calculates the product of the sizes of the 3 largest circuits.
 */
const  quiz20251208_01 = () => {
  const value = threeLargestCircuits(input, numConnections)
  console.log(`Part 1 multiply (3) largest cicruits: ${value}`)
}

/**
 * Part 2/2 of the 2025-12-08 quiz.
 * Connects all junction boxes to form a single circuit and
 * calculates the distance to the wall using the product of
 * the x-coordinates of relevant 3D points.
 */
const  quiz20251208_02 = () => {
  const value = singleCircuit(input)
  console.log(`Part 2 single cicruits: ${value}`)
}

quiz20251208_01()
quiz20251208_02()
