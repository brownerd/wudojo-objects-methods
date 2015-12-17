// Array.prototype.map()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

/*
Parameters

  callback
    Function that produces an element of the new Array, taking three arguments:

    currentValue
      The current element being processed in the array.
    index
      The index of the current element being processed in the array.
    array
      The array map was called upon.

  thisArg
    Optional. Value to use as this when executing callback.
*/

export function add1 (item) {
  return item + ' 1'
}

export function typez (item) {
  return typeof item
}

export const map1FN = (arr) => arr.map(item => item + ' 1')

export const mapFN = (arr, fn) => arr.map(fn)

/*

function typesOf (...all) {
  return all.map(value => typeof value)
}
typesOf(null, [], NaN)
// <- ['object', 'object', 'number']

 */
