import { AOC_OUTPUT_TYPE, readAOCInputFile } from '@/aoc/file/aocfile.js'
import { file } from '@/aoc/file/utils.js'

import { guardController } from './lib/guardController.js'
import { findObstructionPositions } from './lib/guardControllerLoop.js'

const input = readAOCInputFile({
  filePath: file(import.meta.url, 'input.txt'),
  type: AOC_OUTPUT_TYPE.STRING_ARRAY_2D
}) as string [][]

/**
 * Part 1/2 of the 2024-12-06 quiz
 * Counts the number of distinct guard positions in a grid
 */
export const quiz20241206_01 = () => {
  const grid = guardController(input, true)

  console.log('Distinct guard positions:', grid.positionCount)
  return grid.positionCount
}

/**
 * Part 2/2 of the 2024-12-06 quiz
 * Counts the number of positions in the Grid in which placing an
 *  obstacle will cause the Guard to walk in an infinite loop
 */
export const quiz20241206_02 = () => {
  const infinitePositions = findObstructionPositions(input)

  console.log('Obstruction positions for infinite walk:', infinitePositions)
  return infinitePositions
}

quiz20241206_01()
quiz20241206_02()
