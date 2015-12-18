// Date.UTC()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC

// The Date.UTC() method accepts the same parameters as the longest form of the constructor, and returns the number of milliseconds in a Date object since January 1, 1970, 00:00:00, universal time.


export const dateUTCFN = (yr, mon, day, hr, min, sec) => Date.UTC(yr, mon, day, hr, min, sec)


// Date.UTC(yr, mon, day, hr, min, sec)
// 849398400000

// new Date(Date.UTC(yr, mon, day, hr, min, sec))
// 'Sat Nov 30 1996 18:00:00 GMT-0600 (CST)'
