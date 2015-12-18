import test from 'tape'
import {len} from '../js/arrays/01-Array.prototype.length'
import {fromArgs, fromStr, fromDouble, fromSeqGen} from '../js/arrays/02-Array.from'
import {isArrayFN} from '../js/arrays/03-Array.isArray'
import {ofFN} from '../js/arrays/05-Array.of'
import {concatFN, concat2FN} from '../js/arrays/06-Array.prototype.concat'
import {entryFN} from '../js/arrays/08-Array.prototype.entries'
import {every10FN} from '../js/arrays/09-Array.prototype.every'
import {filterODD, filterEven, filterGreater} from '../js/arrays/11-Array.prototype.filter'
import {findGreater} from '../js/arrays/12-Array.prototype.find'
import {findIndexFN} from '../js/arrays/13-Array.prototype.findIndex'
import {forEachDoubleFN} from '../js/arrays/14-Array.prototype.forEach'
import {includesFN} from '../js/arrays/15-Array.prototype.includes'
import {indexOfFN, indexOfMany, indexUpdater} from '../js/arrays/16-Array.prototype.indexOf'
import {joinFN} from '../js/arrays/17-Array.prototype.join'
import {lastIndexOfFN} from '../js/arrays/19-Array.prototype.lastIndexOf'
import {map1FN, add1, mapFN, typez} from '../js/arrays/20-Array.prototype.map'
import {popFN} from '../js/arrays/21-Array.prototype.pop'
import {pushFN} from '../js/arrays/22-Array.prototype.push'
import {reduceFN, sumFN, arrayFN} from '../js/arrays/23-Array.prototype.reduce'
import {reverseFN} from '../js/arrays/25-Array.prototype.reverse'
import {shiftFN} from '../js/arrays/26-Array.prototype.shift'
import {sliceFN} from '../js/arrays/27-Array.prototype.slice'

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
  assert.deepEqual(actual, expected,
    ` ${expected}`)
  assert.end()
})

test('every10FN() will test all the items in an array', assert => {
  const actual = every10FN([10, 25, 44, 11])
  const expected = true
  assert.equal(actual, expected,
    `every10FN() will return ${expected}`)
  assert.end()
})

test('filterODD() test each item in a list and only returns the items that pass the test', assert => {
  const actual = filterODD([1, 3, 5, 8])
  const expected = [1, 3, 5]
  assert.deepEqual(actual, expected,
    `Should return odd numbers ${expected}`)
  assert.end()
})

test('filterEven() test each item in a list and only returns the items that pass the test', assert => {
  const actual = filterEven([1, 3, 5, 8])
  const expected = [8]
  assert.deepEqual(actual, expected,
    `Should return even numbers ${expected}`)
  assert.end()
})

test('filterGreater() test each item in a list and only returns the items that pass the test', assert => {
  const actual = filterGreater([1, 3, 5, 8], 3)
  const expected = [5, 8]
  assert.deepEqual(actual, expected,
    `Should return values greater than limint:  ${expected}`)
  assert.end()
})

test('findGreater() finds the first result of the test in an array', assert => {
  const actual = findGreater([1, 3, 5, 8], 5)
  const expected = 8
  assert.equal(actual, expected, `findGreater should find first item in array greater than limit 5, which is: ${expected}`)
  assert.end()
})

test('findIndexFN() method returns an index in the array, if an element in the array satisfies the provided testing function. Otherwise -1 is returned.', assert => {
  const actual = findIndexFN([1, 3, 5, 8], 3)
  const expected = 2
  assert.equal(actual, expected, `findIndexFN() should return ${expected}`)
  assert.end()
})

test('forEachDoubleFN() should double each item in the array', assert => {
  const actual = forEachDoubleFN([1, 2, 3])
  const expected = [2, 4, 6]
  assert.deepEqual(actual, expected,
    `forEachDoubleFN() should double each item in the array ${expected}`)
  assert.end()
})

test('1 includesFN() tests if a value is in the array', assert=> {
  const actual = includesFN([1, 2, 3, 'Hi'], 1)
  const expected = true
  assert.deepEquals(actual, expected,
  `includesFN should be ${expected}`)
  assert.end()
})

test('2 includesFN() tests if a value is in the specified index array', assert=> {
  const actual = includesFN([1, 2, 3, 'Hi'], 1, 0)
  const expected = true
  assert.deepEquals(actual, expected,
  `includesFN should be ${expected}`)
  assert.end()
})

test('3 includesFN() tests if a value is in the specified index array', assert=> {
  const actual = includesFN([1, 2, 3, 'Hi'], 10)
  const expected = false
  assert.deepEquals(actual, expected,
  `includesFN should be ${expected}`)
  assert.end()
})

test('1 indexOfFN looks if value is at specified index', assert => {
  const actual = indexOfFN([1, 2, 3, 'Hi'], 1)
  const expected = 0
  assert.equal(actual, expected,
    `indexOfFN should be ${expected}`)
  assert.end()
})

test('2 indexOfFN looks if value is at specified index', assert => {
  const actual = indexOfFN([1, 2, 3, 'Hi'], 10)
  const expected = -1
  assert.equal(actual, expected,
    `indexOfFN should be ${expected}`)
  assert.end()
})

test('3 indexOfMany looks for multiple instances of a value in an array', assert => {
  const actual = indexOfMany(['a', 'b', 'a', 'c', 'a', 'd'], 'a')
  const expected = [0, 2, 4]
  assert.deepEqual(actual, expected,
    `indexOfMany should be ${expected}`)
  assert.end()
})

test('3 indexUpdater() looks for multiple instances of a value in an array', assert => {
  const actual = indexUpdater(['potato', 'tomato', 'chillies', 'green-pepper'], 'spinach')
  const expected = ['potato', 'tomato', 'chillies', 'green-pepper', 'spinach']
  assert.deepEqual(actual, expected,
    `indexUpdater should be ${expected}`)
  assert.end()
})

test('joinFN() joins items in an array into a string', assert => {
  const actual = joinFN(['h', 'i', '!'], '')
  const expected = 'hi!'
  assert.equal(actual, expected,
    `joinFN() should join the items into a string ${expected}`)
  assert.end()
})

test('1 lastIndexOfFN() shows last index of searchElement', assert => {
  const actual = lastIndexOfFN([2, 5, 9, 2], 2)
  const expected = 3
  assert.equal(actual, expected,
    `Should be ${expected}`)
  assert.end()
})

test('2 lastIndexOfFN() shows last index of searchElement', assert => {
  const actual = lastIndexOfFN([2, 5, 9, 2], 2, 3)
  const expected = 3
  assert.equal(actual, expected,
    `Should be ${expected}`)
  assert.end()
})

test('1 map1FN() should map directions over each item in the array', assert => {
  const actual = map1FN(['Rad', 'Awesome'])
  const expected = ['Rad 1', 'Awesome 1']
  assert.deepEqual(actual, expected, `Should be ${expected}`)
  assert.end()
})

test('2 add1 mapFN() should map directions over each item in the array', assert => {
  const actual = mapFN(['Rad', 'Awesome'], add1)
  const expected = ['Rad 1', 'Awesome 1']
  assert.deepEqual(actual, expected, `Should be ${expected}`)
  assert.end()
})

test('3 typez mapFN() should map directions over each item in the array', assert => {
  const actual = mapFN(['Rad', 'Awesome'], typez)
  const expected = ['string', 'string']
  assert.deepEqual(actual, expected, `Should be ${expected}`)
  assert.end()
})

test('popFN() removes last item from array', assert => {
  const actual = popFN([1, 2, 3, 4])
  const expected = 4
  assert.equal(actual, expected,
    `Should get last item in array ${expected}`)
  assert.end()
})

test('pushFN() puts items at the end of a given array', assert => {
  const actual = pushFN([1, 2, 3], 4, 5)
  const expected = [1, 2, 3, 4, 5]
  assert.deepEqual(actual, expected,
    `Should be ${expected}`)
  assert.end()
})

// Find Sum
test('reduceFN() sumFN reduces items in an array into a singular result', assert => {
  const actual = reduceFN([1, 2, 3, 4], sumFN, 0)
  const expected = 10
  assert.equal(actual, expected,
    `Should return ${expected}`)
  assert.end()
})

// Flatten multi-dimensional array
test('reduceFN() arrayFN reduces items in an array into a singular result', assert => {
  const actual = reduceFN([[1, 2], [3, 4]], arrayFN, [])
  const expected = [1, 2, 3, 4]
  assert.deepEqual(actual, expected,
    `Should return ${expected}`)
  assert.end()
})

test('reverseFN() reverses an array', assert => {
  const actual = reverseFN([1, 2, 3])
  const expected = [3, 2, 1]
  assert.deepEqual(actual, expected,
    `Array should be in reverse order ${expected}`)
  assert.end()
})

test('shiftFN() will remove the first item from the array', assert => {
  const actual = shiftFN([1, 2, 3])
  const expected = [2, 3]
  assert.deepEqual(actual, expected,
    `Should return ${expected}`)
  assert.end()
})

test('sliceFN pulls out a mini array from a larger array', assert => {
  const actual = sliceFN([1, 2, 3, 4, 5], 2, -1)
  const expected = [3, 4]
  assert.deepEqual(actual, expected,
    `Should return ${expected}`)
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
