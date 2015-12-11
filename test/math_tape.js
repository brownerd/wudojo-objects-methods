import test from 'tape'
import {double, triple} from '../src/math'

// What component aspect are we testing?
test('Double functions output is twice the input', assert => {

  // What is the actual output?
  const actual = double(5)
  // What is the expected output?
  const expected = 10

  // Pass actual and expected in as arguments
  assert.equal(actual, expected,
    // Indicate what should happen in a simple sentence
    'double(5) should return 10')

  assert.end()
})


// What component aspect are we testing?
test('Triple function output is three times the input', assert => {
  const actual = triple(5)
  const expected = 15
  assert.equal(actual, expected, `triple(5) should return ${expected}`)
  assert.end()
})
