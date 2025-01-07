/**
 * @type {Object} GardenRegionDetails
 * @property {number} area - Area of a garden region - sum of connected plots with similar symbols.
 * @property {number} perimeter - Perimeter of a garden region - sum of outer edges per plot.
 */
export type GardenRegionDetails = {
  area: number;
  perimeter: number;
}

/**
 * @type {Object} GardenRegionDetails
 * @property {number} area - Area of a garden region - sum of connected plots with similar symbols.
 * @property {number} sides - Number of sides (corners) of a region.
 */
export type GardenRegionSides = {
  area: number;
  sides: number;
}
