// Array.prototype.sort()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// The sort() method sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points.

/*
Parameters

compareFunction
  Optional. Specifies a function that defines the sort order. If omitted, the array is sorted according to each character's Unicode code point value, according to the string conversion of each element.
*/

export const sortFN = (arr, fn) => arr.sort(fn)

export function upFN (a, b) {
  return b - a
}

export function downFN (a, b) {
  return a - b
}
