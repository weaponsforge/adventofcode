import { fileReader } from './lib/fileReader.js'
import { countSafeReports } from './lib/countSafeReports.js'

const input = fileReader()

/**
 * Part 1/2 of the 2024-12-02 quiz
 * @returns {number} Number of safe reports
 */
export const quiz20241202_01 = (): number => {
  // Count the number of safe reports
  const countSafe = countSafeReports(input)

  console.log('NO. OF SAFE REPORTS:', countSafe)
  return countSafe
}
