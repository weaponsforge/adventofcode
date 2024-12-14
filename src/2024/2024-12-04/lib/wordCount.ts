import { checkVertical, checkHorizontal, checkDiagonal } from './wordCheckerUtils.js'

/**
 * Counts the number of occurence of the `WORD` from a set of input
 * @param data {CharacterArray} 2D string array containing the input text
 * @param WORD_TO_FIND {string} Word to find
 * @returns {number} Number of `WORD`s
 */
export const wordCount = (data: string[][], WORD_TO_FIND: string): number => {
  let xmasCount = 0
  const firstLetter = WORD_TO_FIND[0]

  for (let y = 0; y < data.length; y += 1) {
    const row = data[y]

    if (!Array.isArray(row)) continue

    if (row.filter(
      item => typeof item !== 'string').length > 0
    ) continue

    for (let x = 0; x < row.length; x += 1) {
      const letter = row[x]

      if (letter !== firstLetter) continue

      // Check WORD_TO_FIND down
      if (checkVertical(
        { x, y, direction: 1 }, data, WORD_TO_FIND)) xmasCount += 1

      // Check WORD_TO_FIND up
      if (checkVertical(
        { x, y, direction: -1 }, data, WORD_TO_FIND)) xmasCount += 1

      // Check WORD_TO_FIND right
      if (checkHorizontal(
        { x, y, direction: 1 }, row, WORD_TO_FIND)) xmasCount += 1

      // Check WORD_TO_FIND left
      if (checkHorizontal(
        { x, y, direction: -1 }, row, WORD_TO_FIND)) xmasCount += 1

      // Check WORD_TO_FIND diagonally right-up
      if (checkDiagonal(
        { x, y },
        { xDirection: 1, yDirection: -1, data },
        WORD_TO_FIND
      )) {
        xmasCount += 1
      }

      // Check WORD_TO_FIND diagonally right-down
      if (checkDiagonal(
        { x, y },
        { xDirection: 1, yDirection: 1, data },
        WORD_TO_FIND
      )) {
        xmasCount += 1
      }

      // Check WORD_TO_FIND diagonally left-up
      if (checkDiagonal(
        { x, y },
        { xDirection: -1, yDirection: -1, data },
        WORD_TO_FIND
      )) {
        xmasCount += 1
      }

      // Check WORD_TO_FIND diagonally left-down
      if (checkDiagonal(
        { x, y },
        { xDirection: -1, yDirection: 1, data },
        WORD_TO_FIND
      )) {
        xmasCount += 1
      }
    }
  }

  return xmasCount
}
