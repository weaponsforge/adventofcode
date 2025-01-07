import type { GridDimensions } from '@/2024/2024-12-06/lib/grid.types.js'

/**
 * Retrieves the length and width of a 2D string or number array
 * @param {string[][] | number[][]} data - 2D string or number array
 * @returns {GridDimensions} Object containig the length and width of the 2D array
 */
export const getGridDimensions = <T>(data: T[][]): GridDimensions => {
  return {
    length: data.length,
    width: data[0]!.length
  }
}
