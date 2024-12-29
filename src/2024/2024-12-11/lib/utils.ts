/**
 * Checks if a number has an even number of digits
 * @param {number} number - Number input
 */
export const isEvenDigits = (number: number): boolean => {
  return number.toString().length % 2 === 0
}

/**
 * Divides the number into two (2) separate groups (digits) if they have an even number of digits,
 * aach group having half the original number's digits.
 * @param {number} number - Number input
 */
export const halfDigit = (number: number): number[] => {
  const numberStr = number.toString()

  return [
    Number(numberStr.substring(0, numberStr.length / 2)),
    Number(numberStr.substring(
      numberStr.length / 2, numberStr.length)
    )
  ]
}

/**
 * Converts an array of numbers to an Object, using the array number elements as keys with a default numeric value of `1`
 * @param {number[]} numbers - Array of numbers
 * @returns {Record<number, number>} Object
 */
export const arrayToObject = (numbers: number[]): Record<number, number> => {
  return numbers.reduce((list: Record<number, number>, num) =>
    (list[num] === undefined
      ? list[num] = 1
      : list[num] += 1, list),
  {}
  )
}
