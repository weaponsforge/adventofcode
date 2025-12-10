
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
    const offset = cursor + input[i]
    cursor = offset % MAX_LIMIT

    if (cursor === 0) {
      passwordCount += 1
    }
  }

  return passwordCount
}

