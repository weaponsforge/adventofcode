/**
 * Calculates the maximum rectangular area that could be formed by 2 tiles.
 * @param {number[][]} coordinates - 2D number array containing (x,y) tile coordinates
 * @returns {number} Maximum rectangular area that could be formed by 2 tiles.
 */
export const findMaxRectangleArea = (coordinates: number[][]) => {
  let maxArea = 0

  for (let i = 0; i < coordinates.length - 1; i += 1) {
    for (let j = i + 1; j < coordinates.length; j += 1) {
      const [x1=-1, y1=-1] = coordinates[i] ?? []
      const [x2=-1, y2=-1] = coordinates[j] ?? []

      if (y1 === y2) continue

      const dx = Math.abs(x2 - x1) + 1
      const dy = Math.abs(y2 - y1) + 1
      const area = dx * dy

      if (area > maxArea) {
        maxArea = area
      }
    }
  }

  return maxArea
}
