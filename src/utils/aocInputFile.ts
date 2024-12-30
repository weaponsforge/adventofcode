// This code contains file input readers for common AoC input types.
import { readFile } from './file.js'

/**
 * Definitions of the privimite types (`AOCFileOutput`) in which to convert the AoC quiz input text file.
 * - `STRING` - String of text: `string`
 * - `STRING_ARRAY`- Array of strings: `string[]`
 * - `STRING_ARRAY_2D` - 2D array of strings: `string[][]`
 * - `NUMBER_ARRAY` - Array of numbers: `number[]`
 * - `NUMBER_ARRAY_2D` - 2D array of numbers: `number[][]`
 */
export enum AOC_OUTPUT_TYPE {
  STRING = 'string',
  STRING_ARRAY = 'string_array',
  STRING_ARRAY_2D = '2d_string_array',
  NUMBER_ARRAY = 'number_array',
  NUMBER_ARRAY_2D = '2d_number_array'
}

/**
 * Input parameters indicating details about the AoC quiz input file.
 * @param {string} filePath - Full file path to and input text file.
 * @param {AOC_OUTPUT_TYPE} type - Type to convert the input text file. One of `AOC_OUTPUT_TYPE`.
 * @param {delimiter} delimiter - String delimiter to `split()` between characters in the original text file. Defaults to none.
 */
type AOCFileInput = {
  filePath: string;
  type: AOC_OUTPUT_TYPE;
  delimiter?: string;
}

/**
 * Represents common primitive types in which to convert the AoC quiz input
 */
type AOCFileOutput = string | string[] | string[][] |
  number[] | number[][]

/**
 * Reads common AoC input text files and converts them into one of `AOCFileOutput` for data processing.
 * @param {AOCFileInput} param File input definitions.
 *  - See `AOCFileInput` type for detailed definitions of the properties.
 * @returns {AOCFileOutput} Input text file converted into one of `AOCFileOutput`
 * @throws {Error}
 */
export const readAOCInputFile = (param: AOCFileInput): AOCFileOutput => {
  const file = readFile(param.filePath)
  const delimiter = param?.delimiter ?? ''

  if (file === undefined) {
    throw new Error('Undefined file')
  }

  switch(param.type) {
  case AOC_OUTPUT_TYPE.STRING:
    return file as string

  case AOC_OUTPUT_TYPE.STRING_ARRAY:
    return file.split(delimiter) as string[] || []

  case AOC_OUTPUT_TYPE.STRING_ARRAY_2D:
    return file
      .split('\n')
      .map(row => row.split(delimiter)) as string[][] || []

  case AOC_OUTPUT_TYPE.NUMBER_ARRAY:
    return file
      .split('')
      .map(Number) as number[] || []

  case AOC_OUTPUT_TYPE.NUMBER_ARRAY_2D:
    return file
      .split('\n')
      .map(row => row.split(delimiter).map(Number)) as number[][] || []

  default:
    throw new Error('Unsupported type')
  }
}
