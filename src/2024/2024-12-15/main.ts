import { fileReader } from './lib/fileReader.js'
import { fileReaderExpand } from './lib/fileReaderExpanded.js'

import { moveBoxes, calculateGPS } from './lib/calculateGPS.js'
import { moveExpandedBoxes, calculateExpandedGPS } from './lib/calculateExpandedGPS.js'

/**
 * Part 1/2 of the 2024-12-15 quiz
 * Moves the robot, boxes and calculates all boxes' GPS
 */
const quiz20241215_01 = () => {
  const { grid, instructions } = fileReader('../input.txt')

  moveBoxes(grid, instructions)
  const gps = calculateGPS(grid)

  console.log('Part 1: Regular boxes GPS:', gps)
}

/**
 * Part 2/2 of the 2024-12-15 quiz
 * Moves the robot, expanded boxes and calculates all expanded boxes' GPS
 */
const quiz20241215_02 = () => {
  const { grid, instructions } = fileReaderExpand('../input.txt')

  moveExpandedBoxes(grid, instructions)
  const gps = calculateExpandedGPS(grid)

  console.log('Part 2: Expanded boxes GPS:', gps)
}

quiz20241215_01()
quiz20241215_02()
