// Array.isArray()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

// Test if value is an array

export const isArrayFN = (value) => Array.isArray(value)



/*

PolyFill

if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

 */
