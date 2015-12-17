// Array.prototype.indexOf()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

/*
Parameters

  searchElement
    Element to locate in the array.

  fromIndex
    The index to start the search at. If the index is greater than or equal to the array's length, -1 is returned, which means the array will not be searched. If the provided index value is a negative number, it is taken as the offset from the end of the array. Note: if the provided index is negative, the array is still searched from front to back. If the calculated index is less than 0, then the whole array will be searched. Default: 0 (entire array is searched).
 */

export const indexOfFN = (arr, searchElement, fromIndex) => arr.indexOf(searchElement, fromIndex)

export const indexOfMany = (arr, searchElement, fromIndex) => {
  let all = []
  let idx = arr.indexOf(searchElement)
  while (idx !== -1) {
    all.push(idx)
    idx = arr.indexOf(searchElement, idx + 1)
  }
  return all
}

export const indexUpdater = (arr, item) => {
  if (arr.indexOf(item) === -1) {
    arr.push(item)
    return arr
  } else if (arr.indexOf(item) > -1) {
    return arr
  }
}
