import { AOC_OUTPUT_TYPE, readAOCInputFile } from '@/aoc/file/aocfile.js'
import { file } from '@/aoc/file/utils.js'

import { countAntinodes } from './lib/uniqueAntinodes.js'
import { countAllAntinodes } from './lib/allAntinodes.js'

const input = readAOCInputFile({
  filePath: file(import.meta.url, 'input.txt'),
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

/**
 * Part 2/2 of the 2024-12-08 quiz
 * Counts the unique locations in the grid of all antinodes that contains an antinode
 */
const quiz20241208_02 = () => {
  const count = countAllAntinodes(input)
  console.log('All Antinodes count:', count)
}

quiz20241208_01()
quiz20241208_02()
