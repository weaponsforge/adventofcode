import type { Point, PointSteps } from '@/aoc/point/types.js'
import type { GridDimensions } from '@/aoc/grid/types.js'
import { isOutOfBounds } from '@/aoc/grid/utils.js'

/**
 * Finds the (y,x) coordinates of starting positions in a trailhead grid
 * @param {number[][]} data - 2D number array containing hiking trail data
 * @param {number} [symbol] - (Optional) Number indicating the symbol of a trailhead's start. Defaults to `0`.
 * @returns {Point[]} Array of (y,x) coortinates of starting positions
 */
export const findZeroCoordinatePositions = (data: number[][], symbol?: number): Point[] => {
  return data.reduce((list: Point[], row, y) => {
    const rowItems = row.reduce((inner: Point[], item, x) => {
      if (item === (symbol ?? 0)) return [...inner, { y, x }]
      return inner
    }, [])

    return [...list, ...rowItems]
  }, [])
}

/**
 * Finds valid positions and coordinates of next steps from a coordinate.
 * @param {Point} point - (y,x) coordinate object in a 2D array grid
 * @param {GridDimensions} gridMeta - grid length and width
 * @param {number[][]} grid - 2D number array input
 * @returns {PointSteps[]} Array of valid grid positions from the given `point`
 */
export const findValidSteps = (
  point: Point,
  gridMeta: GridDimensions,
  grid: number[][]
): PointSteps[] | undefined => {
  if (isOutOfBounds(point, gridMeta)) return

  // All 4 possible locations (directions) from a coordinate
  const steps = [
    { ...point, x: point.x - 1, direction: { x: -1, y: 0 } }, // left
    { ...point, x: point.x + 1, direction: { x: 1, y: 0 } }, // right
    { ...point, y: point.y - 1, direction: { x: 0, y: -1 } }, // down
    { ...point, y: point.y + 1, direction: { x: 0, y: 1 } }  // up
  ]

  // Filter valid items
  return steps.filter(step => {
    return (
      // Within the grid area
      !isOutOfBounds(step, gridMeta) &&
      // Difference (elevation) with the current grid value is 1
      (grid[step.y]![step.x] ?? 0) - (grid[point.y]![point.x] ?? 0) === 1
    )
  })
}
