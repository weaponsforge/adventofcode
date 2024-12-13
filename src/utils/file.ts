import fs from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

/**
 * Get the full file path of the current directory.
 * @param moduleFile {string} File URL of the current module being executed: `"import.meta.url"`
 * @returns Full file path to the directory of the calling file/module
 */
export const currentDirectory = (moduleFile: string): string => {
  const filePath = fileURLToPath(moduleFile)
  return dirname(filePath)
}

/**
 * Reads file from disk
 * @param pathToFile Full file path to a target file
 * @returns {string} String version of the file
 */
export const readFile = (pathToFile: string): string => {
  return fs.readFileSync(pathToFile, 'utf-8')
}
