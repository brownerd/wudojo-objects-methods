// Date.prototype.toDateString()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString

// The toDateString() method returns the date portion of a Date object in human readable form in American English.

export const toDateStringFN = (yr, mon, day) => new Date(yr, mon, day).toDateString()
