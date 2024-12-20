## Day 6: Guard Gallivant

Visit the Advent of Code website for more information on this puzzle at:

**Source:** https://adventofcode.com/2024/day/6<br>
**Status:** Complete ⭐⭐

## Code

1. **grid.ts**
   - `Grid` - class that has a 2D array object containing paths and obstacles in which a `Guard` runs.
   - Has functions and methods for managing a `Grid` object

2. **guard.ts**
   - `Guard` - class representing an object that can walk in the `Grid` map.
   - Have methods for moving around in the `Grid`.

3. **guardController.ts**
   - `guardController()` - Runs the `Guard` on the `Grid`, counting distinct positions/steps.

5. **guardControllerLoop.ts**
   - `gridHasInfiniteLoop()`
      - Runs the `Guard` on a `Grid` with obstacles, checking the placement of paths and obstacles that will make the `Guard` walk in an infinite loop
   - `findObstructionPositions()` - Counts the number of positions in the `Grid` in which inserting one (1) obstruction symbol # will cause the `Guard` to walk in an infinite loop.
      - > _**WARNING:** This is a very slow, unoptimized program execution that takes about ~3 mins to complete using the actual AoC input text._
