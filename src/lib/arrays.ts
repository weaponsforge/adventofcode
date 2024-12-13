export enum ARRAY_ORDERING {
  ASC,
  DESC
}

/**
 * Array sorting function that arranges array items in ascending or descending order.
 * @param order Ascending or descending array ordering (ARRAY_ORDERING)
 * @returns
 */
export const arrangeArray = (order: ARRAY_ORDERING) =>
  (a: number | string, b: number | string): number => {
    if (order === ARRAY_ORDERING.ASC) {
      return (a < b ? -1 : 1)
    } else if (order === ARRAY_ORDERING.DESC) {
      return (a > b ? -1 : 1)
    } else {
      throw new Error('Invalid ordering')
    }
  }
