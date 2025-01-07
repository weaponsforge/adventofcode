import path from 'path'
import { directory, readFile } from '@/aoc/file.js'
import { uniformArrayElements } from '@/aoc/arrays.js'

export type Rules = Record<number, number[]>

export type QuizData = {
  rules: Rules;
  updates: number[][]
}

/**
 * Reads and transforms quiz input text for processing.
 * @param fileName {string} Filename of input text relative to the calling function
 * @returns {QuizData} Formatted data
 */
export const fileReader = (fileName: string): QuizData => {
  const fir = directory(import.meta.url)
  const file = readFile(path.join(fir, '..', fileName))

  const segments = file.split('\n\n')

  if (
    segments[0] === undefined ||  // rules
    segments[1] === undefined     // updates
  ) {
    throw new Error('Undefined rules or updates data')
  }

  const rules: Rules = segments[0]
    .split('\n')
    .reduce((list: Rules, item) => {
      const pair: number[] = item.split('|').map(Number)

      if (!uniformArrayElements(pair, 'number')) {
        throw new Error('Invalid rules value')
      }

      const key = pair[0] as number

      if (list[key] === undefined) {
        list[key] = [pair[1] as number]
      } else {
        list[key].push(pair[1] as number)
      }

      return list
    }, {})

  return {
    rules,
    updates: segments[1]
      .split('\n')
      .map(item => item.split(',').map(Number))
  }
}
