import { AOCOutputType, readAOCInputFile } from '@/aoc/file/aocfile.js'

export type InredientIdRange = {
  min: number;
  max: number;
}

export type IngredientsDBType = {
  freshIds: InredientIdRange[];
  availableIds: number[];
}

/**
 * Reads the input file and returns an `IngredientsDBType` object.
 * @param inputFilePath - Complete system file path to the input file.
 * @returns {IngredientsDBType} An object `{ freshIds[], availableIds[] }` containing a list of the ID ranges of fresh ingredients (`freshIds`) and a list of available ingredients (`availableIds`).
 */
export const fileReader = (inputFilePath: string): IngredientsDBType => {
  const input = readAOCInputFile({
    filePath: inputFilePath,
    type: AOCOutputType.STRING_ARRAY,
    delimiter: '\n'
  }) as string[]

  const freshIds: InredientIdRange[] = []
  const availableIds: number[] = []

  const lineIndex = input.indexOf('')

  // Process the fresh ingredient IDs
  for (let i = 0; i < lineIndex; i += 1) {
    const range = input[i]?.split('-')
    const min = range?.[0] ?? -1
    const max = range?.[1] ?? -1

    freshIds.push({
      min: Number(min),
      max: Number(max)
    })
  }

  // Process the available ingredient IDs
  for (let i = lineIndex + 1; i < input.length; i += 1) {
    availableIds.push(Number(input[i]))
  }

  return {
    freshIds,
    availableIds
  }
}
