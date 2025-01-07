import { test, expect } from 'vitest'
import { AOC_OUTPUT_TYPE } from '@/utils/aocInputFile.js'
import { file } from '@/utils/file.js'

import { readAOCInputFileAsync } from '@/utils/aocInputFile.js'

import { Garden } from './lib/garden.js'
import { WholesaleGarden } from './lib/wholesale.js'

const inputFiles = [
  'input.txt',
  'input2.txt',
  'input3.txt',
  'input4.txt',
  'input5.txt'
]

// Read input files
const files: Promise<string[][]>[] = []

for (let i = 0; i < inputFiles.length; i += 1) {
  files.push(readAOCInputFileAsync({
    filePath: file(import.meta.url, inputFiles[i] as string),
    type: AOC_OUTPUT_TYPE.STRING_ARRAY_2D
  }))
}

const [
  input,
  input2,
  input3,
  input4,
  input5
] = await Promise.all(files)

// Test area * perimeter per plot
test('Total fencing price', async () => {
  const garden = new Garden()

  const totalPrice = garden.calculateFencePrice(input as string[][])
  const totalPrice2 = garden.calculateFencePrice(input2 as string[][])
  const totalPrice3 = garden.calculateFencePrice(input3 as string[][])

  expect(totalPrice).toBe(140)
  expect(totalPrice2).toBe(772)
  expect(totalPrice3).toBe(1930)
})

// Test area * perimeter per region (wholesale)
test('Wholesale fencing price', async () => {
  const garden = new WholesaleGarden()

  const totalPrice = garden.calculateFencePrice(input as string[][])
  const totalPrice2 = garden.calculateFencePrice(input2 as string[][])
  const totalPrice4 = garden.calculateFencePrice(input4 as string[][])
  const totalPrice5 = garden.calculateFencePrice(input5 as string[][])

  expect(totalPrice).toBe(80)
  expect(totalPrice2).toBe(436)
  expect(totalPrice4).toBe(236)
  expect(totalPrice5).toBe(368)
})
