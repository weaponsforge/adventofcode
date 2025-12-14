import { AOCOutputType, readAOCInputFile } from '@/aoc/file/aocfile.js'

export type RangeIdType = {
  min: number;
  max: number;
}

/**
 * Reads the input file into an `RangeIdType[]` array.
 * Each element consists of a `RangeIdType` object with a `min` and `max` ID range values.
 * @returns {RangeIdType[]} - parsed and formatted input
 */
export const fileReader = (inputFilePath: string): RangeIdType[] => {
  const input = readAOCInputFile({
    filePath: inputFilePath,
    type: AOCOutputType.STRING_ARRAY,
    delimiter: ','
  }) as string[]

  return input
    .map((rangeIdString: string) => {
      const range = rangeIdString.split('-')
      const min = range[0] ?? -1
      const max = range[1] ?? -1

      return {
        min: Number(min),
        max: Number(max)
      }
    })
}
