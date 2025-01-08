
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

/**
 * Input parameters of the `countTokensPrizes()` function
 * @interface CountTokensParams
 * @param {MatrixData<number[]>} data - Processed quiz data object containing 2D number matrices
 * @param {boolean} log - Flag to print the log messages to screen
 * @param {boolean} movePrice - Flag to adjust the prizes (x,y) coordinates by `10000000000000`
 */
export interface CountTokensParams {
  data: MatrixData<number[]>;
  log?: boolean;
  movePrice?: boolean;
}
