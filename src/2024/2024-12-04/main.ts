import path from 'path'
import { directory, readFile } from '@/aoc/file/utils.js'
import { wordCount } from './lib/wordCount.js'
import { countMASword } from './lib/xmasCount.js'

const dir = directory(import.meta.url)

const data: string[][] = readFile(path.join(dir, 'input.txt'))
  .split('\n')
  .map(row => row.split(''))

/**
 * Part 1/2 of the 2024-12-04 quiz
 * @returns {number} Counts the number of "XMAS" words
 */
const quiz20241204_01 = () => {
  const count = wordCount(data, 'XMAS')
  console.log('"XMAS" word count:', count)
}

/**
 * Part 2/2 of the 2024-12-04 quiz
 * @returns {number} Counts the number of overlapping "MAS" words
 */
const quiz20241204_02 = () => {
  const count = countMASword(data, 'MAS')
  console.log('"MAS-only" word count:', count)
}

quiz20241204_01()
quiz20241204_02()
