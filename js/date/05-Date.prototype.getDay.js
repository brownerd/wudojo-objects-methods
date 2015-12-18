// Date.prototype.getDay()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay

// The getDay() method returns the day of the week for the specified date according to local time, where 0 represents Sunday.

// Return value
// The value returned by getDay() is an integer corresponding to the day of the week: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.

export const getDayFN = (dateString) => {
  const day = new Date(dateString)
  return day.getDay()
}
