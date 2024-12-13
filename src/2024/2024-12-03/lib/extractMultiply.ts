// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mul = (x: number, y: number): number => {
  if (x === undefined || y === undefined) {
    throw new Error('Missing operand')
  }

  return x * y
}

/**
 * Extracts and processes valid mul(x,y) sequences from long text and returns their sum
 * @param corruptedInstructions {string} Corrupted multiply instructions string
 * @returns {number} Sum of valid mul(x,y) operations from corrupted string
 */
export const extractMultiply = (corruptedInstructions: string): number => {
  const instances = corruptedInstructions.split('mul(')

  // 3 per number (2x), 1=comma, 1=closing parenthesis
  const maxStringLength = 8
  let multiplySum = 0

  for (let i = 0; i < instances.length; i += 1) {
    const line = (instances[i] as string).substring(0, maxStringLength)
    const multiplyText = 'mul(' + line.substring(0, line.indexOf(')') + 1)

    try {
      multiplySum += eval(multiplyText)
    } catch (err: unknown) {
      if (err instanceof Error) {
        // console.log('eval parsing error:', err.message)
      }
    }
  }

  return multiplySum
}
