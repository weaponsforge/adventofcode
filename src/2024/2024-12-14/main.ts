import { fileReader } from './lib/fileReader.js'
import { calculateSafetyFactor } from './lib/safetyFactor.js'

const dataSample = fileReader('../input_sample.txt')

// Grid dimensions for the sample input
const gridSample = { length: 7, width: 11 }

/**
 * Part 1/2 of the 2024-12-14 quiz
 * Counts the safety factor from robots after N seconds
 */
const quiz20241214_01 = () => {
  const safetyFactor = calculateSafetyFactor({
    data: dataSample,
    gridMeta: gridSample,
    seconds: 100,
    log: true
  })

  console.log('Safety factor:', safetyFactor)
}

quiz20241214_01()
