import { AOC_OUTPUT_TYPE, readAOCInputFile } from '@/utils/aocInputFile.js'
import { file } from '@/utils/file.js'

import { Garden } from './lib/garden.js'

const input = readAOCInputFile({
  filePath: file(import.meta.url, 'input.txt'),
  type: AOC_OUTPUT_TYPE.STRING_ARRAY_2D
}) as string[][]

const quiz20241231_01 = () => {
  const garden = new Garden()
  const totalPrice = garden.calculateFencePrice(input)
  console.log('---Total fencing price', totalPrice)
}

quiz20241231_01()
