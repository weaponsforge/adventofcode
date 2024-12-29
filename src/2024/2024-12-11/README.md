## Day 11: Plutonian Pebbles

Visit the Advent of Code website for more information on this puzzle at:

**Source:** https://adventofcode.com/2024/day/11<br>
**Status:** Complete ⭐⭐

## Code

### `utils.ts` - contains helper and utility scripts for the quiz.

- `isEvenDigits()` - Checks if a number has an even number of digits
- `halfDigit()` - Divides the number into two (2) separate groups (digits) if they have an even number of digits, each group having half the original number's digits.
- `arrayToObject()` - Converts an array of numbers to an Object, using the array number elements as keys with a default numeric value of `1`

### `blink.ts`

- **`Blinker`** class
   - A class that counts the number of transformed and new stones after blinking.
   - Has methods for storing the stone's data, counting, and "blinking."
