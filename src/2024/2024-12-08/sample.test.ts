import { test, expect } from 'vitest'

import { AOCOutputType, readAOCInputFile } from '@/aoc/file/aocfile.js'
import { file } from '@/aoc/file/utils.js'

import { countAntinodes } from './lib/uniqueAntinodes.js'
import { countAllAntinodes } from './lib/allAntinodes.js'

const input = readAOCInputFile({
  filePath: file(import.meta.url, 'input.txt'),
  type: AOCOutputType.STRING_ARRAY_2D
}) as string[][]

test('Antinodes in unique locations', () => {
  expect(countAntinodes(input)).toBe(14)
})

test('All antinodes in line', () => {
  expect(countAllAntinodes(input)).toBe(34)
})
