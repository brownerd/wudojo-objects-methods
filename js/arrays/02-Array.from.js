// Array.from()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

/*

Parameters

arrayLike
  An array-like or iterable object to convert to an array.

mapFn
  Optional. Map function to call on every element of the array.

thisArg
  Optional. Value to use as this when executing mapFn.

Description

  Array.from() lets you create Arrays from:

  array-like objects (objects with a length property and indexed elements) or

  iterable objects (objects where you can get its elements, such as Map and Set).

  Array.from() has an optional parameter mapFn, which allows you to execute a map function on each element of the array (or subclass object) that is being created. More clearly, Array.from(obj, mapFn, thisArg) is the same as Array.from(obj).map(mapFn, thisArg), except that it does not create an intermediate array. This is especially important for certain array subclasses, like typed arrays, since the intermediate array would necessarily have values truncated to fit into the appropriate type.

 */

// ES6


export function fromArgs () {
  return Array.from(arguments)
}

// Make an Array from a String
export const fromStr = (str) => Array.from(str)

// Using an arrow function as the map function to
// manipulate the elements
export const fromDouble = (arr) => Array.from(arr, x => x + x);

// Generate a sequence of numbers
export const fromSeqGen = (lengthObj) =>
  Array.from(lengthObj, (value, count) => count);


// ECMAScript.next: Array.from() and Array.of()
// http://www.2ality.com/2011/07/array-from.html

/*

Unary Array.from()

  Array.from = function( arrayish ) {
      return [].slice.call( arrayish );
  };

Example [1]: converting an array-like DOM result into an array.

  var divs = document.querySelectorAll("div");
  Array.from( divs ).forEach(function( node ) {
      console.log( node );
  });

*/

/*
A simpler way to cast the args of a function to an array

  https://ponyfoo.com/articles/es6-array-extensions-in-depth

  function cast ()
    return [...arguments]
  }

  or...

  function cast ()
    return [].slice.call(arguments)
  }





  The one thing you cannot do with either Array.from nor the spread operator is to pick a start index. Suppose you wanted to pull every <div> after the first one. With .slice.call, you could do it like so:

[].slice.call(document.querySelectorAll('div'), 1)





Of course, there’s nothing stopping you from using .slice after casting. This is probably way easier to read, and looks more like functional programming, so there’s that.

Array.from(document.querySelectorAll('div')).slice(1)


*/
