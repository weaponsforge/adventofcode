import path from 'path'
import { AOC_OUTPUT_TYPE, readAOCInputFile } from '@/utils/aocInputFile.js'
import { currentDirectory } from '@/utils/file.js'

import { totalCalibrationResult } from './lib/totalCalibration.js'

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
const quiz20241221_01 = () => {
  totalCalibrationResult(input)
}

quiz20241221_01()
