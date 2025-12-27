import { AOCOutputType, readAOCInputFile } from '@/aoc/file/aocfile.js'

export type SquareDistIndex = {
  /** Array indices of 2 3D point coordinates */
  indices: number[];
  /** Distance from other of the 2 3D points */
  distance: number;
}

export type CircuitDataType = {
  distances: SquareDistIndex[];
  coordinates: number[][];
}

/**
 * Creates a `CircuitDataType[]` Object `{ distances, coordinates }` containing the array indices of
 * pairs of 3D point coordinates in `{ distances.indices[] }` sorted from min-max of their square distances in `{ distances.distance }`
 * and the input 3D coordinates in `{ coordinates }`.
 * @param {string[][]} input - 2D input array data of
 * @returns {SquareDistIndex[]} Sorted square distances and points object.
 */
export const fileReader = (inputFilePath: string): CircuitDataType => {
  const input = readAOCInputFile({
    filePath: inputFilePath,
    type: AOCOutputType.NUMBER_ARRAY_2D,
    delimiter: ','
  }) as number[][]

  const distances: SquareDistIndex[] = []

  // Initialize distances
  for (let i = 0; i < input.length - 1; i += 1) {
    for (let j = i + 1; j < input.length; j += 1) {
      const [x1=-1, y1=-1, z1=-1] = input[i] ?? []
      const [x2=-1, y2=-1, z2=-1] = input[j] ?? []

      const dx = x2 - x1
      const dy = y2 - y1
      const dz = z2 - z1
      const sqDistance = (dx * dx) + (dy * dy) + (dz * dz)

      distances.push({
        indices: [i, j],
        distance: sqDistance
      })
    }
  }

  return {
    distances: distances.sort((a, b) => a.distance - b.distance),
    coordinates: input
  }
}
