import test from 'tape'
import {len} from '../js/strings/01-String.length'
import {fromCharCd, stringFunctor, plus1, minus1} from '../js/strings/02-String.fromCharCode'
import {fromCodePt} from '../js/strings/03-String.fromCodePoint'
import {anchorMaker} from '../js/strings/04-String.prototype.anchor'
import {charAT} from '../js/strings/05-String.prototype.charAt'
import {charCodeAT} from '../js/strings/06-String.prototype.charCodeAt'
import {codePointAT} from '../js/strings/07-String.prototype.codePointAt'
import {concaT} from '../js/strings/08-String.prototype.concat'
import {endsWITH} from '../js/strings/09-String.prototype.endsWith'

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

test('plus1() should increment numbers in an array by 1', assert => {
  const actual = [3, 4].map(plus1)
  const expected = [4, 5]
  assert.deepEqual(actual, expected, `[3, 4].map(plus1) should equal ${expected}`)
  assert.end()
})

test('minus1() should deccrement numbers in an array by 1', assert => {
  const actual = [3, 4].map(minus1)
  const expected = [2, 3]
  assert.deepEqual(actual, expected, `[3, 4].map(minus1) should equal ${expected}`)
  assert.end()
})

// Functor from FunFunFuction
test('stringFunctor() should increment each char in the string by 1', assert => {
  const actual = stringFunctor('ABC', plus1)
  const expected = 'BCD'
  assert.equal(actual, expected, `stringFunctor('ABC') should equal ${expected}`)
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

// CharCodeAt
test('charCodeAT() should return charCode from specified index of string', assert => {
  const actual = charCodeAT('RAD', 1)
  const expected = 65
  assert.equals(actual, expected,
    'charCodeAT(RAD, 1) should equal 65')
  assert.end()
})

// codePointAt
test('codePointAT() should return charCode from specified index of string', assert => {
  const actual = codePointAT('RAD', 1)
  const expected = 65
  assert.equals(actual, expected,
    'codePointAT(RAD, 1) should equal 65')
  assert.end()
})

// Concat
test('concaT() concatenates to strings', assert => {
  const actual = concaT('Super', 'RAD')
  const expected = 'SuperRAD'
  assert.equal(actual, expected,
    `concaT() should equal ${expected}`)
  assert.end()
})

// EndsWith
test('endsWith function should concatenate 2 strings', assert => {
  const actual = endsWITH('RAD', 'Hell yeah')
  const expected = ''
  assert.equal(actual, expected, `endsWITH(RAD, Hell yeah) should equal ${expected}`)
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
