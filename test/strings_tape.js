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
import {includez} from '../js/strings/10-String.prototype.includes'
import {indexOF} from '../js/strings/11-String.prototype.indexOf'
import {lastIndexOF} from '../js/strings/12-String.prototype.lastIndexOf'
import {linK} from '../js/strings/13-String.prototype.link'
import {localeCompareFN} from '../js/strings/14-String.prototype.localeCompare'
import {matchFN} from '../js/strings/15-String.prototype.match'
import {repeatFN} from '../js/strings/17-String.prototype.repeat'
import {replaceFN, replacer} from '../js/strings/18-String.prototype.replace'
import {searchFN} from '../js/strings/19-String.prototype.search'
import {sliceFN} from '../js/strings/20-String.prototype.slice'
import {splitFN} from '../js/strings/21-String.prototype.split'
import {startsWithFN} from '../js/strings/22-String.prototype.startsWith'

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

// EndsWith (boolean)
test('endsWith function should find the word at the end of the string', assert => {
  const actual = endsWITH('RAD, Hell yeah!', 'yeah!')
  const expected = true

  // Could use assert.ok() here
  assert.equal(actual, expected, `endsWITH(RAD, Hell yeah) should equal ${expected}`)
  assert.end()
})

test('includez() function tests if a sting IS in a string', assert => {
  const actual = includez('Rad, Hell yeah!', 'Hell')
  const expected = true
  assert.equal(actual, expected, `includez() should be ${expected}`)
  assert.end()
})

test('1 indexOF() test will indicate the character index where the searchTerm begins', assert => {
  const actual = indexOF('Oh hell yeah', 'hell')
  const expected = 3
  assert.equal(actual, expected, `indexOF() should be ${expected}`)
  assert.end()
})

test('2 indexOF() tests if a searchTerm is not in a string', assert => {
  const actual = indexOF('Oh hell yeah', 'RAD')
  const expected = -1
  assert.equal(actual, expected, `indexOF() should be ${expected}`)
  assert.end()
})

test('3 indexOF() tests if a searchTerm is at the specified index of the string', assert => {
  const actual = indexOF('Oh hell yeah', 'yeah', 8)
  const expected = 8
  assert.equal(actual, expected, `indexOF() should be ${expected}`)
  assert.end()
})

//
test('1 lastIndexOF() indicates the last index of the occurance of the searchTerm', assert => {
  const actual = lastIndexOF('Oh, hell yeah!', 'yeah!')
  const expected = 9
  assert.equal(actual, expected, `lastIndexOF should be ${expected}`)
  assert.end()
})

test('2 lastIndexOF() indicates the last index of the occurance of the searchTerm', assert => {
  const actual = lastIndexOF('Oh, hell yeah!', 'yeah!', 9)
  const expected = 9
  assert.equal(actual, expected, `lastIndexOF should find the last occurance of yeah! at index ${expected}`)
  assert.end()
})

test('3 indicates the last index of the occurance of the searchTerm is at index 7', assert => {
  const actual = lastIndexOF('Oh, hell yeah!', 'l', 7)
  const expected = 7
  assert.equal(actual, expected, `lastIndexOF should find the last occurance of l at index ${expected}`)
  assert.end()
})

test('4 indicates the last index of the occurance of the searchTerm is also at index 6', assert => {
  const actual = lastIndexOF('Oh, hell yeah!', 'l', 6)
  const expected = 6
  assert.equal(actual, expected, `lastIndexOF should find the last occurance of l at index ${expected}`)
  assert.end()
})

test('5 indicates the last index of the occurance of the searchTerm is not at index 6', assert => {
  const actual = lastIndexOF('Oh, hell yeah!', 'l', 5)
  const expected = -1
  assert.equal(actual, expected, `lastIndexOF should find the last occurance of l at index ${expected}`)
  assert.end()
})

test('linK() returns a propper html link', assert => {
  const actual = linK('linkText', 'http://url.com')
  const expected = '<a href="http://url.com/">linkText</a>'
  assert.equal(actual, expected, `link() should return this propper link: ${expected}`)
  assert.end()
})

test('1 localeCompareFN() tests two strings and indicates which one comes first alphabetically', assert => {
  const actual = localeCompareFN('alpha', 'beta')
  const expected = -1 || -2
  assert.equal(actual, expected,
    `localeCompareFN returns ${expected}`)
  assert.end()
})

test('2 localeCompareFN() tests two strings and indicates which one comes first alphabetically', assert => {
  const actual = localeCompareFN('beta', 'alpha')
  const expected = 1 || 2
  assert.equal(actual, expected,
    `localeCompareFN returns ${expected}`)
  assert.end()
})

// Must include the flag or else it doesn't work, even though it looks like it does. If the regular expression does not include the g flag, returns the same result as RegExp.exec(). The returned Array has an extra input property, which contains the original string that was parsed. In addition, it has an index property, which represents the zero-based index of the match in the string.

test('1 matchFN() should match pattern', assert => {
  const actual = matchFN('This is RAD', /RAD/gi)
  const expected = ['RAD']
  assert.deepEqual(actual, expected,
    `matchFN() should match ${expected}`)
  assert.end()
})

test('2 matchFN() should match pattern', assert => {
  const actual = matchFN('This is RAD', /(rad)/gi)
  const expected = ['RAD']
  assert.deepEqual(actual, expected,
    `matchFN() should match ${expected}`)
  assert.end()
})

test('repeatFN() will repeat the string and contatenate it', assert => {
  const actual = repeatFN('RAD', 3)
  const expected = 'RADRADRAD'
  assert.equal(actual, expected,
    `repeatFN() should return ${expected}`)
  assert.end()
})

test('replaceFN() will replace specified string', assert => {
  const actual = replaceFN('Hell yay!', /yay/, 'yeah')
  const expected = 'Hell yeah!'
  assert.equal(actual, expected,
    `replaceFN() should return ${expected}`)
  assert.end()
})

test('replaceFN() will replace specified string', assert => {
  const actual = replaceFN('Hell yeah!', /(\w+)\s(\w+)/, '$2 $1')
  const expected = 'yeah Hell!'
  assert.equal(actual, expected,
    `replaceFN() should return ${expected}`)
  assert.end()
})

// Should
test('replacer() will reorder sting', assert => {
  const actual = replaceFN('abc12345#$*%', /([^\d]*)(\d*)([^\w]*)/, replacer)
  const expected = 'abc - 12345 - #$*%'
  assert.equal(actual, expected, `Should return p1 is nondigits, p2 digits, and p3 non-alphanumerics and format it: ${expected}`)
  assert.end()
})

test('1 searchFN() search string for specified string', assert => {
  const actual = searchFN('fucking RAD rad maing!', /rad/)
  const expected = 12
  assert.equal(actual, expected,
    `searchFN() should return rad at index: ${expected}`)
  assert.end()
})

test('2 searchFN() search string for specified string', assert => {
  const actual = searchFN('fucking RAD rad maing!', /rad/i)
  const expected = 8
  assert.equal(actual, expected,
    `searchFN() should return RAD at index: ${expected}`)
  assert.end()
})

test('3 searchFN() search string for specified string', assert => {
  const actual = searchFN('fucking RAD maing!', /awesome/)
  const expected = -1
  assert.equal(actual, expected,
    `searchFN() should return ${expected} because search term cannot be found`)
  assert.end()
})

test('1 sliceFN() returns slice', assert => {
  const actual = sliceFN('OMG, this is totally crazy!', 0)
  const expected = 'OMG, this is totally crazy!'
  assert.equal(actual, expected,
    `sliceFN() should return ${expected}`)
  assert.end()
})

// Doesn't Include character of the endSlice index
test('2 sliceFN() returns slice', assert => {
  const actual = sliceFN('OMG, this is totally crazy!', 0, 3)
  const expected = 'OMG'
  assert.equal(actual, expected,
    `sliceFN() should return ${expected}`)
  assert.end()
})

// Doesn't Include character of the endSlice index
test('3 sliceFN() returns slice', assert => {
  const actual = sliceFN('OMG, this is totally crazy!', -6)
  const expected = 'crazy!'
  assert.equal(actual, expected,
    `sliceFN() should return ${expected}`)
  assert.end()
})

// Doesn't Include character of the endSlice index
test('4 sliceFN() returns slice', assert => {
  const actual = sliceFN('OMG, this is totally crazy!', 5)
  const expected = 'this is totally crazy!'
  assert.equal(actual, expected,
    `sliceFN() should return ${expected}`)
  assert.end()
})

test('1 splitFN() should split string into an array at the identified splits for as long as the index indicates', assert => {
  const actual = splitFN('This is a crazy time to learn JS', ' ')
  const expected = ['This', 'is', 'a', 'crazy', 'time', 'to', 'learn', 'JS']
  assert.deepEqual(actual, expected,
    `splitFN() should equal ${expected}`)
  assert.end()
})

test('2 splitFN() should split string into an array at the identified splits for as long as the index indicates', assert => {
  const actual = splitFN('This is a crazy time to learn JS', ' ', 5)
  const expected = ['This', 'is', 'a', 'crazy', 'time']
  assert.deepEqual(actual, expected,
    `splitFN() should equal ${expected}`)
  assert.end()
})

test('1 startsWithFN() function indicates if a searchTerm is at the beginning of a string', assert => {
  const actual = startsWithFN('Oh Hell yeah!', 'Oh')
  const expected = true
  assert.equal(actual, expected,
    `startsWithFN() is should return ${expected}`)
  assert.end()
})

test('2 startsWithFN() function indicates if a searchTerm is at the beginning of a string', assert => {
  const actual = startsWithFN('Oh Hell yeah!', 'Hell', 3)
  const expected = true
  assert.equal(actual, expected,
    `startsWithFN() is should return ${expected}`)
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
