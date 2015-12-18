// Array.prototype.unshift()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

export const unshiftFN = (arr, item) => {
  arr.unshift(item)
  return arr
}
