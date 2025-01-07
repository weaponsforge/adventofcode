
/**
 * @type {Record<number, T[]>} MatrixData
 */
export type MatrixData<T> = Record<number, T[]>

/**
 * @type {Object} StepsTokens
 * @property {number} prizes - Number of prizes to win
 * @property {number} tokens - Minimum number of tokens to move the A/B buttons
 */
export type StepsTokens = {
  prizes: number;
  tokens: number;
}
