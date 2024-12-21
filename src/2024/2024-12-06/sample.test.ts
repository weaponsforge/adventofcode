import path from 'path'
import { test, expect } from 'vitest'

import { readAOCInputFile, AOC_OUTPUT_TYPE } from '@/utils/aocInputFile.js'
import { currentDirectory } from '@/utils/file.js'

import { guardController } from './lib/guardController.js'
import { findObstructionPositions } from './lib/guardControllerLoop.js'

const file = readAOCInputFile({
  filePath: path.join(currentDirectory(import.meta.url), 'input.txt'),
  type: AOC_OUTPUT_TYPE.STRING_ARRAY_2D
}) as string [][]

test('Count distinct guard positions', () => {
  expect(guardController(file).positionCount).toBe(26)
})

test('Count obstacle positions', () => {
  expect(findObstructionPositions(file)).toBe(2)
})
