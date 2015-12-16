// Array.prototype.every()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// Javascript array every method tests whether all the elements in an array passes the test implemented by the provided function.

// every() method always return a boolean value "true" or "false"

/*
Parameters

callback
  Function to test for each element, taking three arguments:

  currentValue (required)
    The current element being processed in the array.

  index (optional)
    The index of the current element being processed in the array.

array (optional)
  The array every was called upon.

thisArg
  Optional. Value to use as this when executing callback.

Description

  The every method executes the provided callback function once for each element present in the array until it finds one where callback returns a falsy value (a value that becomes false when converted to a Boolean). If such an element is found, the every method immediately returns false. Otherwise, if callback returned a true value for all elements, every will return true. callback is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values.

  callback is invoked with three arguments: the value of the element, the index of the element, and the Array object being traversed.

  If a thisArg parameter is provided to every, it will be passed to callback when invoked, for use as its this value. Otherwise, the value undefined will be passed for use as its this value.  The this value ultimately observable by callback is determined according to the usual rules for determining the this seen by a function.

  every does not mutate the array on which it is called.

  The range of elements processed by every is set before the first invocation of callback. Elements which are appended to the array after the call to every begins will not be visited by callback. If existing elements of the array are changed, their value as passed to callback will be the value at the time every visits them; elements that are deleted are not visited.

  every acts like the "for all" quantifier in mathematics. In particular, for an empty array, it returns true. (It is vacuously true that all elements of the empty set satisfy any given condition.)
*/

export const every10FN = (arr) => arr.every(item => item >= 10)

// Another great resource
// https://coderwall.com/p/_ggh2w/the-array-native-every-filter-map-some-foreach-methods
