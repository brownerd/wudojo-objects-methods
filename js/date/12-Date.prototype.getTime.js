// Date.prototype.getTime()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime

// The getTime() method returns the numeric value corresponding to the time for the specified date according to universal time.

// You can use this method to help assign a date and time to another Date object. This method is functionally equivalent to the valueOf() method.

// Return value

// The value returned by the getTime() method is the number of milliseconds since 1 January 1970 00:00:00 UTC.

export const getTimeFN = (date) => new Date(date).getTime()
