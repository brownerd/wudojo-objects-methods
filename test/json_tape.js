import test from 'tape'
import {jsonPARSEFN} from '../js/json/01-JSON.parse'
import {jsonStringifyFN} from '../js/json/02-JSON.stringify'

test('1 jsonPARSEFN() return parsed JSON', assert => {
  const actual = jsonPARSEFN('"hello"')
  const expected = 'hello'
  assert.equal(actual, expected,
    `Should return ${expected}`)
  assert.end()
})

test('2 jsonPARSEFN() return parsed JSON', assert => {
  const actual = jsonPARSEFN('{}')
  const expected = {}
  assert.deepEqual(actual, expected,
    `Should return ${expected}`)
  assert.end()
})

test('jsonStringifyFN() return parsed JSON', assert => {
  const actual = jsonStringifyFN({ x: 5 })
  const expected = '{"x":5}'
  assert.deepEqual(actual, expected,
    `Should return ${expected}`)
  assert.end()
})
