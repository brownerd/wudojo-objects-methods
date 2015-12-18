// Array.prototype.shift()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

// The shift() method removes the first element from an array and returns that element. This method changes the length of the array.

/*
Description
  The shift method removes the element at the zeroeth index and shifts the values at consecutive indexes down, then returns the removed value. If the length property is 0, undefined is returned.

  shift is intentionally generic; this method can be called or applied to objects resembling arrays. Objects which do not contain a length property reflecting the last in a series of consecutive, zero-based numerical properties may not behave in any meaningful manner.
*/

export const shiftFN = (arr) => {
  arr.shift()
  return arr
}
