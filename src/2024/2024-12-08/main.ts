import path from 'path'
import { AOC_OUTPUT_TYPE, readAOCInputFile } from '@/utils/aocInputFile.js'
import { currentDirectory } from '@/utils/file.js'

import { countAntinodes } from './lib/uniqueAntinodes.js'

const input = readAOCInputFile({
  filePath: path.join(currentDirectory(import.meta.url), 'input.txt'),
  type: AOC_OUTPUT_TYPE.STRING_ARRAY_2D
}) as string[][]

/**
 * Part 1/2 of the 2024-12-08 quiz
 * Counts the unique locations in the grid that contains an antinode
 */
const quiz20241208_01 = () => {
  const count = countAntinodes(input)
  console.log('Antinodes in unique locations:', count)
}

quiz20241208_01()
