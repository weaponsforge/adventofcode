type DigitType = {
  digit: number;
  index: number;
}

/**
 * Finds the highest number in an array of numbers along with its array index, given a start and end offset to search from.
 * @param {number[]} numbers - Array of numbers
 * @param {number} start - Start array offset to read from `numbers[]`
 * @param {number} end - End array offset to read from `numbers[]`
 * @returns {DigitType} - Object containing the highest number in the array with its array index
 */
const highestNumber = (
  numbers: number[],
  start: number,
  end: number
): DigitType => {
  const highest: DigitType = {
    digit: -1,
    index: -1
  }

  for (let i = start; i < end; i += 1) {
    const digit = numbers[i] ?? -1

    if (digit > highest.digit) {
      highest.digit = digit
      highest.index = i
    }
  }

  return highest
}

/**
 * Calculates the sum of the 2 highest digits (joltage) per bank (input row)
 * @param {string[]} input - Input array
 * @returns {number} - Sum of the maximum joltage from each bank
 */
export const findMaxJoltage = (input: string[]) => {
  let joltage = 0

  for (let i = 0; i < input.length; i += 1) {
    const bank = input[i]
      ?.split('')
      .map(item => Number(item)) ?? []

    // Find highest number for the 1st digit
    const highest = highestNumber(bank, 0, bank.length - 1)

    // Find the highest number for the 2nd digit
    const nextHighest = highestNumber(bank, highest.index + 1, bank.length)
    joltage += parseInt(`${highest.digit}${nextHighest.digit}`)
  }

  return joltage
}
