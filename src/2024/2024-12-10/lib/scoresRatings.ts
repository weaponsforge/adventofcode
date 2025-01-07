import type { Point, PointDirection, PointSteps } from '@/aoc/point/types.js'
import type { InputOptions, TrailScores } from './types.js'

import { getCoordinateSymbol } from '@/aoc/grid/utils.js'
import { findValidSteps, findZeroCoordinatePositions } from './utils.js'

// List of trailhead scores
const scores: Record<string, string[]> = {}
let activeZeroIndex = ''

/**
 * Finds valid hiking trails (trailheads) from a point coordinate in a 2D array starting `0` and ending in `9` symbols and
 * calculates the scores for each trailhead.
 * @param {PointDirection} pointVector - Point (y,x) coordinate in a 2D array with a list of valid coordinates from its location.
 * @param {number[][]} data - 2D number array containing hiking trail data
 * @param {boolean} isRating - If `true`, calculates the trailhead ratings instead of the trailhead scores. Defaults to `false`
 * @returns {void}
 */
const findPaths = (pointVector: PointDirection, data: number[][], isRating: boolean = false) => {
  const grid = {
    length: data.length, width: data[0]!.length
  }

  if (pointVector.validSteps.length > 0) {
    while (pointVector.validSteps.length > 0) {
      const step = pointVector.validSteps.pop()

      if (step === undefined) continue
      const pt = getCoordinateSymbol(step, data)

      if (pt.symbol === 9) {
        if (isRating) {
          // Rating: count all trails ending in 9's
          scores[activeZeroIndex]?.push(pt.coordinate)
        } else {
          // Scores: count unique ending 9's that match with the starting 0
          if (!scores[activeZeroIndex]!.includes(pt.coordinate)) {
            scores[activeZeroIndex]?.push(pt.coordinate)
          }
        }
      }

      const point: PointDirection = {
        x: step!.x,
        y: step!.y,
        validSteps: findValidSteps(step as Point, grid, data) as PointSteps[]
      }

      findPaths(point, data, isRating)
    }
  }
}

/**
 * Finds valid trailheads and counts each trailhead score.
 * @param {number[][]} data - 2D number array containing hiking trail data
 * @param {boolean} [printLog] - Flag to display the processing and total score logs
 * @typedef {InputOptions} params - Input and logging parameter options
 * @param {boolean} [params.printLog] - (Optional) Flag to display the miscellaneous data processing logs.
 * @param {boolean} [params.isRating] - (Optional) Flag to calculate the trailhead rating instead of the score.
 * @returns {TrailScores}
 */
export const countTrailScores = (data: number[][], params?: InputOptions): TrailScores => {
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

    findPaths(initStep, data, params?.isRating)
  }

  const total = Object
    .values(scores)
    .map(x => x.length)
    .reduce((sum, item) => sum += item, 0)

  if (params?.printLog) {
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
