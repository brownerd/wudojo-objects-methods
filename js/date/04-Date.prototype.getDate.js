// Date.prototype.getDate()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate

// The getDate() method returns the day of the month for the specified date according to local time.

export const getDateFN = (dateString) => {
  const month = new Date(dateString)
  return month.getDate()
}
