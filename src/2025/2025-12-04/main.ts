import { AOCOutputType, readAOCInputFile } from '@/aoc/file/aocfile.js'
import { file } from '@/aoc/file/utils.js'

import { accessiblePaperRolls, totalPaperRolls } from './lib/paperRolls.js'

const input = readAOCInputFile({
  filePath: file(import.meta.url, 'input-01.txt'),
  type: AOCOutputType.STRING_ARRAY_2D,
  delimiter: ''
}) as string[][]

/**
 * Part 1/2 of the 2025-12-04 quiz
 * Counts the number of paper rolls that can be accessed by fork lifts.
 */
const quiz20251204_01 = () => {
  const paperRolls = accessiblePaperRolls(input)
  console.log(`Part 1 accessible paper rolls: ${paperRolls.count}`)
}

/**
 * Part 2/2 of the 2025-12-04 quiz
 * Counts the total number of paper rolls removed by the Elves.
 */
const quiz20251204_02 = () => {
  const totalRemoved = totalPaperRolls(input)
  console.log(`Part 2 accessible paper rolls: ${totalRemoved}`)
}

quiz20251204_01()
quiz20251204_02()
