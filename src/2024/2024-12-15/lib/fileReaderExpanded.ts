import type { RobotWarehouseData } from './types.js'

import { AOCOutputType, readAOCInputFile } from '@/aoc/file/aocfile.js'
import { file } from '@/aoc/file/utils.js'

/**
 * Reads and formats the day 15 - part 2 quiz input file. Expands the tile symbols by 2.
 * @param {string} fileName - Input text filename path relative to this script
 * @returns {RobotWarehouseData} Quiz input data
 */
export const fileReaderExpand = (fileName: string): RobotWarehouseData => {
  const input = readAOCInputFile({
    filePath: file(import.meta.url, fileName),
    type: AOCOutputType.STRING
  }) as string

  return input
    .split('\n\n')
    .reduce((data, item, index) => {
      // Grid
      if (index === 0) {
        return {
          ...data,
          grid: item
            .split('\n')
            .map(line => line.split(''))
            .reduce((list: string[][], tiles) => {
              const processed = tiles.reduce((subList: string[], elem) => {
                if (['.', '#'].includes(elem)) {
                  subList.push(elem, elem)
                } else if (elem === 'O') {
                  subList.push('[', ']')
                } else if (elem === '@') {
                  subList.push('@', '.')
                }

                return subList
              }, [])

              return [...list, processed]
            }, [])
        }
      }

      // Instructions
      return {
        ...data,
        instructions: item
          .split('')
          .reverse()
          .filter(direction => direction !== '\n')
      }
    }, {}) as RobotWarehouseData
}
