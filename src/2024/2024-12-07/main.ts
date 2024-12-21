import path from 'path'
import { AOC_OUTPUT_TYPE, readAOCInputFile } from '@/utils/aocInputFile.js'
import { currentDirectory } from '@/utils/file.js'

import { totalCalibrationResult } from './lib/totalCalibration.js'
import { totalCalibrationConcat } from './lib/totalCalibrationConcat.js'

// Read and process the input file
const input = (readAOCInputFile({
  filePath: path.join(currentDirectory(import.meta.url), 'input.txt'),
  type: AOC_OUTPUT_TYPE.STRING
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
