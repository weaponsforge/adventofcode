import type { CircuitDataType } from './fileReader.js'

/**
 * Calculates the product of the sizes of the 3 largest circuits.
 * @param {number[][]} circuitData - 2D number array junction boxes input data.
 * @param {number} maxConnections - Number of junction box connections to form.
 * @returns {number} Value of the 3 largest circuits multiplied.
 */
export const threeLargestCircuits = (circuitData: CircuitDataType, maxConnections = 10) => {
  const { distances, coordinates } = circuitData

  const circuits: number[][] = []

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

/**
 * Connects junction boxes to form 1 circuit, then computes the product of the last 2 circuit's x=coordinates.
 * @param {number[][]} circuitData - 2D number array junction boxes input data.
 * @returns {number} Product of the final circuit's last 2 x=coordinates.
 */
export  const singleCircuit = (circuitData: CircuitDataType) => {
  const { distances, coordinates } = circuitData

  const circuits: number[][] = []

  // Initialize circuits
  for (let i = 0; i < coordinates.length; i += 1) {
    circuits.push([i])
  }

  let i = 0

  // Connect available junction boxes until they form 1 circuit
  while (circuits.length !== 1) {
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

    i += 1
  }

  const [p1=-1, p2=-1] = distances[i - 1]?.indices ?? []

  const x1 = coordinates[p1]?.[0] ?? -1
  const x2 = coordinates[p2]?.[0] ?? -1
  const xCoordsMultiplied = x1 * x2

  return xCoordsMultiplied
}
