import { test, expect } from 'vitest'
import { Blinker } from './lib/blink.js'
import { inputSample, inputQuiz } from './input.js'

test('Number of stones after blinking 25x:', () => {
  const stones = inputSample.split(' ').map(Number)
  const blinker = new Blinker()

  expect(blinker.blink(stones, 25)).toBe(55312)
})

test('Number of stones after blinking 75x:', () => {
  const stones = inputQuiz.split(' ').map(Number)
  const blinker = new Blinker()

  expect(blinker.blink(stones, 75)).toBe(246353780086424)
})
