import { Disk } from './disk.js'

interface CompactParams {
  charMap?: string[];
  printLog? : boolean;
}

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
   */
  constructor(diskMapText: string, printLog: boolean = false) {
    super(diskMapText)
    this.compactFileDisk({ printLog })
  }

  /**
   * Moves file blocks one character at a time from the right to the left-most free disk spaces of a disk character map.
   * @param {string[]} [charMap] (Optional) Character mapping conversion of a disk map. Processes the local `this.map[]` if parameter is not provided.
   * @param {boolean} printLog Flag to display the step-by-step file movement on screen. Defaults to `false`
   * @returns {string} Compacted disk character array
   */
  compactFileDisk (params: CompactParams): string[] {
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
        logs += map.join('') + '\n'
      }

      if (dotIndex !== -1) {
        map[dotIndex] = map[charIndex] ?? '.'
        map[charIndex] = '.'
      }

      charIndex -= 1
    }

    if (params?.printLog) {
      logs += map.join('')
      console.log(logs)
    }

    this.compactMap = map
    return map
  }
}
