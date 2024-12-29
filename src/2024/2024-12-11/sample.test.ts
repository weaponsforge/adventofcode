import { test, expect } from 'vitest'
import { Blinker } from './lib/blink.js'

test('Number of stones after blinking:', () => {
  const stones = '125 17'.split(' ').map(Number)
  const blinker = new Blinker()

  expect(blinker.blink(stones, 25)).toBe(55312)
})
