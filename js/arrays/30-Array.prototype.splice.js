// Array.prototype.splice()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// The splice() method changes the content of an array by removing existing elements and/or adding new elements.

/*
Parameters

  start
    Index at which to start changing the array. If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end.

  deleteCount
    An integer indicating the number of old array elements to remove. If deleteCount is 0, no elements are removed. In this case, you should specify at least one new element. If deleteCount is greater than the number of elements left in the array starting at start, then all of the elements through the end of the array will be deleted.

  itemN
    The element to add to the array. If you don't specify any elements, splice() will only remove elements from the array.

Returns

  An array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.

Description

  If you specify a different number of elements to insert than the number you're removing, the array will have a different length at the end of the call.
*/

export const spliceFN = (arr, start, pullCount) => {
  arr.splice(start, pullCount)
  return arr
}
