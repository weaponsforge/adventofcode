import { Disk } from './disk.js'

/**
 * @class CompactDisk
 * @extends Disk
 * @inheritdoc
 * @description Object that compacts disk character symbols represeting file and space blocks from the right to the left-most free disk spaces
 */
export class CompactDisk extends Disk {
  /**
   * Creates an instance of the `CompactDisk` class
   * @constructor
   * @param {string} diskMapText Series of numbers representing an alternating file and disk space blocks
   */
  constructor(diskMapText: string) {
    super(diskMapText)
    this.compactFileDisk()
  }

  /**
   * Moves file blocks one character at a time from the right to the left-most free disk spaces of a disk character map.
   * @param {string[]} [charMap] (Optional) Character mapping conversion of a disk map. Processes the local `this.map[]` if parameter is not provided.
   * @returns {string} Compacted disk character array
   */
  compactFileDisk (charMap?: string[]): string[] {
    const map: string[] = [...(charMap ?? this.map)]
    let charIndex = map.length - 1

    // Total number of file (non-space) blocks
    const filesCount = map.reduce(
      (sum, item) => Number(item) >= 0
        ? sum += 1
        : sum,
      0
    )

    while (charIndex >= filesCount) {
      const dotIndex = map.indexOf('.')

      if (dotIndex !== -1) {
        map[dotIndex] = map[charIndex] ?? '.'
        map[charIndex] = '.'
      }

      charIndex -= 1
    }

    this.compactMap = map
    return map
  }
}
