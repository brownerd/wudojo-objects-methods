// Array.prototype.filter()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// filter() does not mutate the array on which it is called.

// Filter to keep only Odd values
export const filterODD = (arr) => arr.filter( item => item % 2 === 1)

// Filter to keep Even values
export const filterEven = (arr) => arr.filter( item => item % 2 === 0)

// Folter to keep values greater than 3
export const filterGreater = (arr, limit) => arr.filter( item => item > 3)
