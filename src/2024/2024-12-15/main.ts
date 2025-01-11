import { fileReader } from './lib/fileReader.js'
import { moveBoxes, calculateGPS } from './lib/calculateGPS.js'

/**
 * Part 1/2 of the 2024-12-15 quiz
 * Moves the robot, boxes and calculates all boxes' GPS
 */
const quiz20241215_01 = () => {
  const { grid, instructions } = fileReader('../input.txt')

  moveBoxes(grid, instructions)
  const gps = calculateGPS(grid)

  console.log('---GPS', gps)
}

quiz20241215_01()
