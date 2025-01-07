import { AOC_OUTPUT_TYPE, readAOCInputFile } from '@/aoc/file/aocfile.js'
import { file } from '@/aoc/file/utils.js'

import { Garden } from './lib/garden.js'
import { WholesaleGarden } from './lib/wholesale.js'

const input = readAOCInputFile({
  filePath: file(import.meta.url, 'input.txt'),
  type: AOC_OUTPUT_TYPE.STRING_ARRAY_2D
}) as string[][]

/**
 * Part 1/2 of the 2024-12-12 quiz
 * Counts the total fencing price: area * perimeter per plot
 */
const quiz20241212_01 = () => {
  const garden = new Garden()
  const totalPrice = garden.calculateFencePrice(input, true)

  console.log('---Total fencing price', totalPrice)
}

/**
 * Part 2/2 of the 2024-12-12 quiz
 * Counts the wholesale fencing price: area * perimeter of whole region (edges)
 */
const quiz20241212_02 = () => {
  const garden = new WholesaleGarden()
  const totalPrice = garden.calculateFencePrice(input, true)

  console.log('---Wholesale fencing price', totalPrice)
}

quiz20241212_01()
quiz20241212_02()
