import path from 'path'
import { readFile, currentDirectory } from '@/utils/file.js'

export type arrayLists = {
  list1: string[];
  list2: string[];
}

/**
 * Reads the quiz's input file into two (2) string arrays
 * @returns {arrayLists} An object containing two (2) string arrays: `{ list1, list2 }`
 */
export const fileReader = (): arrayLists => {
  // Read quiz input file
  const directory = currentDirectory(import.meta.url)
  const file = readFile(path.join(directory, '..', 'input.txt'))
  const pairs: string[] = file.split('\n')

  const list1: string[] = []
  const list2: string[] = []

  // Separate columns into arrays
  pairs.forEach(item => {
    const pair = item.split('   ')

    if (pair[0] === undefined || pair[1] === undefined) {
      console.log(pair)
      throw new Error('Undefined value')
    }

    list1.push(pair[0])
    list2.push(pair[1])
  })

  return {
    list1,
    list2
  }
}
