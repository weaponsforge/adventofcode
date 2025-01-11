import { Blinker } from './lib/blink.js'
import { inputSample, inputQuiz } from './input.js'

/**
 * Part 1/2 of the 2024-12-10 quiz
 * Counts the number of visible stones after blinkingc 25x
 */
const quiz20241211_01 = () => {
  const numBlinks = 25
  const blinker = new Blinker()

  const stones = inputSample.split(' ').map(Number)
  const count = blinker.blink(stones, numBlinks)

  console.log(`${count} stones available after ${numBlinks} blinks`)
}

/**
 * Part 2/2 and 2/2 of the 2024-12-10 quiz
 * Counts the number of visible stones after blinking 75x
 */
const quiz20241211_02 = () => {
  const numBlinks = 75
  const blinker = new Blinker()

  const stones = inputQuiz.split(' ').map(Number)
  const count = blinker.blink(stones, numBlinks)

  console.log(`${count} stones available after ${numBlinks} blinks`)
}

quiz20241211_01()
quiz20241211_02()
