enum DIRECTION {
  ASC = 'ascending',
  DESC = 'descending',
  IDLE = 'idle'
}

interface CurrentState {
  level: number;
  direction: DIRECTION;
}

/**
 * Checks if a report is safe
 * @param report {number[]} Array of reports containing levels (numbers)
 * @returns {boolean} Flag that indicates if a report is safe
 */
const isReportSafe = (report: number[]): boolean => {
  const maxSteps = 3
  const minSteps = 1

  let safeLevelsCount = 1

  const currentState: CurrentState = {
    level: report[0] as number,
    direction: DIRECTION.IDLE
  }

  for (let i = 1; i < report.length; i += 1) {
    const newLevel = report[i] as number

    let newDirection = currentState.direction
    const steps = Math.abs(newLevel - currentState.level)

    if (newLevel > currentState.level) {
      newDirection = DIRECTION.ASC
    } else if (newLevel < currentState.level) {
      newDirection = DIRECTION.DESC
    }

    if ( // There's a change in a non-IDLE direction
      currentState.direction !== DIRECTION.IDLE &&
      newDirection !== currentState.direction
    ) break

    // Illegal amounts of increase/decrease
    if (steps > maxSteps || steps < minSteps) break

    currentState.level = newLevel
    currentState.direction = newDirection
    safeLevelsCount += 1
  }

  return safeLevelsCount === report.length
}

/**
 * Removes a single level (number) from an unsafe report until it finds a safe pattern or until all levels are removed and retried safety checking
 * @param report {number[]} Array of reports containing levels (numbers)
 * @returns {boolean} Flag that indicates if an unsafe report is safe or still unsafe
 */
const problemDampener = (report: number[]): boolean => {
  let isSafe = false

  for (let i = 0; i < report.length; i += 1) {
    const removeLevelIndex = i
    const reportMod = report.filter((_, index) => index !== removeLevelIndex)

    if (isReportSafe(reportMod)) {
      isSafe = true
      break
    }
  }

  return isSafe
}

/**
 * Counts the number of safe reports (row)
 * @param list {number[]} Array of arrays of reports (numbers)
 * @param withDampener {boolean} Flag to remove one level at a time from an unsafe report and retry checking its safety
 * @returns {number} Number of safe reports
 */
export const countSafeReports = (
  list: number[][],
  withDampener: boolean = false
): number => {
  let safeCount = 0

  if (!Array.isArray(list)) {
    throw new Error('Invalid input - not an array')
  }

  for (let i = 0; i < list.length; i += 1) {
    const report: number[] = list[i] ?? []

    if (!Array.isArray(report)) continue

    // Reports have at least 2 levels to compare
    if (report.length < 2) continue

    // Check valid report levels (items) - all are numbers
    if (report.filter(level => typeof level !== 'number').length > 0) continue

    if (isReportSafe(report)) {
      safeCount += 1
    } else {
      if (withDampener) {
        if (problemDampener(report)) {
          safeCount += 1
        }
      }
    }
  }

  return safeCount
}
