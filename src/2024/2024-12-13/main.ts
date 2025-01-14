import { fileReader } from './lib/fileReader.js'
import { countTokensPrizes } from './lib/count.js'
import { countTokensOnAdjustedPrizes } from './lib/countAdjusted.js'

const data = fileReader('../input.txt')
const data2 = fileReader('../input2.txt')

/**
 * Part 1/2 of the 2024-12-13 quiz
 * Counts the number of tokens needed to win all possible prizes.
 */
const quiz20241213_01 = () => {
  const { prizes, tokens } = countTokensPrizes(data, true)

  console.log('All prizes', prizes)
  console.log('Required tokens', tokens)
}

/**
 * Part 2/2 of the 2024-12-13 quiz
 * Counts the number of tokens needed to win all possible prizes,
 * adjusted to the additional `10000000000000` of the prize coordinates
 */
const quiz20241213_02 = () => {
  const { prizes, tokens } = countTokensOnAdjustedPrizes(data2)

  console.log('\nAll prizes', prizes)
  console.log('Tokens for adjusted prize coordinates', tokens)
}

quiz20241213_01()
quiz20241213_02()
