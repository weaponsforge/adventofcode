## Day 14: Restroom Redout

Visit the Advent of Code website for more information on this puzzle at:

**Source:** https://adventofcode.com/2024/day/14<br>
**Status:** On-going ⭐

## Code

### `safetyFactor.ts`

- `calculateSafetyFactor()` - Counts the safety factor after `params.seconds` of simulating moving the robots.

### `board.ts`

**Board** class

- Manages the `Grid`-like 2D string array, methods, and properties in which robots run
- **`setTileValue()`** - Sets the string value in the 2D `this.grid[][]` array
- **`setRobot()`** - Sets a new robot into the `Board`'s robots list and marks its position in `this.grid[][]` array
- **`moveRobot()`** - Moves a robot from a tile and updates the current and new tile's robot count
- **`create()`** - Creates a blank `this.length` x `this.width` board, clearing
- **`findQuadrants()`** - Finds the four (4) main quadrants of `this.grid`, each containing a set of inclusive `start` and `end` coordinates.
- **`getQuadrant()`** - Finds the quadrant `ID` of a `Point` within the `this.grid` 2D array.
- **`viewQuadrants()`** - Draws categorized symbols per quadrant on a temporary 2D array for visualization.
