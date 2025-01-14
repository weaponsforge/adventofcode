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
