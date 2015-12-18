# Standard built-in objects and their methods

Just trying to learn about the standard built-in objects and their methods. I have this repo set up to run, test and practice various methods quickly. I will do TDD while trying to learn these.

Each file in the JS directory IS largely (almost entirly) a copy of info from Mozilla's docs. But writing code goes further than reading code. Gotta learn all this shit somehow.


## Linting and Testing

`npm run lintest` will Lint and Test all files in JS and Test.


## Notes

#### Arrays

**Array.from()**
- [ECMAScript.next: Array.from() and Array.of()](http://www.2ality.com/2011/07/array-from.html)

- [Preparing for ECMAScript 6: New Array Methods](http://www.sitepoint.com/preparing-ecmascript-6-new-array-methods/)
- [ES6 Array Extensions in Depth](https://ponyfoo.com/articles/es6-array-extensions-in-depth)

**.every()**
- [The Array native every(), filter(), map(), some(), forEach() methods](https://coderwall.com/p/_ggh2w/the-array-native-every-filter-map-some-foreach-methods) Super helpful

**.forEach() and .map**
- [Array.prototype.map() versus Array.prototype.forEach()](http://tiffanybbrown.com/2012/10/15/array-prototype-map-versus-array-prototype-foreach/)

arrow functions are particularly useful in most functional programming situations such as when using .map, .filter, or .reduce on collections.


#### Date

I didn't do all of these. Just making notes on the basics from this section

getDate - returns integer between 1 - 31
getDay - returns integer between 0 - 6
getFullYear - returns the year
getHours - returns an integer between 0 and 23
getMilliseconds - returns a number between 0 and 999
getMinutes - returns an integer between 0 and 59
getMonth - returns an integer between 0 and 11
getSeconds - returns an integer between 0 and 59

toDateString - human readable date
toTimeString - human readable time
toString - human readable date, time, timezone. returns a string representing the specified Date object

#### Dom

#### Functions

Apply and Call

So .call and .apply allow you to manipulate the this keyword for the invoked function.

```js
function printer(message) {
    console.log(message)
}

printer.call({}, "hello")
printer.apply({}, ["world!"])
//hello
//world!



function Person(name){
    this.name = name;
    this.introduceSelf = function() {
        console.log("Hello, my name is " + this.name);
    }
}

var alice = new Person('Alice');
alice.introduceSelf();

alice.introduceSelf.call({name: "Bob"});
alice.introduceSelf.apply({name: "Casey"});
//Hello, my name is Alice
//Hello, my name is Bob
//Hello, my name is Casey




function Person(name){
    this.name = name;
    this.introduceSelf = function(greeting) {
        console.log(greeting + ", my name is " + this.name);
    }
}

var alice = new Person('Alice');
alice.introduceSelf('Hello');
// logs "Hello, my name is Alice", as expected

alice.introduceSelf.call({name: "Bob"}, 'Bonjour');
// logs "Bonjour, my name is Bob"

alice.introduceSelf.apply({name: "Casey"}, ['Hola']);
// logs "Hola, my name is Casey"

// For .call you pass the parameters comma separated (like normal). For .apply you pass the parameters in an array.
```
That’s a fair question. But the two methods have different use cases. If you know exactly how many arguments you're passing, you should use .call. If you don’t know, or if your arguments are already in an array, you should use .apply.






#### JSON

#### Math

#### Objects

#### Regex

#### Strings

**slice(), substr() and subString() are all similar**

[Using Slice(), Substring(), And Substr() In Javascript](http://www.bennadel.com/blog/2159-using-slice-substring-and-substr-in-javascript.htm)

For both the slice() and substring() methods, the second argument is exclusive; that is, the resultant substring will not contain the character at the final index.

As you can see, the slice() and substring() methods are roughly the same; the only difference is that the slice() method can accept a negative index, relative to the end of the string. Should you try to use a negative index in substring(), it seems to be relative the beginning of the string (and therefore is out-of-bounds).

The substr() method can use a negative index; but, rather than using a to-argument, it uses a length-argument. This can be especially useful if you know the length of the substring ahead of time and don't want to perform any superflous math to calculate the necessary indices.

NOTE: According to W3Schools, using a negative index in substr() does not work with Internet Explorer (IE).

I can't see a reason to use the substring() method. It appears to be a less-robust version of the slice() method. If you know the indices, use slice(); if you know the length, use substr(). Unless I'm missing something subtle, the decision making seems to be fairly straightforward.

```js

var numbers = "0123456789";

// Begin Slice and End Slice
slice( 3, 7 ) : 3456
slice( -7, 7 ) : 3456
slice( -7, -3 ) : 3456
slice( 3 ) : 3456789
slice( -7 ) : 3456789
slice( 100, 101 ) :

//
substring( 3, 7 ) : 3456
substring( -7, 7 ) : 0123456
substring( -7, -3 ) :
substring( 3 ) : 3456789
substring( -7 ) : 0123456789
substring( 100, 101 ) :

// Start and Len. Len counts forwards from marker
substr( 3, 4 ) : 3456
substr( -7, 4 ) : 3456
substr( 3 ) : 3456789
substr( -7 ) : 3456789
substr( 100, 1 ) :

```

**startsWith()** uses indexOf() under the hood.

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


## Looking back

I was psyched to get this set up and rolling, but it did become arduous to complete. Although I do feel drained, at least I have seen every thing. Now I have to be able to recall these and get good at using them.
