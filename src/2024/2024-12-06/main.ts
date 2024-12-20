import path from 'path'
import { readAOCInputFile, AOC_OUTPUT_TYPE } from '@/utils/aocInputFile.js'
import { currentDirectory } from '@/utils/file.js'

import { guardController } from './lib/guardController.js'

const file = readAOCInputFile({
  filePath: path.join(currentDirectory(import.meta.url), 'input.txt'),
  type: AOC_OUTPUT_TYPE.STRING_ARRAY_2D
}) as string [][]

/**
 * Part 1/2 of the 2024-12-06 quiz
 * Counts the number of distinct guard positions in a grid
 */
export const quiz20241206_01 = () => {
  const grid = guardController(file, true)

  console.log('Distinct guard positions:', grid.positionCount)
  return grid.positionCount
}

quiz20241206_01()
