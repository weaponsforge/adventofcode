/**
 * Data returned by the trailhead scores counting function.
 * @param {Record<string, string[]>} scores - Object list of trailhead scores per (y,x) coordinate that starts with a unique `0` and ends with a `9`
 * @param {number} total - Total sum of the `scores`
 */
export type TrailScores = {
  scores: Record<string, string[]>,
  total: number;
}

/**
 * Input settings options parameters for the Day 10 quiz
 * @param {boolean} [printLog] - (Optional) Flag to display the miscellaneous data processing logs.
 * @param {boolean} [isRating] - (Optional) Flag to calculate the trailhead rating instead of the score.
 */
export type InputOptions = {
  printLog?: boolean;
  isRating?: boolean;
}
