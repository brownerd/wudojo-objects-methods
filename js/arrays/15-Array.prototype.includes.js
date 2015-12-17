// Array.prototype.includes()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

// The includes() method determines whether an array includes a certain element, returning true or false as appropriate.

/*
Returns
  A Boolean.

Parameters
  searchElement
    The element to search for.

  fromIndex
    Optional. The position in this array at which to begin searching for searchElement. A negative value searches from the end of the array. Defaults to 0.

 */

export const includesFN = (arr, searchElement, fromIndex) => arr.includes(searchElement, fromIndex)
