import test from 'tape'
import {len} from '../js/arrays/01-Array.prototype.length'
import {fromArgs, fromStr, fromDouble, fromSeqGen} from '../js/arrays/02-Array.from'
import {isArrayFN} from '../js/arrays/03-Array.isArray'
import {ofFN} from '../js/arrays/05-Array.of'
import {concatFN, concat2FN} from '../js/arrays/06-Array.prototype.concat'
import {entryFN} from '../js/arrays/08-Array.prototype.entries'
import {every10FN} from '../js/arrays/09-Array.prototype.every'

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

test('1 isArrayFN() will test if a value IS an array', assert => {
  const actual = isArrayFN([])
  const expected = true
  assert.equal(actual, expected,
    `isArrayFN() should return ${expected}`)
  assert.end()
})

test('2 isArrayFN() will test if a value IS an array', assert => {
  const actual = isArrayFN('array')
  const expected = false
  assert.equal(actual, expected,
    `isArrayFN() should return ${expected}`)
  assert.end()
})

test('ofFN() array maker', assert => {
  const actual = ofFN(1, 'hello', 3)
  const expected = [1, 'hello', 3]
  assert.deepEqual(actual, expected, `ofFN() should make this array from args: ${expected}`)
  assert.end()
})

test('concatFN() can concatenate multiple arrays', assert => {
  const actual = concatFN([1, 2], [3, 4], ['a', 'b', 'c'])
  const expected = [1, 2, 3, 4, 'a', 'b', 'c']
  assert.deepEqual(actual, expected, `concatFN() should concatenate multiple arrays into: ${expected}`)
  assert.end()
})

test('concat2FN() can concatenate multiple arrays', assert => {
  const actual = concatFN([1, 2], ['a', 'b'])
  const expected = [1, 2, 'a', 'b']
  assert.deepEqual(actual, expected, `concatFN() should concatenate multiple arrays into: ${expected}`)
  assert.end()
})

// This is Janky. Don't use it.
test('entryFN() does something', assert => {
  const actual = entryFN(['a', 'b'])
  const expected = {}
  assert.deepEqual(actual, expected, ` ${expected}`)
  assert.end()
})

test('every10FN() will test all the items in an array', assert => {
  const actual = every10FN([10, 25, 44, 11])
  const expected = true
  assert.equal(actual, expected, `every10FN() will return ${expected}`)
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
