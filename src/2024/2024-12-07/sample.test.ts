import path from 'path'
import { test, expect } from 'vitest'

import { readAOCInputFile, AOC_OUTPUT_TYPE } from '@/aoc/aocInputFile.js'
import { directory } from '@/aoc/file.js'

import { totalCalibrationResult } from './lib/totalCalibration.js'
import { totalCalibrationConcat } from './lib/totalCalibrationConcat.js'

// Read and process the input file
const input = (readAOCInputFile({
  filePath: path.join(directory(import.meta.url), 'input.txt'),
  type: AOC_OUTPUT_TYPE.STRING
}) as string)
  .split('\n')

test('1/2: Total calibration result', () => {
  expect(totalCalibrationResult(input)).toBe(295)
})

test('2/2: Total calibration result (with concat)', () => {
  expect(totalCalibrationConcat(input)).toBe(420)
})
