// Array.prototype.concat()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

/*
Description

  concat creates a new array consisting of the elements in the object on which it is called, followed in order by, for each argument, the elements of that argument (if the argument is an array) or the argument itself (if the argument is not an array).

  concat does not alter this or any of the arrays provided as arguments but instead returns a shallow copy that contains copies of the same elements combined from the original arrays. Elements of the original arrays are copied into the new array as follows:

  Object references (and not the actual object): concat copies object references into the new array. Both the original and new array refer to the same object. That is, if a referenced object is modified, the changes are visible to both the new and original arrays.

  Strings and numbers (not String and Number objects): concat copies the values of strings and numbers into the new array.

  Note: Concatenating array(s)/value(s) will leave the originals untouched. Furthermore, any operation on the new array will have no effect on the original arrays, and vice versa.
*/

export const concatFN = (...arr) => Array.concat(...arr)

// Just another way to write this
export const concat2FN = (arr1, arr2) => arr1.concat(arr2)
