// Array.of()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of

// The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.

// The difference between Array.of() and the Array constructor is in the handling of integer arguments: Array.of(42) creates an array with a single element, 42, whereas Array(42) creates an array with 42 elements, each of which is undefined.

export const ofFN = (...x) => Array.of(...x)

// https://ponyfoo.com/articles/es6-array-extensions-in-depth

/*

Array.of
This method is exactly like the first incarnation of cast we played with in our analysis of Array.from.

Array.of = function of () {
  return Array.prototype.slice.call(arguments)
}
You can’t just replace Array.prototype.slice.call with Array.of. They’re different animals.

Array.prototype.slice.call([1, 2, 3])
// <- [1, 2, 3]
Array.of(1, 2, 3)
// <- [1, 2, 3]
You can think of Array.of as an alternative for new Array that doesn’t have the new Array(length) overload. Below you’ll find some of the strange ways in which new Array behaves thanks to its single-argument length overloaded constructor. If you’re confused about the undefined x ${number} notation in the browser console, that’s indicating there are array holes in those positions.

new Array()
// <- []
new Array(undefined)
// <- [undefined]
new Array(1)
// <- [undefined x 1]
new Array(3)
// <- [undefined x 3]
new Array(1, 2)
// <- [1, 2]
new Array(-1)
// <- RangeError: Invalid array length
In contrast, Array.of has more consistent behavior because it doesn’t have the special length case.

Array.of()
// <- []
Array.of(undefined)
// <- [undefined]
Array.of(1)
// <- [1]
Array.of(3)
// <- [3]
Array.of(1, 2)
// <- [1, 2]
Array.of(-1)
// <- [-1]

 */
