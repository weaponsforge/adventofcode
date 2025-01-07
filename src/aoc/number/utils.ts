/**
 * Checks if a number-like input is a number
 * @param str {string | nummber} Input parameter
 * @returns {bool} Flag if the input parameter is a number
 */
export const isNumber = (input: string | number): boolean => {
  if (
    typeof input !== 'string' &&
    typeof input !== 'number'
  ) return false

  return !isNaN(Number(input))
}

/**
 * Checks if a number has an even number of digits
 * @param {number} number - Number input
 */
export const isEvenDigits = (number: number): boolean => {
  return number.toString().length % 2 === 0
}
