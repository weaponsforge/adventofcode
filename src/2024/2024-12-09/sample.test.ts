import path from 'path'
import { test, expect } from 'vitest'

import { AOC_OUTPUT_TYPE, readAOCInputFile } from '@/utils/aocInputFile.js'
import { directory } from '@/utils/file.js'

import { CompactDisk } from './lib/compact.js'
import { WholeDisk } from './lib/whole.js'

const input = readAOCInputFile({
  filePath: path.join(directory(import.meta.url), 'input.txt'),
  type: AOC_OUTPUT_TYPE.STRING
}) as string

test('Defragmented disk checksum', () => {
  const disk = new CompactDisk(input)
  expect(disk.calculateDiskChecksum()).toBe(967)
})

test('Defragmented disk - (move whole file blocks) checksum', () => {
  const disk = new WholeDisk(input)
  expect(disk.calculateDiskChecksum()).toBe(1440)
})
