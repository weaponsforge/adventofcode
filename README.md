## adventofcode

Solutions for [Advent of Code](https://adventofcode.com/) event puzzles.

### Requirements

- Node v20.15.0
   - node: 20.15.0
   - npm: 10.7.0

## Installation

1. Clone the repository.
   ```
   git clone https://github.com/weaponsforge/adventofcode.git
   ```

2. Install dependencies.
   ```
   npm install
   ```


## Usage

1. Run a TypeScript file inside the **/src** directory. For example:

   ```
   npx vite-node src/sample/sample.ts
   ```
2. Run compiled JavaScript code from the TypeScript files. For example:
   ```
   npm run transpile
   node dist/sample/sample.js
   ```
3. See the [Available Scripts](#available-scripts) section for more information.

## Available Scripts

### `npm run dev`

Runs `vitest` in watch mode, watching file changes and errors to files linked with `*.test.ts` files.

### `npm run dev:debug`

Runs the sample TS script.

### `npm run transpile`

Builds the JavaScript files from the TypeScript files.

### `npm run lint`

Lints TypeScript source codes.

### `npm run lint:fix`

Fixes TypeScript lint errors.

### `npm test`

Runs tests defined in `*.test.ts` files.

@weaponsforge<br>
20241213
