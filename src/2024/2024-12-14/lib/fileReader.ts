import type { RobotProperty } from './types.js'

import { AOCOutputType, readAOCInputFile } from '@/aoc/file/aocfile.js'
import { file } from '@/aoc/file/utils.js'

/**
 * Reads and formats current positions and velocities data of robots.
 * @param {string} fileName - Input file name or relative path
 * @returns {RobotProperty[]} Array of `RobotProperty[]` data
 */
export const fileReader = (fileName: string): RobotProperty[] => {
  const input = readAOCInputFile({
    filePath: file(import.meta.url, fileName),
    type: AOCOutputType.STRING
  }) as string

  return input
    .split('\n')
    .reduce((list: RobotProperty[], line) => {
      const indexPoint = line.indexOf('p=')
      const indexVelocity = line.indexOf('v=')

      const point = line.substring(indexPoint + 2, line.indexOf(' '))
      const velocity = line.substring(indexVelocity + 2, line.length)

      const [x, y] = point.split(',').map(Number)
      const [vx, vy] = velocity.split(',').map(Number)

      const robot = {
        x, y,
        velocity: { x: vx, y: vy }
      } as RobotProperty

      return [...list, robot]
    }, [])
}
