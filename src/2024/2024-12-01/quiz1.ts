import path from 'path'
import { readFile, currentDirectory } from '@/lib/file.js'
import { getTotalDistance } from './listTotalDistance.js'

/**
 * Part 1/2 of the 2024-12-12 quiz
 */
export const quiz20241212_01 = (): number => {
  // Read quiz input file
  const directory = currentDirectory(import.meta.url)
  const file = readFile(path.join(directory, 'input.txt'))
  const pairs: string[] = file.split('\n')

  const list1: string[] = []
  const list2: string[] = []

  pairs.forEach(item => {
    const pair = item.split('   ')

    if (pair[0] === undefined || pair[1] === undefined) {
      throw new Error('Undefined value')
    }

    list1.push(pair[0])
    list2.push(pair[1])
  })

  // Count the total distance
  const total = getTotalDistance(list1.map(Number), list2.map(Number))
  console.log('TOTAL DISTANCE:', total)

  return total
}
