## Day 9: Disk Fragmenter

Visit the Advent of Code website for more information on this puzzle at:

**Source:** https://adventofcode.com/2024/day/8<br>
**Status:** On-going ⭐

## Code

### `disk.ts`

- **`Disk`** class - Object that provides common disk-like utility processing methods and stores processed data
   - `createCharacterMap()` - Converts a disk map text into a character map
   - `calculateDiskChecksum()` Calculates the check sum of a compacted disk files and spaces text map

### `compact.ts`

- **`CompactDisk`** class (extends the **`Disk`** class) - Object that compacts disk character symbols represeting file and space blocks from the right to the left-most free disk spaces
   - `compactFileDisk()` - Moves file blocks one character at a time from the right to the left-most free disk spaces
