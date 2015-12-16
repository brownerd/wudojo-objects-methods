// String.prototype.substring()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

/*
indexStart

  An integer between 0 and the length of the string, specifying the offset into the string of the first character to include in the returned substring.

indexEnd

  Optional. An integer between 0 and the length of the string, which specifies the offset into the string of the first character not to include in the returned substring.
 */

export const substringFN = (str, indexStart, indexEnd) => str.substring(indexStart, indexEnd)


/*
Description

substring() extracts characters from indexStart up to but not including indexEnd. In particular:

If indexStart equals indexEnd, substring() returns an empty string.

If indexEnd is omitted, substring() extracts characters to the end of the string.

If either argument is less than 0 or is NaN, it is treated as if it were 0.

If either argument is greater than stringName.length, it is treated as if it were stringName.length.

If indexStart is greater than indexEnd, then the effect of substring() is as if the two arguments were swapped; for example, str.substring(1, 0) == str.substring(0, 1).
 */
