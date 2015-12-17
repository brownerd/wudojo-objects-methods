// Array.prototype.forEach()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// The forEach() method executes a provided function once per array element.

/*
Parameters
  callback
  Function to execute for each element, taking three arguments:

    currentValue
      The current element being processed in the array.

    index
      The index of the current element being processed in the array.

    array
      The array that forEach is being applied to.

  thisArg
    Optional. Value to use as this when executing callback.
*/

export const forEachDoubleFN = (arr) => {
  let newArr = []
  arr.forEach(item => {
    newArr.push(item + item)
  })
  return newArr
}
