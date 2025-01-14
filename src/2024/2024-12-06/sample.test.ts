import { test, expect } from 'vitest'

import { AOCOutputType, readAOCInputFile } from '@/aoc/file/aocfile.js'
import { file } from '@/aoc/file/utils.js'

import { guardController } from './lib/guardController.js'
import { findObstructionPositions } from './lib/guardControllerLoop.js'

const input = readAOCInputFile({
  filePath: file(import.meta.url, 'input.txt'),
  type: AOCOutputType.STRING_ARRAY_2D
}) as string [][]

test('Count distinct guard positions', () => {
  expect(guardController(input).positionCount).toBe(26)
})

test('Count obstacle positions', () => {
  expect(findObstructionPositions(input)).toBe(2)
})
