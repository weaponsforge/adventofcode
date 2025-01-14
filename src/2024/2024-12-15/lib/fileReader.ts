import type { RobotWarehouseData } from './types.js'

import { AOCOutputType, readAOCInputFile } from '@/aoc/file/aocfile.js'
import { file } from '@/aoc/file/utils.js'

/**
 * Reads and formats the day 15 quiz input file.
 * @param {string} fileName - Input text filename path relative to this script
 * @returns {RobotWarehouseData} Quiz input data
 */
export const fileReader = (fileName: string): RobotWarehouseData => {
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
