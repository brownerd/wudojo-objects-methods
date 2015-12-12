import test from 'tape'
import {len} from '../js/arrays/01-Array.prototype.length.js'

test('len() function returns correct length of array', assert => {

  const actual = len([1, 2, 3])
  const expected = 3

  assert.equal(actual, expected, `len([1, 2, 3]) should return ${expected}`)
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
