/**
 * @type {Object} RobotWarehouseData
 * @property {string[][]} grid - 2D string array containng walls, boxes, spaces and robot symbols
 * @property {string[]} instructions - String array contaning the robot's move instructions
 */
export type RobotWarehouseData = {
  grid: string[][];
  instructions: string[];
}
