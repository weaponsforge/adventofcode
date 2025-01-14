import { fileReader } from './lib/fileReader.js'
import { calculateSafetyFactor } from './lib/safetyFactor.js'
import { findEasterEgg } from './lib/findEasterEgg.js'

/**
 * Part 1/2 of the 2024-12-14 quiz
 * Counts the safety factor from robots after N seconds
 */
const quiz20241214_01 = () => {
  // Grid dimensions for the randomized quiz input
  const gridSettings = { length: 7, width: 11 }

  // Sample data. Replace with AoC quiz data.
  const dataInput = fileReader('../input1.txt')

  const safetyFactor = calculateSafetyFactor({
    data: dataInput,
    gridMeta: gridSettings,
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
  // Grid dimensions for the randomized quiz input
  const gridSettings = { length: 103, width: 101 }

  // Random AoC auiz data
  const dataInput = fileReader('../input.txt')

  const seconds = findEasterEgg({
    data: dataInput,
    gridMeta: gridSettings,
    seconds: 10000
    // Uncomment to print the xmas tree
    // log: true
  })

  console.log('Easter egg iteration no. (seconds):', seconds)
}

quiz20241214_01()
quiz20241214_02()
