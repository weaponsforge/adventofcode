import path from 'path'
import { readFile, currentDirectory } from '@/utils/file.js'

/**
 * Reads the quiz's input file into two (2) string arrays
 * @returns {arrayLists} An object containing two (2) string arrays: `{ list1, list2 }`
 */
export const fileReader = (): number[][] => {
  // Read quiz input file
  const directory = currentDirectory(import.meta.url)
  const file = readFile(path.join(directory, '..', 'input.txt'))

  return file
    .split('\n')
    .map(row => row.split(' ').map(Number))
}
