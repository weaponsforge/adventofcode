import type { Point } from '@/aoc/point/types.js'
import type { GridDimensions } from '@/aoc/grid/types.js';

/**
 * Location and velocity properties of a Robot
 * This interface extends {@link Point}, inheriting the `x` and `y` properties that represent
 * the object's position in a 2D array.
 * @interface RobotProperty
 * @extends {Point}
 * @property {Point} velocity - Object containing the `x` and `y` number velocities
 */
export interface RobotProperty extends Point {
  velocity: Point;
}

/**
 * Represents the quadrant of a 2D array
 * @type {Object} Quadrant
 * @property {number} id - Quadrant number ID
 * @property {Point} start - (y,x) coordinates of the quadrant's starting `Point` (upper-left coordinates)
 * @property {Point} end - (y,x) coordinates of the quadrant's ending `Point` (lower-right coordinates)
 */
export type Quadrant = {
  id: number;
  start: Point;
  end: Point;
}

/**
 * Object input parameter for calculating the robots safety factor
 * @interface RobotSimulationParams
 * @property {RobotProperty[]} data - Array of `RobotProperty` containing the initial locations and velocities of robots
 * @property {GridDimensions} gridMeta - Object containing the length and width of the 2D string array
 * @property {number} seconds - Number of seconds for moving the robots
 * @property {boolean} [log] - Flag to print the 2D array on screen
 */
export interface RobotSimulationParams {
  data: RobotProperty[],
  gridMeta: GridDimensions,
  seconds: number,
  log?: boolean
}
