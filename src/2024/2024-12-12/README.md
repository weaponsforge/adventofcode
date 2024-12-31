## Day 12: Garden Groups

Visit the Advent of Code website for more information on this puzzle at:

**Source:** https://adventofcode.com/2024/day/12<br>
**Status:** On-going ⭐

## Code

### `garden.ts`

- **Garden** class
   - A set of methods and properties for calculating Garden, Region, and Plots data
   - `Garden.calculatePlot()` - Calculates the perimeter and area of all garden regions in a 2D grid, each defined by an initial symbol at a starting (y,x) coordinate.
   - `Garden.calculateFencePrice()` - Calculates the total fencing price of all regions in a garden.

### `utils.ts`

- A script containing helper and utility scripts for the quiz
- `findNeighbors()` - Finds all coordinates of the neighboring plots from a specified coordinate (up/down/left/right)
- `isIllegalCoordinate()` - Checks if a point at coordinate (y,x) in a grid is illegal: if it's out of bounds of the grid area or if its symbol differs from the symbol parameter.


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

## References

<sup>[[1]](https://en.wikipedia.org/wiki/Flood_fill)</sup> Flood Fill Algorithm