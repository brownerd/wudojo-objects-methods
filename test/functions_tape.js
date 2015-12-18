import test from 'tape'
import {lenFN} from '../js/functions/03-Function.length'
import {nameFN} from '../js/functions/04-Function.name'

test('lenFN() returns function length', assert => {
  const actual = lenFN(function (a, b) {})
  const expected = 2
  assert.equal(actual, expected,
    `Should return ${expected}`)
  assert.end()
})

test('nameFN returns function name', assert => {
  const actual = nameFN(function rad () {})
  const expected = 'rad'
  assert.equal(actual, expected,
    `Should return function name: ${expected}`)
  assert.end()
})
