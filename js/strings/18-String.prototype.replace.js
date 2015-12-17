// String.prototype.replace()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

export const replaceFN = (str, regexp, newStr, orderString, fn) => str.replace(regexp, newStr, orderString)


// p1 is nondigits, p2 digits, and p3 non-alphanumerics
// abc12345#$*%
// /([^\d]*)(\d*)([^\w]*)/
// 'abc - 12345 - #$*%'

export const replacer = (match, p1, p2, p3, offset, string) => [p1, p2, p3].join(' - ')
