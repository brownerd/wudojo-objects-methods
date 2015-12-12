import test from 'tape'
import {len} from '../js/strings/01-String.length.js'

test('len() function should return length of the string', assert => {

  const actual = len('rad')
  const expected = 3

  assert.equal(actual, expected, `len('awesome') should equal ${expected}`)
  assert.end()
})


/*
// For each unit test you write
// answer these questions

test('What component aspect are you testing?', assert => {

  const actual = 'What is the actual output?'
  const expected = 'What is the expected output'

  assert.equal( actual, expected, 'What should the feature do?')

  assert.end()
})
*/
