// String.prototype.match()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

export const matchFN = (str, regexp) => str.match(regexp)


/*
See also: RegExp methods

If you need to know if a string matches a regular expression RegExp, use search().

If you only want the first match found, you might want to use RegExp.exec() instead.

if you want to obtain capture groups and the global flag is set, you need to use RegExp.exec() instead.
*/

// If the regular expression does not include the g flag, returns the same result as RegExp.exec(). The returned Array has an extra input property, which contains the original string that was parsed. In addition, it has an index property, which represents the zero-based index of the match in the string.

/*
  var str = 'This is RAD'
  var regexp = /RAD/
  var matches_array = str.match(regexp)

  console.log(matches_array)

  // ["RAD", index: 8, input: "This is RAD"]
*/
