import path from 'path'

import { AOC_OUTPUT_TYPE, readAOCInputFile } from '@/utils/aocInputFile.js'
import { currentDirectory } from '@/utils/file.js'

import { CompactDisk } from './lib/compact.js'

const input = readAOCInputFile({
  filePath: path.join(currentDirectory(import.meta.url), 'input.txt'),
  type: AOC_OUTPUT_TYPE.STRING
}) as string

/**
 * Part 1/2 of the 2024-12-09 quiz
 * Counts the check sum of a compacted disk represented by strings of text
 */
export const quiz20241209_01 = () => {
  const disk = new CompactDisk(input)
  const sum = disk.calculateDiskChecksum()

  console.log('Compacted disk checksum:', sum)
}

quiz20241209_01()
