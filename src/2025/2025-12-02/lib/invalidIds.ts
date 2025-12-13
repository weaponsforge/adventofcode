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

/**
 * Returns the sum of invalid IDs that have sequences of similar digits repeated TWICE or more, or if all digits consist of the same number.
 * @param input - `RangeIdType[]` array
 * @returns
 */
export const invalidIDMultiple = (input: RangeIdType[]) => {
  let invalidIdSum = 0
  const invalidIds: number[] = []

  for (let i = 0; i < input.length; i += 1) {
    const min = input[i]?.min ?? 0
    const max = input[i]?.max ?? 0

    for (let id = min; id <= max; id += 1) {
      const digits = id.toString()

      // Find unique sequence patterns starting from 1 digit
      for (let subDigits = 1; subDigits < digits.length; subDigits += 1) {
        if (digits.length % subDigits > 0) {
          continue
        }

        let prevSequence = null
        let isValid = true

        for (let start = 0; start < digits.length; start += subDigits) {
          const end = start + subDigits
          const sequence = digits.substring(start, end)

          if (
            prevSequence !== null &&
            prevSequence !== sequence
          ) {
            isValid = false
            break
          }

          prevSequence = sequence
        }

        if (isValid) {
          if (!invalidIds.includes(id)) {
            invalidIdSum += id
            invalidIds.push(id)
          }
        }
      }
    }
  }

  return invalidIdSum
}
