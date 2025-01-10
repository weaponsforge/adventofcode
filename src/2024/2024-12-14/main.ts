import { fileReader } from './lib/fileReader.js'
import { calculateSafetyFactor } from './lib/safetyFactor.js'
import { findEasterEgg } from './lib/findEasterEgg.js'

const dataSample = fileReader('../input_sample.txt')
const dataQuiz = fileReader('../input.txt')

// Grid dimensions for the sample input
const gridSample = { length: 7, width: 11 }

// Grid dimensions for the randomized quiz input
const gridQuiz = { length: 103, width: 101 }

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

/**
 * Part 2/2 of the 2024-12-14 quiz
 * Counts the no. of seconds before robots display the easter egg
 */
const quiz20241214_02 = () => {
  const seconds = findEasterEgg({
    data: dataQuiz,
    gridMeta: gridQuiz,
    seconds: 10000
    // Uncomment to print the xmas tree
    // log: true
  })

  console.log('Easter egg iteration no. (seconds):', seconds)
}

quiz20241214_01()
quiz20241214_02()
