import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

/**
 * Get the full file path of the current directory of a module file equivalent to `"__dirname"`.
 * (scripts running as ESM modules whose package.json has `"type": "module"`)
 * @param {string} moduleFile - File URL of the current module being executed: `"import.meta.url"`
 * @returns {string} Full file path to the directory of the calling file/module also know as `__dirname` in CommonJS
 */
export const directory = (moduleFile: string): string => {
  const filePath = fileURLToPath(moduleFile)
  return dirname(filePath)
}

/**
 * Reads file from disk
 * @param {string} pathToFile - Full file path to a target file
 * @returns {string} String version of the file contents
 */
export const readFile = (pathToFile: string): string => {
  return fs.readFileSync(pathToFile, 'utf-8')
}

/**
 * Get the full system file path to a file
 * @param {string} moduleFile - File URL of the current module being executed: `"import.meta.url"`
 * @param {string} fileName - File name relative to the calling directory (`moduleFile`), eg: `input.txt`, `../input.txt`, or `some/folder/input.txt`
 * @returns {string} Full file path to a file
 */
export const file = (moduleFile: string, fileName: string) => {
  return path.join(directory(moduleFile), fileName)
}
