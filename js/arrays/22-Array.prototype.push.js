// Array.prototype.push()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

// The push() method adds one or more elements to the end of an array and returns the new length of the array.

export const pushFN = (arr, ...num) => {
  arr.push(...num)
  return arr
}
