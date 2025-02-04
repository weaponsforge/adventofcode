import { test, expect } from 'vitest'

import { AOCOutputType, readAOCInputFile } from '@/aoc/file/aocfile.js'
import { file } from '@/aoc/file/utils.js'

import { CompactDisk } from './lib/compact.js'
import { WholeDisk } from './lib/whole.js'

const input = readAOCInputFile({
  filePath: file(import.meta.url, 'input.txt'),
  type: AOCOutputType.STRING
}) as string

test('Defragmented disk checksum', () => {
  const disk = new CompactDisk(input)
  expect(disk.calculateDiskChecksum()).toBe(967)
})

test('Defragmented disk - (move whole file blocks) checksum', () => {
  const disk = new WholeDisk(input)
  expect(disk.calculateDiskChecksum()).toBe(1440)
})
