## Day 8: Resonant Collinearity

Visit the Advent of Code website for more information on this puzzle at:

**Source:** https://adventofcode.com/2024/day/8<br>
**Status:** Complete ⭐⭐

## Code

### `GridAntinodes.ts`

- **`GridAntiNodes`** class - Object that tracks and manages `Antennas` and `Antinodes` in a 2D grid array

### `uniqueAntinodes.ts`

- **`countAntinodes()`** - Counts the unique locations in the grid that contains an antinode

### `allAntinodes.ts`

- **`getAntinodesInPath()`** - Finds all `Antinode` coordinates along a path within a 2D array (grid) given a `Point`, increment steps and a +/- direction

- **`countAllAntinodes()`** - Counts the unique locations in the grid that contains all locations of antinodes along a path
