// Array.prototype.find()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find


// https://ponyfoo.com/articles/es6-array-extensions-in-depth

/*

Ah. One of those methods that JavaScript desperately wanted but didn’t get in ES5. The .find method returns the first item that matches callback(item, i, array) for an array Array. You can also optionally pass in a context binding for this. You can think of it as an equivalent of .some that returns the matching element (or undefined) instead of merely true or false.

[1, 2, 3, 4, 5].find(item => item > 2)
// <- 3
[1, 2, 3, 4, 5].find((item, i) => i === 3)
// <- 4
[1, 2, 3, 4, 5].find(item => item === Infinity)
// <- undefined

There’s really not much else to say about this method. It’s just that simple! We did want this method a lot, as evidenced in libraries like Lodash and Underscore. Speaking of those libraries… – .findIndex was also born there.
 */

export const findGreater = (arr, limit) => arr.find(item => item > limit)
