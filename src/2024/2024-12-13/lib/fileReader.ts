import type { MatrixData } from './types.js'

import { AOCOutputType, readAOCInputFile } from '@/aoc/file/aocfile.js'
import { file } from '@/aoc/file/utils.js'

/**
 * Reads and formats the quiz input data.
 * @param {string} fileName - Input file name or relative path
 * @returns {MatrixData} Object containing 2D number matrices
 */
export const fileReader = (fileName: string): MatrixData<number[]> => {
  const input = readAOCInputFile({
    filePath: file(import.meta.url, fileName),
    type: AOCOutputType.STRING
  }) as string

  return input
    .split('\n\n')
    .reduce((list: MatrixData<number[]>, block, id) => {
      const row = block.split('\n')
      const eq1: number[] = []
      const eq2: number[]  = []

      row.forEach((item, index) => {
        const sign = index === row.length - 1 ? '=' : '+'
        const xIndex = item.indexOf(`X${sign}`)
        const yIndex = item.indexOf(`Y${sign}`)

        const x = item.substring(xIndex + 2, item.indexOf(','))
        const y = item.substring(yIndex + 2, item.length)

        eq1.push(Number(x))
        eq2.push(Number(y))
      })

      list[id] = [eq1, eq2]
      return list
    }, {})
}
