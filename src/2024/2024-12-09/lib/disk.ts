/**
 * @class Disk
 * @description Object that provides common disk-like utility processing methods and stores processed data.
 */
export class Disk {
  /** 1-dimensional character array conversion of a disk map string */
  protected map: string[] = []

  /** Compacted disk character array */
  protected compactMap: string[] = []

  /** Maximum number of array elements to allow printing as string in console.log() */
  maxArrayToPrintLength: number = 10000

  /**
   * Creates an instance of the `Disk` class
   * @constructor
   * @param {string} diskMapText Series of numbers representing an alternating file and disk space blocks
   */
  constructor(diskMapText: string) {
    this.createCharacterMap(diskMapText)
  }

  /**
   * Converts files and spaces disk text representation into a character map, storing it in the `this.map[]` string array
   * @param {string} diskMapText Series of numbers representing an alternating file and disk space blocks
   * @returns {string[]} Character array conversion of a disk map string
   */
  createCharacterMap (diskMapText: string): string[] {
    for (let i = 0; i < diskMapText.length; i += 1) {
      if (i % 2 === 1) {
        this.map.push(
          ...Array(Number(diskMapText[i])).fill('.')
        )
      } else {
        const itemID = i / 2

        this.map.push(
          ...Array(Number(diskMapText[i])).fill(itemID.toString())
        )
      }
    }

    return this.map
  }

  /**
   * Calculates the checksum of fragmented or defragmented disk files and spaces text map
   * @param {string[]} [compactFileText] (Optional) Compacted disk map resulting from the `this.defragmentation()` function. Processes the local `this.compactMap[]` data if parameter is not provided.
   * @returns {number} Check sum - sum of file block IDs multiplied with their positions
   */
  calculateDiskChecksum (compactFileText?: string[]): number {
    return (compactFileText || this.compactMap)
      .reduce((sum, item, index) => {
        if (item === '.') return sum
        return sum + Number(item) * index
      }, 0)
  }

  /**
   * Joins the `this.map[]` disk and spaces character array into a string format if it is less than `this.maxArrayToPrintLength`
   * @param {string} [map] (Optional) Character string array similar to `this.map[]`. Uses the `this.map[]` array by default.
   * @returns {string} linear string/text version of the `this.map[]` character array
   */
  getGrid (map?: string[]): string {
    if (map?.length ?? this.map.length <= this.maxArrayToPrintLength) {
      return (map ?? this.map).join('') + '\n'
    }

    return ''
  }

  /**
   * Joins the `this.compactMap[]` "compact" disk and spaces character array into a string format if it is less than `this.maxArrayToPrintLength`
   * @param {string} [map] (Optional) Character string array similar to `this.map[]`. Uses the `this.compactMap[]` array by default.
   * @returns {string} linear string/text version of the `this.compactMap[]` character array
   */
  getCompactGrid (map?: string[]): string {
    if ((map?.length ?? this.compactMap.length) <= this.maxArrayToPrintLength) {
      return (map ?? this.compactMap).join('') + '\n'
    }

    return ''
  }
}
