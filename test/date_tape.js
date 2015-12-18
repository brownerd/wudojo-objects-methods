import test from 'tape'
import {dateUTCFN} from '../js/date/01-Date.UTC'
import {datenowFN} from '../js/date/02-Date.now'
import {getDateFN} from '../js/date/04-Date.prototype.getDate'
import {getDayFN} from '../js/date/05-Date.prototype.getDay'
import {getFullYearFN} from '../js/date/06-Date.prototype.getFullYear'
import {getTimeFN} from '../js/date/12-Date.prototype.getTime'
import {toDateStringFN} from '../js/date/37-Date.prototype.toDateString'

test('dateUTCFN()', assert => {
  const actual = dateUTCFN(96, 11, 1, 0, 0, 0)
  const expected = 849398400000
  assert.equal(actual, expected,
    `Should return date in milliseconds ${expected}`)
  assert.end()
})

test('datenowFN - The Date.now() method returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC', assert => {
  const actual = datenowFN()
  const expected = datenowFN()
  assert.equal(actual, expected,
    `The now() method returns the milliseconds elapsed since 1 January 1970 00:00:00 UTC up until now as a Number. ${expected}`)
  assert.end()
})

test('getDateFN() get the month out of the specified date', assert => {
  const actual = getDateFN('December 25, 1995 23:15:30')
  const expected = 25
  assert.equal(actual, expected, `Should return ${expected}`)
  assert.end()
})

test('getDayFN() get the month out of the specified date', assert => {
  const actual = getDayFN('December 25, 1995 23:15:30')
  const expected = 1
  assert.equal(actual, expected, `Should return ${expected}`)
  assert.end()
})

test('1 getFullYearFN() get the year out of the specified date', assert => {
  const actual = getFullYearFN('July 21, 1983 01:15:00')
  const expected = 1983
  assert.equal(actual, expected, `Should return ${expected}`)
  assert.end()
})

test('2 getFullYearFN() get the year out of the specified date', assert => {
  const actual = getFullYearFN()
  // This is only expected for this year
  const expected = 2015
  assert.equal(actual, expected, `Should return ${expected}`)
  assert.end()
})

test('getTimeFN() get the year out of the specified date', assert => {
  const actual = getTimeFN('Aug, 10, 2015')
  // This is only expected for this year
  const expected = 1439182800000
  assert.equal(actual, expected,
    `Should return ${expected}`)
  assert.end()
})

test('toDateStringFN() get the year out of the specified date', assert => {
  const actual = toDateStringFN(1993, 6, 28)
  // This is only expected for this year
  const expected = 'Wed Jul 28 1993'
  assert.equal(actual, expected,
    `Should return ${expected}`)
  assert.end()
})
