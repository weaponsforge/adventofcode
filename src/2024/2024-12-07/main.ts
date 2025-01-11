import { AOCOutputType, readAOCInputFile } from '@/aoc/file/aocfile.js'
import { file } from '@/aoc/file/utils.js'

import { totalCalibrationResult } from './lib/totalCalibration.js'
import { totalCalibrationConcat } from './lib/totalCalibrationConcat.js'

// Read and process the input file
const input = (readAOCInputFile({
  filePath: file(import.meta.url, 'input.txt'),
  type: AOCOutputType.STRING
}) as string)
  .split('\n')

/**
 * Part 1/2 of the 2024-12-07 quiz
 * Counts the total calibration result of the input data
 */
const quiz20241207_01 = () => {
  const total = totalCalibrationResult(input)
  console.log('Calibration total:', total)
}

/**
 * Part 2/2 of the 2024-12-07 quiz
 * Counts the total calibration result of the input data including
 * "concatenated" numbers
 */
const quiz20241207_02 = () => {
  const total = totalCalibrationConcat(input)
  console.log('Calibration total (with concat):', total)
}

quiz20241207_01()
quiz20241207_02()
