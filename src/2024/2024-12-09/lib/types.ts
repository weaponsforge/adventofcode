/**
 * Parameters for input map string array
 * @interface CompactParams
 * @param {string} [charMap] - (Optional) Character mapping conversion of a disk map. Processes the local `this.map[]` if parameter is not provided.
 * @param {boolean} [printLog] - (Optional) Flag to display the step-by-step file block movement on screen.
 */
export interface CompactParams {
  charMap?: string[];
  printLog? : boolean;
}

/**
 * Properties of a system file block
 * @interface FileBlock
 * @param {number} length - Length of a file block - number of units that it occupies in the `this.map[]` array
 * @param {number} index - Starting array index of a file block in the `this.map[]` array
 */
export interface FileBlock {
  length: number;
  index: number;
}

/**
 * Properties of a space (free space) block
 * @interface SpaceBlock
 * @param {number} occupied - Number of space block units occupied by a `FileBlock`. A `SpaceBlock` is full if its `occupied`
 *    and `length` properties are equal
 */
export interface SpaceBlock extends FileBlock {
  occupied: number;
}


