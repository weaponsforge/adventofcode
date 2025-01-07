import { fileReader } from './lib/fileReader.js'
import { countTokensPrizes } from './lib/count.js'

const data = fileReader('../input.txt')

/**
 * Part 1/2 of the 2024-12-14 quiz
 * Counts the minimum number of tokens needed to win all possible prizes.
 */
const quiz20241213_01 = () => {
  const { prizes, tokens } = countTokensPrizes(data, true)

  console.log('All prizes', prizes)
  console.log('Minimum tokens', tokens)
}

quiz20241213_01()
