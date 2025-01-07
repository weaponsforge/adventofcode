## Day 12: Garden Groups

Visit the Advent of Code website for more information on this puzzle at:

**Source:** https://adventofcode.com/2024/day/12<br>
**Status:** Complete ⭐⭐

## Code

### `garden.ts`

- **Garden** class
   - A set of methods and properties for calculating Garden, Region, and Plots data
   - `Garden.calculatePlot()` - Calculates the per-plot perimeter and total area of all garden regions in a 2D grid, each defined by an initial symbol at a starting (y,x) coordinate.
   - `Garden.calculateFencePrice()` - Calculates the total fencing price of all regions in a garden per connected plot using the formula: area * perimeter (per plot).

### `wholesale.ts`

- **WholesaleGarden** class
   - A set of methods and properties for calculating the wholesale fencing price of garden regions
   - `WholesaleGarden.calculateRegionCorners()` - Calculates the number of corners (sides) of a whole region.
   - `WholesaleGarden.calculateFencePrice()` - Calculates the total fencing price of all regions in a garden using the formula: area * perimeter (of whole region).

### `utils.ts`

- A script containing helper and utility scripts for the quiz
- `findNeighbors()` - Finds all coordinates of the neighboring plots from a specified coordinate (up/down/left/right)
- `isIllegalCoordinate()` - Checks if a point at coordinate (y,x) in a grid is illegal: if it's out of bounds of the grid area or if its symbol differs from the symbol parameter.
- `getDiagonalNeighbors()` - Retrieves the four (4) diagonally-aligned (y,x) coordinates and the symbol character from a `Point` in the grid. Substitutes a `"*"` symbol character in the `NeighborPoint.symbol`if the `point` is out of the grid bounds.
- `getCrossNeighbors()` - Retrieves the four (4) horizontal/vertical aligned (y,x) coordinates and the symbol character from a `Point` in the grid. Substitutes a `"*"` symbol character in the `NeighborPoint.symbol`if the `point` is out of the grid bounds.
- `isDiagonal()` - Checks if two (2) `Points` are diagonally-aligned
- `innerCorners()` - Counts the "inner" corners from groups of valid L-shaped `Points` that originate from a `Point` coordinate.


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

```

## References

<sup>[[1]](https://en.wikipedia.org/wiki/Flood_fill)</sup> Flood Fill Algorithm
