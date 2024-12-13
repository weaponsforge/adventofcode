## ✨ adventofcode

This repository contains solutions and a local development environment for the [Advent of Code](https://adventofcode.com/) event puzzles.

### 🎄 Advent of Code Quiz Information

<details>
<summary><b style="font-size: 24px;">2024</b></summary>

- Day 1: Historian Hysteria [[link]](/src/2024/2024-12-01/README.md)

</details>

### Table of Contents

<details>
<summary>Click to expand the table of contents</summary>

- [Advent of Code Quiz Information](#-advent-of-code-quiz-information)
- [Project Folder Structure](#-project-folder-structure)
- [Requirements](#-requirements)
- [Installation](#%EF%B8%8F-installation)
- [Usage](#-usage)
- [Alternate Usage](#-alternate-usage)
- [Available Scripts](#-available-scripts)

</details>

## 📚 Project Folder Structure

It follows the directory structure:

> [!NOTE]
> 📂 dist<br>
> 📂 src<br>
> └─ 📂 lib<br>
> └─ 📂 sample<br>
> └─ 📂 2024<br>
> └─── 📂 2024-12-01<br>
> └───── 📂 lib<br>
> └───── 📄 input.txt<br>
> └───── 📄 quiz.ts<br>
> └───── 📄 quiz.test.ts<br>
> └───── 📄 sample.test.ts<br>
> └───── 📄 README.md<br>
> └─── 📂 2024-12-02<br>
> └─── 📂 ...<br>
> └─ 📂 2025<br>
> └─ 📂 ...<br>
> └─ 📄 index.ts<br>
> └─ 📄 ...<br>
> 📄 README.md

#### Quiz Folders

Each Advent of Code (AOC) event quiz has its folder under **`"/src/<YEAR>/<YYYY-MM-DD>"`** containing:
- **/lib**: Folder containing main quiz solution logic
- **input.txt**: Quiz input from AOC
- **quiz.ts**: Quiz answer(s) validated with AOC
- **quiz.test.ts**: Test of the correct quiz answers
- **sample.test.ts**: Minimal sample input with expected correct answers
- **README.md**: Static copy of the AOC quiz question

#### Other Items

- **/src/lib**: Folder containing generic utility helper functions
- **/src/dist**: Folder containing the JavaScript files compiled from TypeScript (not committed to the repository)
- **/src/sample**: Miscellaneous random examples
- **/src/index.ts**: Exports all solutions to AOC quiz answer functions

### 📋 Requirements

- Node v20.15.0
   - node: 20.15.0
   - npm: 10.7.0

- Docker (optional)

## 🛠️ Installation

1. Clone the repository.
   ```
   git clone https://github.com/weaponsforge/adventofcode.git
   ```

2. Install dependencies.
   ```
   npm install
   ```

## 🚀 Usage

Using Node

1. Run a non-test TypeScript file inside the **/src** directory. For example:

   ```
   npx vite-node src/sample/sample.ts
   ```
2. Run compiled JavaScript code from the TypeScript files. For example:
   ```
   npm run transpile
   node dist/sample/sample.js
   ```
3. See the [Available Scripts](#available-scripts) section for more information.

## ⚡ Alternate Usage

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

## 📜 Available Scripts

<details>
<summary>Click to expand the list of available scripts</summary>

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

</details>
<br>

@weaponsforge<br>
20241213
