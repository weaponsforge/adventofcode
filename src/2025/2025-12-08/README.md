## Day 8: Playground

Visit the Advent of Code website for more information on this puzzle at:

**Source:** https://adventofcode.com/2025/day/8<br>
**Status:** On-going ⭐

<br>

| Code | Description |
| --- | --- |
| **fileReader.ts** | **`fileReader()`**<br>Creates a `CircuitDataType[]` Object `{ distances, coordinates }` containing the array indices of pairs of 3D point coordinates in `{ distances.indices[] }` sorted from min-max of their square distances in `{ distances.distance }` and the input 3D coordinates in `{ coordinates }`. |
| **distance3d.ts** | **`threeLargestCircuits()`**<br>Multiplies the sizes of the 3 largest circuits. |

### References

- [Euclidean Distance](https://en.wikipedia.org/wiki/Euclidean_distance)
- [Minimum Spanning Tree (MST)](https://www.geeksforgeeks.org/dsa/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/)
