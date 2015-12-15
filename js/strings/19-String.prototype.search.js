// String.prototype.search()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// When you want to know whether a pattern is found in a string use search() (similar to the regular expression test() method); for more information (but slower execution) use match() (similar to the regular expression exec() method).

// If a match is found, the search method returns an integer value that indicates the offset from the beginning of the string where the first match occurred. If no match is found, it returns -1.

export const searchFN = (str, regexp) => str.search(regexp)
