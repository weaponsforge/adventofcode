import fs from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

/**
 * Get the full file path `"__dirname"` of the current directory of a module file
 * (scripts running as ESM modules whose package.json has `"type": "module"`)
 * @param moduleFile {string} File URL of the current module being executed: `"import.meta.url"`
 * @returns Full file path to the directory of the calling file/module also know as `__dirname` in CommonJS
 */
export const currentDirectory = (moduleFile: string): string => {
  const filePath = fileURLToPath(moduleFile)
  return dirname(filePath)
}

/**
 * Reads file from disk
 * @param pathToFile Full file path to a target file
 * @returns {string} String version of the file contents
 */
export const readFile = (pathToFile: string): string => {
  return fs.readFileSync(pathToFile, 'utf-8')
}
