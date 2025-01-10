## aoc

This folder contains common AoC-related types, scripts, and other generic helper utility functions.

### 📂 `array`

#### `utils.ts`

A collection handler functions for manipulating regular arrays.

- **`arrangeArray()`** - Array sorting function that arranges array items in ascending or descending order.
- **`arrayToObject()`** - Converts an array of numbers to an Object, using the array number elements as keys with a default numeric value of `1`
- **`arrayMiddleIndex()`** - Retrieves the middle (center) index of an array
- **`uniformArrayElements()`** - Checks if array elements have the same type using `typeof` and have no null or undefined values

### 📂 `file`

- **`utils.ts`** - ES modules file and directory handlers
- **`aocfile.ts`** - Functions for reading common-format AoC file input (arrays of `strings` or `numbers`)

### 📂 `grid`

#### `utils.ts`

A collection of convenience handler functions for AoC 2D input arrays.

- **`getCoordinateSymbol()`** - Converts a 2D `Point` point object to a string and returns its value from the 2D `string` or `number` array
- **`getGridDimensions()`** - Retrieves the length and width of a generic 2D array
- **`isIllegalCoordinate()`** - Checks if a point at coordinate (y,x) in a grid is illegal: if it's out of bounds of the grid area or if its symbol differs from the symbol parameter.
- **`isOutOfBounds()`** - Checks if a (y,x) coordinate is out of the grid area
- **`getDiagonalNeighbors()`** - Retrieves the four (4) diagonally aligned (y,x) coordinates and the symbol character from a `Point` in the grid. Substitutes a `"*"` symbol character in the `PointSymbol.symbol`if the `point` is out of the grid bounds.
- **`getCrossNeighbors()`** - Retrieves the four (4) horizontal/vertical aligned (y,x) coordinates and the symbol character from a `Point` in the grid. Substitutes a `"*"` symbol character in the `PointSymbol.symbol`if the `point` is out of the grid bounds.
- **`printGrid()`** - Prints the contents of a 2D `string` or `number` array to screen.

### 📂 `number`

#### `utils.ts`

- **`isNumber()`** - Checks if a number-like input is a number
- **`isEvenDigits()`** - Checks if a number has an even number of digits

### 📂 `point`

#### `utils.ts`

- **`findNeighbors()`** - Finds all coordinates of the neighboring plots from a specified coordinate (up/down/left/right)
- **`isDiagonal()`** - Checks if two (2) `Points` are diagonally aligned


