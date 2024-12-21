// This code contains file input readers for common AoC input types.
import { readFile } from './file.js'

export enum AOC_OUTPUT_TYPE {
  STRING = 'string',
  STRING_ARRAY = 'string_array',
  STRING_ARRAY_2D = '2d_string_array',
  NUMBER_ARRAY = 'number_array',
  NUMBER_ARRAY_2D = '2d_number_array'
}

type FileInput = {
  /** @param filePath {string} Full file path to input file */
  filePath: string;
  type: AOC_OUTPUT_TYPE;
  delimiter?: string;
}

type Output = string | string[] | string[][] |
  number[] | number[][]

/**
 * Reads common AoC input text files.
 * @typedef param {FileInput} File input definitions
 * @param param.filePath {string} Full file path to an input text file
 * @param param.type {AOC_OUTPUT_TYPE} Type to convert the input text file
 * @param param.delimiter {string} String delimiter
 * @throws {Error}
 */
export const readAOCInputFile = (param: FileInput): Output => {
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
