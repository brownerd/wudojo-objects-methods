// Array.prototype.slice()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// The slice() method returns a shallow copy of a portion of an array into a new array object.

/*
Parameters
  begin
    Zero-based index at which to begin extraction.

    As a negative index, begin indicates an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.

    If begin is omitted, slice begins from index 0.
  end
    Zero-based index at which to end extraction. slice extracts up to but not including end.

    slice(1,4) extracts the second element up to the fourth element (elements indexed 1, 2, and 3).

    As a negative index, end indicates an offset from the end of the sequence. slice(2,-1) extracts the third element through the second-to-last element in the sequence.

    If end is omitted, slice extracts to the end of the sequence (arr.length).

Description
  slice does not alter. It returns a shallow copy of elements from the original array. Elements of the original array are copied into the returned array as follows:

  For object references (and not the actual object), slice copies object references into the new array. Both the original and new array refer to the same object. If a referenced object changes, the changes are visible to both the new and original arrays.

  For strings and numbers (not String and Number objects), slice copies strings and numbers into the new array. Changes to the string or number in one array does not affect the other array.

  If a new element is added to either array, the other array is not affected.
*/

export const sliceFN = (arr, start, end) => arr.slice(start, end)
