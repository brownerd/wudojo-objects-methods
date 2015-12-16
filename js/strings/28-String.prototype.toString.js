// String.prototype.toString()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toString

// Not sure about this method either. Still hazy on when to ever use it.

// More reading


// http://www.2ality.com/2012/03/converting-to-string.html

// Which of the three approaches for converting to string should you choose? value.toString() can be OK, if you are sure that value will never be null or undefined. Otherwise, ""+value and String(value) are mostly equivalent. Which one people prefer is a matter of taste. I find String(value) more explicit.




// http://adripofjavascript.com/blog/drips/using-javascripts-tostring-method


export const toStringFN = (value) => value.toString()
