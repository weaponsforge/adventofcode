import path from 'path'
import { readFile, directory } from '@/aoc/file/utils.js'

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
  const dir = directory(import.meta.url)
  const file = readFile(path.join(dir, '..', 'input.txt'))
  const pairs: string[] = file.split('\n')

  const list1: string[] = []
  const list2: string[] = []

  // Separate columns into arrays
  pairs.forEach(item => {
    const pair = item.split('   ')

    if (pair[0] === undefined || pair[1] === undefined) {
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
