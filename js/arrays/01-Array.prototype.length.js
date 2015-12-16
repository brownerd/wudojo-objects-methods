// Array.prototype.length
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length

export const len = (arr) => arr.length

// Description

// The value of the length property is an integer with a positive sign and a value less than 2 to the 32nd power (232).

// You can set the length property to truncate an array at any time. When you extend an array by changing its length property, the number of actual elements does not increase; for example, if you set length to 3 when it is currently 2, the array still contains only 2 elements. Thus, the length property does not necessarily indicate the number of defined values in the array. See also Relationship between length and numerical properties.
