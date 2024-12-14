import path from 'path'
import { currentDirectory, readFile } from '@/utils/file.js'
import { wordCount } from './lib/wordCount.js'
import { countMASword } from './lib/xmasCount.js'

const directory = currentDirectory(import.meta.url)

const data: string[][] = readFile(path.join(directory, 'input.txt'))
  .split('\n')
  .map(row => row.split(''))

const quiz20241204_01 = () => {
  const count = wordCount(data, 'XMAS')
  console.log('"XMAS" word count:', count)
}

const quiz20241204_02 = () => {
  const count = countMASword(data, 'MAS')
  console.log('"MAS-only" word count:', count)
}

quiz20241204_01()
quiz20241204_02()
