/**
 * Defers executing a function by `timeout` milliseconds.
 * @param {Function} callback - A function declaration or expression
 * @param {number} [timeout] - (Optional) Number in milliseconds to defer executing the `callback` function. Default value is `5000` (5 seconds)
 */
export const AOCDeferExecution = (callback: () => void, timeout: number = 5000): void => {
  setTimeout(() => {
    callback()
  }, timeout)
}

/**
 * A wrapper that runs a function or defers running a function by `timeout` milliseconds if it runs in a Docker container.
 * The `IS_DOCKER=true` environment variable indicates running inside a Docker container.
 * @param {Function} callback - A function declaration or expression
 * @param {number} [timeout] - (Optional) Number in milliseconds to defer executing the `callback` function. Default value is `5000` (5 seconds)
 */
export const AOCRunScript = (callback: () => void, timeout: number = 5000): void => {
  if (process.env.IS_DOCKER) {
    AOCDeferExecution(callback, timeout)
  } else {
    callback()
  }
}
