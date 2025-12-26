import type { CircuitDataType } from './fileReader.js'

/**
 * Multiplies the sizes of the 3 largest circuits.
 * @param {number[][]} input - 2D number array junction boxes input data.
 * @returns {number} Value of the 3 largest circuits multiplied.
 */
export const threeLargestCircuits = (circuitData: CircuitDataType, maxConnections = 10) => {
  const circuits: number[][] = []

  const { distances, coordinates } = circuitData

  // Initialize circuits
  for (let i = 0; i < coordinates.length; i += 1) {
    circuits.push([i])
  }

  // Process connections
  for (let i = 0; i < maxConnections; i += 1) {
    const [ index1=-1, index2=-1 ] = distances[i]?.indices ?? []

    const a1 = circuits.findIndex((list) => list.indexOf(index1) >= 0)
    const b1 = circuits.findIndex((list) => list.indexOf(index2) >= 0)

    // Merge connected circuits
    if (a1 >= 0 && b1 >= 0 && a1 !== b1) {
      const circuit2 = circuits[b1] ?? []

      circuits[a1] = circuits[a1]?.concat(circuit2) ?? []

      // Delete merged circuit
      circuits.splice(b1, 1)
    }
  }


  const counts = circuits
    .map((circuit) => circuit.length)
    .sort((a, b) => b - a)
    .splice(0, 3)
    .reduce((value, item) => item * value, 1)

  return counts
}
