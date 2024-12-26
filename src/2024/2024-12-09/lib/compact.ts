import { Disk } from './disk.js'
import type { CompactParams } from './types.js'

/**
 * @class CompactDisk
 * @extends Disk
 * @inheritdoc
 * @description Object that compacts disk character symbols representing file and space blocks from the right to the left-most free disk spaces
 */
export class CompactDisk extends Disk {
  /**
   * Creates an instance of the `CompactDisk` class
   * @constructor
   * @param {string} diskMapText Series of numbers representing an alternating file and disk space blocks
   * @param {boolean} printLog Flag to display the step-by-step file movement on screen. Defaults to `false`
   */
  constructor(diskMapText: string, printLog: boolean = false) {
    super(diskMapText)
    this.defragmentation({ printLog })
  }

  /**
   * Moves file blocks one character at a time from the right to the left-most free disk spaces of
   * a disk character map, storing the result in the `this.compactMap[]` and returning the result.
   * @param {CompactParams} params - Parameters for input map string array.
   * @returns {string[]} Array of defragmented files and spaces blocks
   */
  defragmentation (params: CompactParams): string[] {
    const map: string[] = [...(params?.charMap || this.map)]

    let charIndex = map.length - 1
    let logs = ''

    // Total number of file (non-space) blocks
    const filesCount = map.reduce(
      (sum, item) => Number(item) >= 0
        ? sum += 1
        : sum,
      0
    )

    while (charIndex >= filesCount) {
      const dotIndex = map.indexOf('.')

      if (params?.printLog) {
        logs += this.getGrid(map)
      }

      // Swap file and space locations one unit at a time
      if (dotIndex !== -1) {
        map[dotIndex] = map[charIndex] ?? '.'
        map[charIndex] = '.'
      }

      charIndex -= 1
    }

    if (params?.printLog) {
      logs += this.getGrid(map)
      console.log(logs)
    }

    this.compactMap = map
    return map
  }
}
