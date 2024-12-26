import { Disk } from './disk.js'
import type { CompactParams, FileBlock, SpaceBlock } from './types.js'

/**
 * @class WholeDisk
 * @extends Disk
 * @inheritdoc
 * @description  Object that compacts disk character symbols representing files and spaces by moving whole (groups) of file blocks into spaces that can accommodate them.
 */
export class WholeDisk extends Disk {
  /** Structure for tracking the indices, length and availability of `SpaceBlock` disk space blocks */
  spaceBlocks = new Map<string, SpaceBlock>()

  /** Structure for tracking the indices and lengths of `FileBlock` file blocks */
  fileBlocks = new Map<string, FileBlock>()

  /**
   * Creates an instance of the `WholeDisk` class
   * @constructor
   * @param {string} diskMapText Series of numbers representing an alternating file and disk space files
   */
  constructor(diskMapText: string, printLog: boolean = false) {
    super(diskMapText)
    this.defragmentation({ printLog })
  }

  /**
   * Finds and initializes the array indices of file blocks and spaces, noting their lengths for tracking.
   * @returns {void}
   */
  findDiskBlocks (): void {
    let spaceCount = 0

    this.map.forEach((digit, index) => {
      if (digit !== '.') {
        if (!this.fileBlocks.has(digit)) {
          this.fileBlocks.set(digit, { length: 1, index })
        } else {
          this.fileBlocks.get(digit)!.length += 1
        }

        if (spaceCount > 0) {
          this.spaceBlocks.set(String(index - spaceCount), {
            length: spaceCount,
            index: index - spaceCount,
            occupied: 0
          })

          spaceCount = 0
        }
      } else {
        spaceCount += 1
      }
    })
  }

  /**
   * Moves whole file blocks from the right to the left-most free disk spaces that can contain the whole file blocks, Storing the result in the `this.compactMap[]` and returning the result.
   * @param {number} fileBlockLength Length of a `FileBlock` - number of spaces it occupies in the `this.map[]` array
   * @param {number} fileStartIndex Starting index of a `FileBlock` in the `this.map[]` array
   * @returns {number} Start array index in the `this.map[]` of a valid free space that can contain the whole length of a file block
   */
  findFreeSpaceBlock (fileBlockLength: number, fileStartIndex: number): number {
    let indexOfSpace = -1

    for (const item of this.spaceBlocks.values()) {
      if (
        // Space units already occupied with file blocks plus expected file block length is less than or equal
        // the spaces (length) it can accommodate
        item.occupied + fileBlockLength <= item.length &&
        // The max units (spaces) should be large enough to contain the file length
        item.length >= fileBlockLength &&
        // Space block's index (position in the this.map[]) array is lower than the file's starting index to avoid repitition
        item.index < fileStartIndex
      ) {
        indexOfSpace = item.index
        break
      }
    }

    return indexOfSpace
  }

  /**
   * Moves whole file blocks from the right to the left-most free disk spaces that can contain the whole files blocks,
   * Storing the result in the `this.compactMap[]` and returning the result.
   * @typedef {CompactParams} params - Parameters for input map string array.
   * @returns {string[]} Array of defragmented files and spaces blocks
   */
  defragmentation (params: CompactParams): string[] {
    const map: string[] = structuredClone(params.charMap ?? this.map)
    let logs = ''

    // Find the locations and stats of files and spaces
    this.findDiskBlocks()

    // Ascending order file IDs
    const digitKeys = Array.from(this.fileBlocks.keys())

    for (let i = digitKeys.length - 1; i >= 0; i -= 1) {
      const key = digitKeys[i]

      // Full file block
      const file = this.fileBlocks.get(String(key))

      if (file === undefined) continue

      // Find the available free disk space location that can fit the full file block
      const fileBlockLength = file.length
      const spaceIndex = this.findFreeSpaceBlock(fileBlockLength, file.index)

      const space = this.spaceBlocks.get(String(spaceIndex))
      if (space === undefined) continue

      const start = space.index + space.occupied
      const end = start + fileBlockLength

      // Move files to the free space
      for (let j = start; j < end; j += 1) {
        map[j] = String(key)
        space.occupied += 1
      }

      // Remove file trace from the old location
      for (
        let k = file.index;
        k < file.index + fileBlockLength;
        k += 1
      ) {
        map[k] = '.'
      }

      logs += this.getCompactGrid(map)
    }

    if (params?.printLog) {
      console.log(logs)
    }

    this.compactMap = map
    return map
  }
}
