/**
 * @class Disk
 * @description Object that provides common disk-like utility processing methods and stores processed data
 */
export class Disk {
  /** Character map conversion of a disk map string */
  map: string[] = []

  /** Compacted disk character array */
  compactMap: string[] = []

  /**
   * Creates an instance of the `Disk` class
   * @constructor
   * @param {string} diskMapText Series of numbers representing an alternating file and disk space blocks
   */
  constructor(diskMapText: string) {
    this.createCharacterMap(diskMapText)
  }

  /**
   * Converts a disk map text into a character map, storing it in the `this.map[]` string array
   * @param {string} diskMapText Series of numbers representing an alternating file and disk space blocks
   * @returns {string[]} Character map conversion of a disk map string
   */
  createCharacterMap (diskMapText: string): string[] {
    const characters: string[] = []

    for (let i = 0; i < diskMapText.length; i += 1) {
      if ((i + 1) % 2 === 0) {
        characters.push(
          ...Array(Number(diskMapText[i])).fill('.')
        )
      } else {
        const itemID = i / 2
        characters.push(
          ...Array(Number(diskMapText[i])).fill(itemID.toString())
        )
      }
    }

    this.map = characters
    return characters
  }

  /**
   * Calculates the check sum of a compacted disk files and spaces text map
   * @param {string[]} [compactFileText] (Optional) Compacted disk map resulting from the `this.compactFileDisk()` function. Processes the local `this.compactMap[]` data if parameter is not provided.
   * @returns {number} Check sum - sum of file block IDs multiplied with their positions
   */
  calculateDiskChecksum (compactFileText?: string[]): number {
    return (compactFileText || this.compactMap)
      .reduce((sum, item, index) => {
        if (item === '.') return sum
        return sum + Number(item) * index
      }, 0)
  }
}
