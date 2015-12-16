# Standard built-in objects and their methods

Just trying to learn about the standard built-in objects and their methods. I have this repo set up to run, test and practice various methods quickly. I will do TDD while trying to learn these.


## Linting and Testing

`npm run lintest` will Lint and Test all files in JS and Test.


## Notes

#### Arrays

#### Date

#### Dom

#### Functions

#### JSON

#### Math

#### Objects

#### Regex

#### Strings

slice(), substr() and subString() are all similar.

[Using Slice(), Substring(), And Substr() In Javascript](http://www.bennadel.com/blog/2159-using-slice-substring-and-substr-in-javascript.htm)

For both the slice() and substring() methods, the second argument is exclusive; that is, the resultant substring will not contain the character at the final index.

As you can see, the slice() and substring() methods are roughly the same; the only difference is that the slice() method can accept a negative index, relative to the end of the string. Should you try to use a negative index in substring(), it seems to be relative the beginning of the string (and therefore is out-of-bounds).

The substr() method can use a negative index; but, rather than using a to-argument, it uses a length-argument. This can be especially useful if you know the length of the substring ahead of time and don't want to perform any superflous math to calculate the necessary indices.

NOTE: According to W3Schools, using a negative index in substr() does not work with Internet Explorer (IE).

I can't see a reason to use the substring() method. It appears to be a less-robust version of the slice() method. If you know the indices, use slice(); if you know the length, use substr(). Unless I'm missing something subtle, the decision making seems to be fairly straightforward.

```js

var numbers = "0123456789";

slice( 3, 7 ) : 3456
slice( -7, 7 ) : 3456
slice( -7, -3 ) : 3456
slice( 3 ) : 3456789
slice( -7 ) : 3456789
slice( 100, 101 ) :

substring( 3, 7 ) : 3456
substring( -7, 7 ) : 0123456
substring( -7, -3 ) :
substring( 3 ) : 3456789
substring( -7 ) : 0123456789
substring( 100, 101 ) :

substr( 3, 4 ) : 3456
substr( -7, 4 ) : 3456
substr( 3 ) : 3456789
substr( -7 ) : 3456789
substr( 100, 1 ) :

```


#### Other






## I'm not sure if I will need these yet

`npm run arrayz -F 1`

`npm run datez -F 1`

`npm run domz -F 1`

`npm run functionz -F 1`

`npm run jsonz -F 1`

`npm run mathz -F 1`

`npm run objectz -F 1`

`npm run otherz -F 1`

`npm run regexz -F 1`

`npm run stringz -F 1`
