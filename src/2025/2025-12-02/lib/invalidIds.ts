import type { RangeIdType } from './fileReader.js'

/**
 * Returns the sum of invalid IDs.
 * Invalid IDs are IDs that have a sequence of digits repeated ONLY twice.
 * @param {RangeIdType[]} input - `RangeIdType[]` array
 * @returns {number}
 */
export const invalidID2x = (input: RangeIdType[]) => {
  let invalidIdSum = 0

  for (let i = 0; i < input.length; i += 1) {
    const min = input[i]?.min ?? 0
    const max = input[i]?.max ?? 0

    for (let id = min; id <= max; id += 1) {
      const digits = id.toString()

      if (digits.length % 2 > 0) {
        continue
      }

      const firstHalf = digits.substring(0, digits.length / 2)
      const secondHalf = digits.substring(digits.length / 2)

      if (firstHalf === secondHalf) {
        invalidIdSum += Number(digits)
      }
    }
  }

  return invalidIdSum
}
