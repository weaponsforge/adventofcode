## Day 15: Warehouse Woes

Visit the Advent of Code website for more information on this puzzle at:

**Source:** https://adventofcode.com/2024/day/15<br>
**Status:** On-going ⭐

## Notes

### Main Objects

1. GRID
   - 2d board array
   - contains
      - blank space: `.`
      - walls: `#`
      - box: `O`
      - amok robot: = `@`

2. WALLS
   - symbol `#`
   - surrounds grid edges
   - found inside grid
   - impassable by: `O`, `@`
   - passable: GPS

3. BOX
   - symbol `O`
   - impassable: `@`, other `O`
   - passable: GPS
   - can be moved up/down/left/right by `@`

4. ROBOT
   - symbol `@`
   - has move instructions
   - can move up/down/left/rigt
   - can push `O`
   - cannot move if blocked by unpushable `O`
   - cannot move if blocked by `#`

### Algo

#### Phase 1 - Move Boxes

- initialize all pos in grid
- read robot move instruction
- turn + move according to instruction
- if symbol ahead is `O`
   - chain pushing preceeding `O`s
   - if `O` unmovable, stop
- if symbol ahead is `.`
   - move
- if symbol ahead is `#`
   - stop
- repeat until end of move instructions

#### Phase 2 - Calculate Box GPS

- for each box,
   - GPS = 100 * distance from top + distance from left
- sum all box GPS
