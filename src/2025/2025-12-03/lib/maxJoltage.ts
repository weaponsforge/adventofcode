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
 * Calculates the sum of the 2 highest digits (joltage) in order per bank (input row)
 * @param {string[]} input - Input array
 * @returns {number} - Sum of the maximum joltage from 2 batteries for each bank
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

/**
 * Calculates the sum of the 12 highest digits (joltage) in order per bank (input row)
 * @param {string[]} input - Input array
 * @returns {number} - Sum of the maximum joltage from 12 batteries for each bank
 */
export const findMaxJoltageN = (input: string[]) => {
  const MAX_DIGITS = 12
  let joltage = 0

  for (let i = 0; i < input.length; i += 1) {
    const bank = input[i]
      ?.split('')
      .map(item => Number(item)) ?? []

    // Find highest number for the 1st digit
    const list: DigitType[] = []
    const highest = highestNumber(bank, 0, bank.length - MAX_DIGITS + 1)

    list.push(highest)

    // Find the highest numbers for the rest of MAX_DIGITS
    for (let j = 2; j <= MAX_DIGITS; j += 1) {
      const start = (list[list.length - 1]?.index ?? 0) + 1
      const end = bank.length - (MAX_DIGITS - j)

      const high = highestNumber(bank, start, end)
      list.push(high)
    }

    const batteries = list.map(item => item.digit).join('')
    joltage += parseInt(batteries)
  }

  return joltage
}
