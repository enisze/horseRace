/**
 * Promise which throws an error after the given time
 */
export const timeout = (time: number) => {
  return new Promise<never>((_, reject) => {
    setTimeout(() => {
      return reject(new Error(`Timeout of ${time}ms exceeded.`))
    }, time)
  })
}

/**
 * Waits for the given promise
 * to fulfill in the given time,
 * otherwise it throws an error
 */
export const withTimeout = (
  time: number,
): (<T>(promise: Promise<T>) => Promise<T>) => {
  return (promise) => {
    return Promise.race([promise, timeout(time)])
  }
}
