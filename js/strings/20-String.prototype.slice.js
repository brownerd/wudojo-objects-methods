// String.prototype.slice
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice


/*
  beginSlice

  The zero-based index at which to begin extraction. If negative, it is treated as sourceLength + beginSlice where sourceLength is the length of the string (for example, if beginSlice is -3 it is treated as sourceLength - 3).

  endSlice

  Optional. The zero-based index at which to end extraction. If omitted, slice() extracts to the end of the string. If negative, it is treated as sourceLength + endSlice where sourceLength is the length of the string (for example, if endSlice is -3 it is treated as sourceLength - 3).

  Description

  slice() extracts the text from one string and returns a new string. Changes to the text in one string do not affect the other string.

  slice() extracts up to but not including endSlice. str.slice(1, 4) extracts the second character through the fourth character (characters indexed 1, 2, and 3).

  As an example, str.slice(2, -1) extracts the third character through the second to last character in the string.
 */

export const sliceFN = (str, beginSlice, endSlice) => str.slice(beginSlice, endSlice)

// http://thenewcode.com/281/Manipulating-JavaScript-Strings-with-Split-and-Slice


// I can't see a reason to use the substring() method. It appears to be a less-robust version of the slice() method. If you know the indices, use slice(); if you know the length, use substr().
// http://www.bennadel.com/blog/2159-using-slice-substring-and-substr-in-javascript.htm

/*
  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position) {
      position = position || 0;
      return this.indexOf(searchString, position) === position;
    };
  }
 */
