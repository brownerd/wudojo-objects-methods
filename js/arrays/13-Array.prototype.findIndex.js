// Array.prototype.findIndex()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

// The findIndex() method returns an index in the array, if an element in the array satisfies the provided testing function. Otherwise -1 is returned.

/*
Parameters

callback
  Function to execute on each value in the array, taking three arguments:

  element
    The current element being processed in the array.

  index
    The index of the current element being processed in the array.

  array
    The array findIndex was called upon.
*/


export const findIndexFN = (arr, limit) => arr.findIndex(item => item > limit)

// I could use a Callback here also
