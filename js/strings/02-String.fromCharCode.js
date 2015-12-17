// String.fromCharCode(...x)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

// The static String.fromCharCode() method returns a string created by using the specified sequence of Unicode values.

// Return String from Char Code
export const fromCharCd = (...x) => String.fromCharCode(...x)

// Usign the rest operator to except any amount of args
// http://ariya.ofilabs.com/2013/03/es6-and-rest-parameter.html

// Functors - FunFunFunction #10
// https://www.youtube.com/watch?v=YLIH8TKbAh4

// Function to increment x by 1
export const plus1 = (x) => x + 1

// Function to decrement x by 1
export const minus1 = (x) => x - 1

// Functor to increment or dercement each character in a string by 1
export const stringFunctor = (x, fn) => {
  const chars = x.split('')
  return chars.map(char => {
   return String.fromCharCode(fn(char.charCodeAt(0)))
 }).join('')
}
