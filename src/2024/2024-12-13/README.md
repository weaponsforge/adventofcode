## Day 13: Claw Contraption

Visit the Advent of Code website for more information on this puzzle at:

**Source:** https://adventofcode.com/2024/day/13<br>
**Status:** On-going ⭐

## Code

### `count.ts`

- **`countTokensPrizes()`** - Counts the minimum number of tokens needed to win all possible prizes.

### `utils.ts`

- **`getDeterminant()`** - Counts the determinant of a 2x2 coefficient matrix. Currently only works with a 2x2 number matrix.
- **`coefficientMatrix()`** - Builds a coefficient matrix by replacing column values with the constants. Currently only works with a 2x2 number matrix.
- **`solveEquation()`** - Calculates the number of needed (x,y) button A "and" B presses to reach the prize by solving the 2 equations using Cramer's Rule.

### `fileReader.ts`

- Reads and formats the quiz input TXT file

## References

<sup>[[1]](https://www.youtube.com/watch?v=jBsC34PxzoM)</sup>&nbsp; Cramer's Rule<br>
<sup>[[2]](https://www.youtube.com/playlist?list=PLybg94GvOJ9En46TNCXL2n6SiqRc_iMB8)</sup>&nbsp; Linear Algebra Videos

