## Day 6: Trash Compactor

Visit the Advent of Code website for more information on this puzzle at:

**Source:** https://adventofcode.com/2025/day/6<br>
**Status:** Complete ⭐⭐

<br>

| Code | Description |
| --- | --- |
| **fileReader.ts** | **`fileReader()`**<br>Returns a `MathInputType` object containing a list of input numbers `{ numbers[][] }` arranged in grid and their vertical operations in `{ operations[] }`.<br><br>**`fileReaderRTL()`**<br>Returns a `MathInputType` object containing an expanded list of input numbers `{ numbers[][] }` arranged in grid and their vertical operations in `{ operations[] }`. The `numbers[][]` data contains `"0"` for digit spaces and `"-1"` for vertical column separators. |
| **solveMath.ts** | **`additionMultiplication()`**<br>Calculates the grand total of all vertical colums' result values.<br><br>**`cephalopodMath()`**<br>Calculates the grand total of vertical colums' result values using cephalopod math, reading vertically-aligned digits assigned to a block (problem) operator from right to left and top to bottom along the columns. |

> [!WARNING]
> Please take note to <u>preserve</u> space `" "` characters at the end of each input line, if your original input text includes it. Some IDEs automatically strips space characters at the end of each line.
