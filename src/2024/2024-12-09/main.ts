import { AOCOutputType, readAOCInputFile } from '@/aoc/file/aocfile.js'
import { file } from '@/aoc/file/utils.js'

import { CompactDisk } from './lib/compact.js'
import { WholeDisk } from './lib/whole.js'

const input = readAOCInputFile({
  filePath: file(import.meta.url, 'input.txt'),
  type: AOCOutputType.STRING
}) as string

/**
 * Part 1/2 of the 2024-12-09 quiz
 * Counts the check sum of a compacted disk represented by strings of text
 */
export const quiz20241209_01 = () => {
  const disk = new CompactDisk(input, true)
  const sum = disk.calculateDiskChecksum()

  console.log('Compacted disk checksum:', sum)
}

/**
 * Part 2/2 of the 2024-12-09 quiz
 * Counts the check sum of a defragment disk whose file blocks were moved to empty spaces as whole blocks
 */
export const quiz20241209_02 = () => {
  const disk = new WholeDisk(input, true)
  const sum = disk.calculateDiskChecksum()

  console.log('Disk - whole file blocks checksum:', sum)
}

quiz20241209_01()
quiz20241209_02()
