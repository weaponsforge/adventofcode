## Day 9: Disk Fragmenter

Visit the Advent of Code website for more information on this puzzle at:

**Source:** https://adventofcode.com/2024/day/8<br>
**Status:** Complete ⭐⭐

## Code

### `disk.ts`

**`Disk`** class - Object that provides common disk-like utility processing methods and stores processed data with the following methods:

- **`createCharacterMap()`** - Converts files and spaces disk text representation into a character map, storing it in the `this.map[]` string array
- **`calculateDiskChecksum()`** - Calculates the checksum of fragmented or defragmented disk files and spaces text map
- **`getGrid()`** - Joins the `this.map[]` disk and spaces character array into a string format if it is less than `this.maxArrayToPrintLength`
- **`getCompactGrid()`** - Joins the `this.compactMap[]` "compact" disk and spaces character array into a string format if it is less than `this.maxArrayToPrintLength`


### `compact.ts`

**`CompactDisk`** class (extends the **`Disk`** class) - Object that compacts disk character symbols representing file and space blocks from the right to the left-most free disk spaces with the following methods:

- **`defragmentation()`** - Moves file blocks one character at a time from the right to the left-most free disk spaces of a disk character map, Storing the result in the `this.compactMap[]` and returning the result.

### `whole.ts`

**WholeDisk** class -  Object that compacts disk character symbols representing files and spaces by moving whole (groups) of file blocks into spaces that can accommodate them with the following methods:

- **`findDiskBlocks()`** - Finds and initializes the array indices of file blocks and spaces, noting their lengths for tracking
- **`findFreeSpaceBlock()`** - Finds the starting index of a group of free space blocks that can contain the whole length of a `FileBlock` in the `this.map[]` array from the `this.spaceBlocks` block map
- **`defragmentation()`** - Moves whole file blocks from the right to the left-most free disk spaces that can contain the whole file blocks, Storing the result in the `this.compactMap[]` and returning the result.
