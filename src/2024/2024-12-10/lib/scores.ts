import type { Point } from '../../2024-12-08/lib/types.js'
import type { GridCoordinateSymbol, PointSteps, PointDirection, TrailScores } from './types.js'

import { findZeroCoordinatePositions, findValidSteps } from './utils.js'

// List of trailhead scores
const scores: Record<string, string[]> = {}
let activeZeroIndex = ''

/**
 * Converts a 2D `Point` point object to string and returns its value from the 2D array
 * @param {Point} point - (y,x) coordinatate in the 2D array
 * @param {number[][]} data - 2D number array containing hiking trail data
 * @returns {GridCoordinateSymbol} Returns the `poiint` (x,y) coordinate expressed in string and its value
 */
export const getCoordinateSymbol = (point: Point, data: number[][]): GridCoordinateSymbol => {
  return {
    coordinate: `${point!.x},${point!.y}`,
    symbol: data[point!.y]![point!.x] as number
  }
}

/**
 * Finds valid hiking trails (trailheads) from a point coordinate in a 2D array starting `0` and ending in `9` symbols and
 * calculates the scores for each trailhead.
 * @param {PointDirection} pointVector - Point (y,x) coordinate in a 2D array with a list of valid coordinates from its location.
 * @param {number[][]} data - 2D number array containing hiking trail data
 * @returns {void}
 */
const findPaths = (pointVector: PointDirection, data: number[][]) => {
  const grid = {
    length: data.length, width: data[0]!.length
  }

  if (pointVector.validSteps.length > 0) {
    while (pointVector.validSteps.length > 0) {
      const step = pointVector.validSteps.pop()

      if (step === undefined) continue
      const pt = getCoordinateSymbol(step, data)

      // Count unique ending 9's that match with the starting 0
      if (pt.symbol === 9) {
        if (!scores[activeZeroIndex]!.includes(pt.coordinate)) {
          scores[activeZeroIndex]?.push(pt.coordinate)
        }
      }

      const point: PointDirection = {
        x: step!.x,
        y: step!.y,
        validSteps: findValidSteps(step as Point, grid, data) as PointSteps[]
      }

      findPaths(point, data)
    }
  }
}

/**
 * Finds valid trailheads and counts each trailhead score.
 * @param {number[][]} data - 2D number array containing hiking trail data
 * @param {boolean} [printLog] - Flag to display the processing and total score logs
 * @returns {TrailScores}
 */
export const countTrailScores = (
  data: number[][],
  printLog: boolean = false
): TrailScores => {
  // Find starting positions
  const starts = findZeroCoordinatePositions(data)

  const grid = {
    length: data.length, width: data[0]!.length
  }

  for (let i = 0; i < starts.length; i += 1) {
    const initStep: PointDirection = {
      x: starts[i]!.x,
      y: starts[i]!.y,
      validSteps: findValidSteps(starts[i] as Point, grid, data) as PointSteps[]
    }

    const pt = getCoordinateSymbol(starts[i] as Point, data)
    activeZeroIndex = pt.coordinate
    scores[activeZeroIndex] = []

    findPaths(initStep, data)
  }

  const total = Object
    .values(scores)
    .map(x => x.length)
    .reduce((sum, item) => sum += item, 0)

  if (printLog) {
    for (const key in scores) {
      console.log(`[${key}]: ${scores[key]?.length} score`)
    }

    console.log('--TOTAL SCORE', total)
  }

  return {
    scores,
    total
  }
}
