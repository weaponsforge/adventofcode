## Day 7: Bridge Repair

Visit the Advent of Code website for more information on this puzzle at:

**Source:** https://adventofcode.com/2024/day/7<br>
**Status:** Complete ⭐⭐

## Code

### `totalCalibration.ts`

- `operatorCombinations()`
   - Finds the possible combinations in which to place operator symbols for an `N`-length array

- `doEquation()`
   - Returns the result of an AoC text equation and a set of operator symbols with the condition: left to write equation processing, disregarding operator precedence

- `totalCalibrationResult()`
   - Counts the total calibration sum of input lines whose elements (numbers) match the line's target sum after processing with one of N possible combinations of `+` and `*` operator placements

### `totalCalibrationConcat.ts`

- `doEquationWithConcat()`
   - Returns the result of an AoC text equation and a set of operator symbols with the conditions:
      - Concatenate two (2) numbers with the `||` symbol in between
      - Left to write equation processing, disregarding operator precedence

- `totalCalibrationConcat()`
   - Counts the total calibration sum of input lines whose single or concatenated "joined" elements (numbers) match the line's target sum after processing with one of N possible combinations of `+`, `*` and `||` (concatenator) operator placements