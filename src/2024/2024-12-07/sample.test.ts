import path from 'path'
import { test, expect } from 'vitest'

import { readAOCInputFile, AOC_OUTPUT_TYPE } from '@/utils/aocInputFile.js'
import { currentDirectory } from '@/utils/file.js'

import { totalCalibrationResult } from './lib/totalCalibration.js'

// Read and process the input file
const input = (readAOCInputFile({
  filePath: path.join(currentDirectory(import.meta.url), 'input.txt'),
  type: AOC_OUTPUT_TYPE.STRING
}) as string)
  .split('\n')

test('1/2: Total calibration result', () => {
  expect(totalCalibrationResult(input)).toBe(3749)
})
