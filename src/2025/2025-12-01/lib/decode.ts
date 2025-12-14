
/**
 * Counts the number of times the dial lands in `0` at the end of a dial rotation
 * @param {number[]} input Input data
 * @returns {number} Password to open the door
 */
export const decodePassword = (input: number[]) => {
  const MAX_LIMIT = 100
  const START_POS = 50

  let cursor = START_POS
  let zeroCount = 0

  for (let i = 0; i < input.length; i += 1) {
    const steps = input[i] as number
    const offset = cursor + steps
    const remainder = offset % MAX_LIMIT

    if (remainder === 0) {
      zeroCount += 1
      cursor = 0
    } else {
      cursor = remainder < 0
        ? remainder + MAX_LIMIT
        : remainder
    }
  }

  return zeroCount
}

/**
 * Counts the number of times the dial passes `0` during a dial rotation
 * @param {number[]} input Input data
 * @returns {number} Password to open the door
 */
export const method0x434C49434B = (input: number[]) => {
  const MAX_LIMIT = 100
  const START_POS = 50

  let cursor = START_POS
  let zeroCount = 0

  for (let i = 0; i < input.length; i += 1) {
    const vector = input[i] as number
    const dialLength = Math.abs(vector)

    for (let j = 1; j <= dialLength; j += 1) {
      if (vector < 0) {
        // Dial to the left
        cursor = (cursor - 1 + MAX_LIMIT) % MAX_LIMIT
      } else {
        // Dial to the right
        cursor = (cursor + 1) % MAX_LIMIT
      }

      if (cursor === 0) {
        zeroCount += 1
      }
    }
  }

  return zeroCount
}
