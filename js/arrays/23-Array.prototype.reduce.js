// Array.prototype.reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.

/*
Parameters

  callback
  Function to execute on each value in the array, taking four arguments:

  previousValue
    The value previously returned in the last invocation of the callback, or initialValue, if supplied. (See below.)
  currentValue
    The current element being processed in the array.
  currentIndex
    The index of the current element being processed in the array.
  array
    The array reduce was called upon.

initialValue
  Optional. Value to use as the first argument to the first call of the callback.
*/

export function sumFN (prev, curr) {
  return prev + curr
}

export function arrayFN (prev, curr) {
  return prev.concat(curr)
}

export const reduceFN = (arr, fn, initialValue) => arr.reduce(fn, initialValue)
