// Array.prototype.lastIndexOf()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf


/*
Parameters
  searchElement
    Element to locate in the array.

  fromIndex
    Optional. The index at which to start searching backwards. Defaults to the array's length minus one, i.e. the whole array will be searched. If the index is greater than or equal to the length of the array, the whole array will be searched. If negative, it is taken as the offset from the end of the array. Note that even when the index is negative, the array is still searched from back to front. If the calculated index is less than 0, -1 is returned, i.e. the array will not be searched.
*/

export const lastIndexOfFN = (arr, searchElement, fromIndex) => arr.lastIndexOf(searchElement)

// I guess I can't do :
// arr.lastIndexOf(searchElement, fromIndex)
// Or I get an incorect results.
// I seems like fromIndex is defaulting to 0 maybe?
