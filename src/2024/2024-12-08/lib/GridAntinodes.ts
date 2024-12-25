import type { Antenna } from './types.js'

/**
 * @class GridAntiNodes
 * @description Object that tracks `Antennas` and `Antinodes` in a 2D grid array
 */
export class GridAntiNodes {
  /** 2D string user input array */
  board: string[][] = []

  /** Array containing Antenna (x,y) coordinates */
  antennas: Antenna[] = []

  /** List of unique Antinode (x,y) coordinates */
  antinodes = new Set()

  /** Array indices used in traversing the board and antennas objects */
  currentAntIndex: number = 0
  nextAntIndex: number = 1

  /**
   * Creates an instance of the `GridAntiNodes` class
   * @constructor
   * @param {string[][]} inputFile 2D string array containing grid paths and `Antennas`
   */
  constructor(inputFile: string[][]) {
    this.board = inputFile
    this.findAntennas()
  }

  /**
   * Finds and stores the (x,y) coordinates of valid `Antennas`
   * from the 2D string array into the `this.antennas[]` array
   */
  findAntennas (): void {
    for (let row = 0; row < this.board.length; row += 1) {
      const indices: Antenna[] = this.board[row]!.reduce((list: Antenna[], item, index) => {
        if (item.match(/^[A-Za-z0-9]+$/g)) {
          this.board[row]![index] = item

          return [
            ...list, { frequency: item, x: index, y: row }
          ]
        }

        return list
      }, [])

      this.antennas = [...this.antennas, ...indices]
    }
  }

  /**
   * Increments the index counters used in traversing the `Antinodes` list
   */
  incrementCursors (): void {
    if (this.nextAntIndex === this.antennas.length - 1) {
      this.currentAntIndex += 1
      this.nextAntIndex = this.currentAntIndex + 1
    } else {
      this.nextAntIndex += 1
    }
  }

  /**
   * Resets the index counters used in traversing the `Antinodes` list
   */
  resetCursors (): void {
    this.currentAntIndex = 0
    this.nextAntIndex = 1
  }

  /**
   * Stores the (x,y) coordinates of an `Antinode`
   * @param {string} antinodeCoord String-concatenated (x,y) coordinate of an `Antinode`
   */
  storeAntinode (antinodeCoord: string): void {
    this.antinodes.add(antinodeCoord)
  }

  /**
   * Prints the 2D grid (board) to the screen
   * @param {boolean} withAntinodes Flag to display the `Antinodes` in the grid
   */
  printGrid (withAntinodes: boolean = false): void {
    if (withAntinodes) {
      const printBoard = structuredClone(this.board)

      for (const antinode of this.antinodes) {
        const coord = (antinode as string).split(',').map(item => Number(item))
        const character = this.board[coord[0] as number]![coord[1] as number]

        if (character === '.') {
          printBoard[coord[0] as number]![coord[1] as number] = '#'
        }
      }

      console.log(printBoard.map(row => row.join(' ')))
    } else {
      console.log(this.board.map(row => row.join(' ')))
    }
  }
}
