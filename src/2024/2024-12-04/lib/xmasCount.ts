import { checkDiagonal } from './wordCheckerUtils.js'

/**
 * Counts the number of (2x) crossed "MAS" words overlapping at the letter "A"
 * @param data {CharacterArray} 2D string array containing the input text
 * @param WORD_TO_FIND {string} Word to find ("MAS")
 * @returns  {number} Number of overlapping crossed-over ("MAS") `WORD`s
 */
export const countMASword = (data: string[][], WORD_TO_FIND: string = 'MAS'): number => {
  const wordLength = WORD_TO_FIND.length
  const middleZeroBasedIndex = (Math.floor(wordLength / 2) + wordLength % 2) - 1
  const offset = middleZeroBasedIndex
  const reverseWord = WORD_TO_FIND.split('').reverse().join('')

  let count = 0

  for (let y = 0; y < data.length; y += 1) {
    const row = data[y]

    if (row === undefined) continue

    for (let x = 0; x < row.length; x += 1) {
      const letter = row[x]

      if (letter !== WORD_TO_FIND[middleZeroBasedIndex]) continue

      if (
        (checkDiagonal(
          { x: x + offset, y: y - offset },
          { xDirection: -1, yDirection: 1, data },
          WORD_TO_FIND
        ) ||
        checkDiagonal(
          { x: x + offset, y: y - offset },
          { xDirection: -1, yDirection: 1, data },
          reverseWord)
        ) &&

        (checkDiagonal(
          { x: x + offset, y: y + offset },
          { xDirection: -1, yDirection: -1, data },
          WORD_TO_FIND
        ) ||
        checkDiagonal(
          { x: x + offset, y: y + offset },
          { xDirection: -1, yDirection: -1, data },
          reverseWord)
        )
      ) {
        count += 1
      }
    }
  }

  return count
}
