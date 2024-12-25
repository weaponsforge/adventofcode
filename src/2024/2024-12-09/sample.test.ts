import path from 'path'
import { test, expect } from 'vitest'

import { AOC_OUTPUT_TYPE, readAOCInputFile } from '@/utils/aocInputFile.js'
import { currentDirectory } from '@/utils/file.js'

import { CompactDisk } from './lib/compact.js'

const input = readAOCInputFile({
  filePath: path.join(currentDirectory(import.meta.url), 'input.txt'),
  type: AOC_OUTPUT_TYPE.STRING
}) as string

test('Compacted disk checksum', () => {
  const disk = new CompactDisk(input)
  expect(disk.calculateDiskChecksum()).toBe(1928)
})
