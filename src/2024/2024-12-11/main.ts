import { Blinker } from './lib/blink.js'

/**
 * Part 1/2 and 2/2 of the 2024-12-10 quiz
 * Counts the number of visible stones after blinking
 */
const quiz20241211 = () => {
  const numBlinks = 25
  const blinker = new Blinker()

  const stones = '125 17'.split(' ').map(Number)
  const count = blinker.blink(stones, numBlinks)

  console.log(`${count} stones available after ${numBlinks} blinks`)
}

quiz20241211()
