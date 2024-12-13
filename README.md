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

Using Node

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

## Alternate Usage

Using Docker

- Build the image
   ```
   docker compose -f docker-compose.dev.yml build
   ```

- Transpile the TypeScript files to JavaScript (PowerShell)
   ```
   docker run -it -v ${pwd}:/opt/app -v /opt/app/node_modules --rm weaponsforge/adventofcode:dev npm run transpile
   ```

- Run tests (PowerShell)
   ```
   docker run -it -v ${pwd}:/opt/app -v /opt/app/node_modules --rm weaponsforge/adventofcode:dev npm test
   ```

- Watch TS file updates: Use available scripts - `npm run watch`, `npm run watch:docker:win`
   ```
   docker run -it -v ${pwd}:/opt/app -v /opt/app/node_modules --rm weaponsforge/adventofcode:dev <AVAILABLE_SCRIPT>
   ```

## Available Scripts

### `npm run dev`

Runs `vitest` in watch mode, watching file changes and errors to files linked with `*.test.ts` files.

### `npm run watch`

Watches file changes in `.ts` files using the `tsc --watch` option.

### `npm run watch:docker:win`

Watches file changes in `.ts` files using the `tsc --watch` option with `dynamicPriorityPolling` in Docker containers running in Windows WSL2.

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
