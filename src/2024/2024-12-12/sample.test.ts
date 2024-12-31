import { test, expect } from 'vitest'
import { AOC_OUTPUT_TYPE, readAOCInputFile } from '@/utils/aocInputFile.js'
import { file } from '@/utils/file.js'

import { Garden } from './lib/garden.js'

const input = readAOCInputFile({
  filePath: file(import.meta.url, 'input.txt'),
  type: AOC_OUTPUT_TYPE.STRING_ARRAY_2D
}) as string[][]

test('Number of stones after blinking:', () => {
  const garden = new Garden()
  const totalPrice = garden.calculateFencePrice(input)

  expect(totalPrice).toBe(1930)
})
