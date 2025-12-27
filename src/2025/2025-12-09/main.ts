import { AOCOutputType, readAOCInputFile } from '@/aoc/file/aocfile.js'
import { file } from '@/aoc/file/utils.js'
import { findMaxRectangleArea } from './lib/rectangles.js'

const input = readAOCInputFile({
  filePath: file(import.meta.url, 'input.txt'),
  type: AOCOutputType.NUMBER_ARRAY_2D,
  delimiter: ','
}) as number[][]

/**
 * Part 1/2 of the 2025-12-09 quiz.
 * Calculates the maximum area that could be formed by 2 red tiles.
 */
const quiz20251209_01 = () => {
  const maxArea = findMaxRectangleArea(input)
  console.log(`Part 1 largest rectangle area: ${maxArea}`)
}

quiz20251209_01()
