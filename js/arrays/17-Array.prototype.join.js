// Array.prototype.join()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// The join() method joins all elements of an array into a string.

/*
Parameters
  separator
    Optional. Specifies a string to separate each element of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma. If separator is an empty string, all elements are joined without any characters in between them.
 */

export const joinFN = (arr, separator) => arr.join(separator)
