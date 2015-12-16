// Array.of()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of

// The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.

// The difference between Array.of() and the Array constructor is in the handling of integer arguments: Array.of(42) creates an array with a single element, 42, whereas Array(42) creates an array with 42 elements, each of which is undefined.

export const ofFN = (...x) => Array.of(...x)
