import test from 'tape'
import {len} from '../js/arrays/01-Array.prototype.length'
import {fromArgs, fromStr, fromDouble, fromSeqGen} from '../js/arrays/02-Array.from'

test('len() function returns correct length of array', assert => {
  const actual = len([1, 2, 3])
  const expected = 3
  assert.equal(actual, expected,
    `len([1, 2, 3]) should return ${expected}`)
  assert.end()
})

test('fromArgs() will return the args in the form of an array', assert => {
  const actual = fromArgs(1, 2, 3, 4, 5)
  const expected = [1, 2, 3, 4, 5]
  assert.deepEqual(actual, expected,
    `fromArgs() should return the args in the form of an array ${expected}`)
  assert.end()
})

test('fromStr() will return the string in the form of an array', assert => {
  const actual = fromStr('RAD')
  const expected = ['R', 'A', 'D']
  assert.deepEqual(actual, expected,
    `fromStr() should return the string in the form of an array ${expected}`)
  assert.end()
})

test('fromDouble() will double the items in the array', assert => {
  const actual = fromDouble([1, 2, 3])
  const expected = [2, 4, 6]
  assert.deepEqual(actual, expected,
    `fromDouble() should double the items in the array: ${expected}`)
  assert.end()
})

test('fromSeqGen() sequence generator', assert => {
  const actual = fromSeqGen({length: 3})
  const expected = [0, 1, 2]
  assert.deepEqual(actual, expected,
    `fromSeqGen() generate a sequence of numbers: ${expected}`)
  assert.end()
})
/*
// For each unit test you write
// answer these questions

test('What component aspect are you testing?', assert => {

  const actual = 'What is the actual output?'
  const expected = 'What is the expected output'

  assert.equal(actual, expected, 'What should the feature do?')

  assert.end()
})
*/
