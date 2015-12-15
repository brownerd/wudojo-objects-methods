// String.prototype.lastIndexOf()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.

// It's like indexOf, but it begins the search from the end of the stirng

export const lastIndexOF = (str, searchTerm, index) => str.lastIndexOf(searchTerm, index)
