// Array.prototype.some()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

// The some() method tests whether some element in the array passes the test implemented by the provided function.

/*
Parameters

  callback
    Function to test for each element, taking three arguments:

    currentValue
      The current element being processed in the array.

    index
      The index of the current element being processed in the array.

    array
      The array some() was called upon.

    thisArg
      Optional. Value to use as this when executing callback.

Return value

  This function returns true if the callback function returns true for any array element; otherwise, false.
*/


export function largerFN (item) {
  return item > 3
}

export const someFN = (arr, fn) => arr.some(fn)
