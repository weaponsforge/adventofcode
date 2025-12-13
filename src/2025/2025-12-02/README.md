## Day 2: Gift Shop

Visit the Advent of Code website for more information on this puzzle at:

**Source:** https://adventofcode.com/2025/day/2<br>
**Status:** Complete ⭐⭐

<br>

| Code | Description |
| --- | --- |
| **fileReader.ts** | Reads the input file into an `RangeIdType[]` array where each element consists of a `RangeIdType` object with a `min` and `max` ID range values. |
| **invalidIds.ts** | **`invalidID2x()`** <br>Returns the sum of invalid IDs. Invalid IDs are IDs that have a sequence of digits repeated ONLY twice.<br><br>**`invalidIDMultiple()`** <br> Returns the sum of invalid IDs that have sequences of similar digits repeated TWICE or more, or if all digits consist of the same number.
