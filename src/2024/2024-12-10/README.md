## Day 10: Hoof It

Visit the Advent of Code website for more information on this puzzle at:

**Source:** https://adventofcode.com/2024/day/10<br>
**Status:** Complete ⭐⭐

## Code

### `utils.ts`

- Utility and helper functions.

### `scoresRatings.ts`

- `countTrailScores()`
   - Finds valid hiking trails (trailheads) from a point coordinate in a 2D array starting with `0` and ending in `9` symbol and calculates the **scores** for each trailhead.
   - Calculates the trailhead **ratings** instead of the trailhead scores if provided with the optional `{ isRating: true }` parameter. Defaults to `false`
