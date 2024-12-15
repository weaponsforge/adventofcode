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

/**
 * Checks if array elements have the same type and has no null or undefined values
 * @param items {S[]} array of elements
 * @param type {T} type name of the elements inside the `items` array
 * @returns {boolean} Flag indicating if all array elements have the same type
 */
export const uniformArrayElements = <S, T>(items: S[], type: T): boolean => {
  return (
    items.filter(value => typeof value === type).length === items.length
  )
}

/**
 * Retrieves the middle (center) index of an array
 * @param list {T[]} 1-dimensional array
 * @returns {number} Middle index of an array
 */
export const arrayMiddleIndex = <T>(list: T[]): number => {
  return Math.floor(list.length / 2) + list.length % 2
}
