## ✨ adventofcode

This repository contains solutions and a local development environment for the [Advent of Code](https://adventofcode.com/) event puzzles using **TypeScript/JavaScript**.

- The code repository structure follows a way that discusses and walks through the solution steps for the AoC quizzes rather than focusing on AoC's competitive programming.
- The quizzes were solved for fun (unlocking the 2024 AoC Chrismas symbol 🎄) and brain exercise purposes. Therefore, no GPT or AI completion was used for solving, as advised on the AoC website.
- These codes may get occasional optimization updates or solutions using other languages from time to time.

### 🎄 Advent of Code Quiz Information

<details>
<summary><b style="font-size: 24px;">2024</b></summary>

- Day 1: Historian Hysteria [[link]](/src/2024/2024-12-01/README.md)
- Day 2: Red-Nosed Reports [[link]](/src/2024/2024-12-02/README.md)
- Day 3: Mull It Over [[link]](/src/2024/2024-12-03/README.md)
- Day 4: Ceres Search [[link]](/src/2024/2024-12-04/README.md)
- Day 5: Print Queue [[link]](/src/2024/2024-12-05/README.md)
- Day 6: Guard Gallivant [[link]](/src/2024/2024-12-06/README.md)
- Day 7: Bridge Repair [[link]](/src/2024/2024-12-07/README.md)
- Day 8: Resonant Collinearity [[link]](/src/2024/2024-12-08/README.md)
- Day 9: Disk Fragmenter [[link]](/src/2024/2024-12-09/README.md)
- Day 10: Hoof It [[link]](/src/2024/2024-12-10/README.md)
- Day 11: Plutonian Pebbles [[link]](/src/2024/2024-12-11/README.md)
- Day 12: Garden Groups [[link]](/src/2024/2024-12-12/README.md)
- Day 13: Claw Contraption [[link]](/src/2024/2024-12-13/README.md)
- Day 14: Restroom Redoubt [[link]](/src/2024/2024-12-14/README.md)
- Day 15: Warehouse Woes [[link]](/src/2024/2024-12-15/README.md)

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
> └─ 📂 aoc<br>
> └─ 📂 sample<br>
> └─ 📂 2024<br>
> └─── 📂 2024-12-01<br>
> └───── 📂 lib<br>
> └───── 📄 input.txt<br>
> └───── 📄 main.ts<br>
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

Each Advent of Code (AoC) event quiz has its folder under **`"/src/<YEAR>/<YYYY-MM-DD>"`** containing:
- **/lib**: Folder containing main quiz solution logic
- **input.txt**: Random quiz input
   > _**INFO:** The sample quiz inputs were slightly altered from the original AoC input text and quiz samples as advised on their website_
- **main.ts**: Main program entry point containing quiz answer(s) using random input
- **sample.test.ts**: Minimal sample input with expected correct answers
- **README.md**: Reference and other notes about the AoC quiz question

#### Other Items

- **/src/aoc**: 🗃️ Folder containing generic utility and common AoC helper functions
- **/src/dist**: Folder containing the JavaScript files compiled from TypeScript (not committed to the repository)
- **/src/sample**: Miscellaneous random examples
- **/src/index.ts**: Exports all solutions to AoC quiz answer functions

### 📋 Requirements

- Node v20.15.0 (at least)
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

1. (Optional) Replace the values of specific `input.txt` in the `"/src/<YEAR>/<YYYY-MM-DD>"` directories with actual AoC input.
2. Run a non-test TypeScript file inside the **/src** directory from the project's _**"root directory"**_. For example:
   ```
   npx vite-node src/sample/sample.ts
   ```

   ```
   npx vite-node src/2024/2024-12-01/main.ts
   ```
3. Run compiled JavaScript code from the TypeScript files. For example:
   ```
   npm run transpile
   node dist/sample/sample.js
   ```
4. See the [Available Scripts](#-available-scripts) section for more information.

## ⚡ Alternate Usage

Using Docker

- **Build the image**
   ```
   docker compose -f docker-compose.dev.yml build
   ```

- **Transpile the TypeScript files to JavaScript** (PowerShell)
   ```
   docker run -it -v ${pwd}:/opt/app -v /opt/app/node_modules --rm weaponsforge/adventofcode:dev npm run transpile
   ```

- **Run tests** (PowerShell)
   ```
   docker run -it -v ${pwd}:/opt/app -v /opt/app/node_modules --rm weaponsforge/adventofcode:dev npm test
   ```

- **Watch TS file updates: Use available scripts** - `npm run watch`, `npm run watch:docker:win`
   ```
   docker run -it -v ${pwd}:/opt/app -v /opt/app/node_modules --rm weaponsforge/adventofcode:dev <AVAILABLE_SCRIPT>
   ```

- **Run a script and debug it with the VSCode Debugger**
   - Prepare a function for debugging with VSCode in Docker. Wrap it in the `AOCRunScript()` function.
   - Assign the path to a TypeScript file from the previous step to the package.json file's `"dev:debug:docker"` script, replacing `src/sample/sample.ts`.
      - `"dev:debug:docker": "export IS_DOCKER=true && node --inspect=0.0.0.0:9229 ./node_modules/.bin/vite-node src/path/to/script.ts"`
   - Run the script with VSCode debugging:
      ```
      docker run -it -v ${pwd}:/opt/app -v /opt/app/node_modules --rm weaponsforge/adventofcode:dev npm run dev:debug:docker
      ```
   > **INFO:** This process requires attaching a debugger with the VSCode launch config defined in Issue [#53](https://github.com/weaponsforge/adventofcode/issues/53)

   <details>
   <summary>VSCode Launch Configuration</summary>

   ```json
   {
     "version": "0.2.0",
     "configurations": [
       {
         "type": "node",
         "request": "attach",
         "name": "Attach to Docker",
         "address": "localhost",
         "port": 9229,
         "restart": true,
         "skipFiles": ["<node_internals>/**"],
         "localRoot": "${workspaceFolder}",
         "remoteRoot": "/opt/app"
       }
     ]
   }
   ```

   </details>

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

### `npm run transpile:noemit`

Runs type-checking without generating the JavaScript or declatation files from the TypeScript files.

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
