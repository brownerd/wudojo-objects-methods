import test from 'tape'
import {len} from '../js/strings/01-String.length.js'
import {fromCharCd} from '../js/strings/02-String.fromCharCode.js'
import {fromCodePt} from '../js/strings/03-String.fromCodePoint.js'
import {anchorMaker} from '../js/strings/04-String.prototype.anchor.js'
import {charAT} from '../js/strings/05-String.prototype.charAt'

// Length
test('len() function should return length of the string', assert => {

  const actual = len('rad')
  const expected = 3

  assert.equal(actual, expected, `len('awesome') should equal ${expected}`)
  assert.end()
})

// FromCharCode
test('fromCharCd() function should return letters from character numbers', assert => {
  const actual = fromCharCd(82, 65, 68)
  const expected = 'RAD'
  assert.equal(actual, expected,
    `fromCharCd(82, 65, 68) should equal ${expected}`)
  assert.end()
})

// FromCodePoint
test('fromCodePt() should return a string created by using the specified sequence of code points', assert => {
  const actual = fromCodePt(82, 65, 68)
  const expected = 'RAD'
  assert.equal(actual, expected,
    `fromCodePt(82, 65, 68) should equal ${expected}`)
  assert.end()
})

// Anchor
test('anchorMaker() creates an anchor tag', assert => {
  const actual = anchorMaker('anchorize me', 'anchor_name')
  const expected = '<a name="anchor_name">anchorize me</a>'
  assert.equal(actual, expected,
    `anchorMaker() should equal ${expected}`)
  assert.end()
})

// CharAt
test('charAT() should return the letter at the specified index', assert => {
  const actual = charAT('RAD', 1)
  const expected = 'A'
  assert.equal(actual, expected,
    `charAT() should return ${expected}`)
  assert.end()
})

/*

// Boilerplate

test('wat it do', assert => {
  const actual =
  const expected =
  assert.equal(actual, expected,
    ``)
  assert.end()
})


// For each unit test you write
// answer these questions

test('What component aspect are you testing?', assert => {

  const actual = 'What is the actual output?'
  const expected = 'What is the expected output'

  assert.equal( actual, expected, 'What should the feature do?')

  assert.end()
})
*/
