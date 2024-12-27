import path from 'path'
import { readFile, directory } from '@/utils/file.js'

/**
 * Reads the quiz's input file into two (2) string arrays
 * @returns {arrayLists} An object containing two (2) string arrays: `{ list1, list2 }`
 */
export const fileReader = (): number[][] => {
  // Read quiz input file
  const dir = directory(import.meta.url)
  const file = readFile(path.join(dir, '..', 'input.txt'))

  return file
    .split('\n')
    .map(row => row.split(' ').map(Number))
}
