import path from 'path'
import { test, expect } from 'vitest'

import { AOC_OUTPUT_TYPE, readAOCInputFile } from '@/aoc/file/aocfile.js'
import { directory } from '@/aoc/file/utils.js'

import { countAntinodes } from './lib/uniqueAntinodes.js'
import { countAllAntinodes } from './lib/allAntinodes.js'

const input = readAOCInputFile({
  filePath: path.join(directory(import.meta.url), 'input.txt'),
  type: AOC_OUTPUT_TYPE.STRING_ARRAY_2D
}) as string[][]

test('Antinodes in unique locations', () => {
  expect(countAntinodes(input)).toBe(14)
})

test('All antinodes in line', () => {
  expect(countAllAntinodes(input)).toBe(34)
})
