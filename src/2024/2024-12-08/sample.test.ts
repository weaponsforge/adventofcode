import path from 'path'
import { test, expect } from 'vitest'

import { AOC_OUTPUT_TYPE, readAOCInputFile } from '@/utils/aocInputFile.js'
import { currentDirectory } from '@/utils/file.js'

import { countAntinodes } from './lib/uniqueAntinodes.js'

const input = readAOCInputFile({
  filePath: path.join(currentDirectory(import.meta.url), 'input.txt'),
  type: AOC_OUTPUT_TYPE.STRING_ARRAY_2D
}) as string[][]

test('Antinodes in unique locations', () => {
  expect(countAntinodes(input)).toBe(14)
})
