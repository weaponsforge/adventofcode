import { arrayToObject, isEvenDigits, halfDigit } from './utils.js'

/**
 * @class Blinker
 * @description A class that counts the number of transformed and new stones after blinking.
 */
export class Blinker {
  /** Stone numbers tracking storage at each blink */
  numberStorage: Record<number, number> = {}

  /** Total number of stones after the last blink */
  stoneCount: number = 0

  /**
   * Stores a number in the `this.numberStorage` object as a key with value.
   * @param {number} stoneNum - Number to store in an Object data
   * @param {number} value - Number value associated with the `stoneNum` number key
   * @returns {void}
   */
  store (stoneNum: number, value: number = 1): void {
    if (this.numberStorage[stoneNum] === undefined) {
      this.numberStorage[stoneNum] = value
    } else {
      this.numberStorage[stoneNum] += value
    }
  }

  /**
   * Simulates the quiz's "blink" and stones morphing.
   * Calculates the number of transformed stones after blinking `blinkTimes`
   * @param {number[]} stones - Array of numbers (stones)
   * @param {number} blinkTimes - Number of times to simulate "blinking"
   * @returns {number} Total number of transformed stones after blinking
   */
  blink (stones: number[], blinkTimes: number): number {
    let unique = arrayToObject([...stones])

    for (let i = 0; i < blinkTimes; i += 1) {
      for (const num in unique) {
        const numberKey = Number(num)
        const count = unique[numberKey] as number

        if (numberKey === 0) {
          this.store(1, count)
        } else if (isEvenDigits(numberKey)) {
          const group = halfDigit(numberKey)

          group.forEach(part => {
            this.store(part, count)
          })
        } else {
          this.store(numberKey * 2024, count)
        }
      }

      unique = { ...this.numberStorage }
      this.numberStorage = {}

      this.stoneCount = Object
        .values(unique)
        .reduce(
          (sum, ct) => sum += ct, 0
        )
    }

    return this.stoneCount
  }
}
