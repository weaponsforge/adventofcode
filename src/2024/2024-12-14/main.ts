import { fileReader } from './lib/fileReader.js'
import { calculateSafetyFactor } from './lib/safetyFactor.js'

const data = fileReader('../input.txt')

/**
 * Part 1/2 of the 2024-12-14 quiz
 * Counts the safety factor from robots after N seconds
 */
const main = () => {
  const safetyFactor = calculateSafetyFactor({
    data,
    gridMeta: { length: 7, width: 11 },
    seconds: 100,
    log: true
  })

  console.log('Safety factor:', safetyFactor)
}

main()
