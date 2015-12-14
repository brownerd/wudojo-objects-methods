// String.prototype.codePointAt()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

// Parameters
// Position of an element in the String to return the code point value from.

// Description
// If there is no element at the specified position, undefined is returned. If no UTF-16 surrogate pair begins at pos, the code unit at pos is returned.

export const codePointAT = (str, index) => str.codePointAt(index)
