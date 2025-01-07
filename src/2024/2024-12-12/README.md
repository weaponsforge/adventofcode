## Day 12: Garden Groups

Visit the Advent of Code website for more information on this puzzle at:

**Source:** https://adventofcode.com/2024/day/12<br>
**Status:** Complete ⭐⭐

## Code

### `garden.ts`

**Garden** class
- A set of methods and properties for calculating Garden, Region, and Plots data
- **`calculatePlot()`** - Calculates the per-plot perimeter and total area of all garden regions in a 2D grid, each defined by an initial symbol at a starting (y,x) coordinate.
- **`calculateFencePrice()`** - Calculates the total fencing price of all regions in a garden per connected plot using the formula: area * perimeter (per plot).

### `wholesale.ts`

**WholesaleGarden** class
- A set of methods and properties for calculating the wholesale fencing price of garden regions
- **`calculateRegionCorners()`** - Calculates the number of corners (sides) of a whole region.
- **`calculateFencePrice()`** - Calculates the total fencing price of all regions in a garden using the formula: area * perimeter (of whole region).

### `utils.ts`

- A script containing helper and utility scripts for the quiz
- **`innerCorners()`** - Counts the "inner" corners from groups of valid L-shaped `Points` that has the `point` parameter coordinate as its center


## Notes

1. Garden Plot
   - only 1 plant
   - single letter
   - 4 sides

2. Region
   - garden plots that are touching (vertically/horizontally)

3. Region: Area
   - number of garden plots in the region

4. Region: Perimeter
   - no. of sides of garden plots in the region that do not touch another garden plot

5. Thoughts/tips across the subreddit/google:
   - no. of corners = no. of sides 😉

## References

<sup>[[1]](https://en.wikipedia.org/wiki/Flood_fill)</sup> Flood Fill Algorithm
