// String.prototype.substr()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr

// start
// Location at which to begin extracting characters. If a negative number is given, it is treated as strLength + start where strLength is the length of the string (for example, if start is -3 it is treated as strLength - 3.)

// length
// Optional. The number of characters to extract.

export const subStrFN = (str, start, len) => str.substr(start, len)
