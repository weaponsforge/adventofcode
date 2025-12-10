
/**
 * Counts the number of times the dial from input passes `0`
 * @param {number[]} input Input data
 * @returns {number} Password to open the door
 */
export const decodePassword = (input: number[]) => {
  const MAX_LIMIT = 100
  const START_POS = 50

  let cursor = START_POS
  let passwordCount = 0

  if (!Array.isArray(input)) {
    throw new Error('Invalid input file')
  }

  for (let i = 0; i < input.length; i += 1) {
    const step = input[i] as number

    if (typeof input[i] !== 'number') {
      throw new Error(`Invalid input, element ${i}: "${input[i]}"`)
    }

    const offset = cursor + step
    cursor = offset % MAX_LIMIT

    if (cursor === 0) {
      passwordCount += 1
    }
  }

  return passwordCount
}

