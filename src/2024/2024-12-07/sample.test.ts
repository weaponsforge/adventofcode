import { test, expect } from 'vitest'

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

test('1/2: Total calibration result', () => {
  expect(totalCalibrationResult(input)).toBe(295)
})

test('2/2: Total calibration result (with concat)', () => {
  expect(totalCalibrationConcat(input)).toBe(420)
})
