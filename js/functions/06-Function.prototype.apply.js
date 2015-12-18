// Function.prototype.apply()
// Function.prototype.apply()

// The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object).

// Note:
// While the syntax of this function is almost identical to that of call(), the fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments.

/*
Parameters

  thisArg
    The value of this provided for the call to fun. Note that this may not be the actual value seen by the method: if the method is a function in non-strict mode code, null and undefined will be replaced with the global object, and primitive values will be boxed.

  argsArray
    An array-like object, specifying the arguments with which fun should be called, or null or undefined if no arguments should be provided to the function. Starting with ECMAScript 5 these arguments can be a generic array-like object instead of an array. See below for browser compatibility information.
*/





/*

I'm kid of stuck on these at the moment.

Look into Composition more and get back to this


http://lucybain.com/blog/2014/call-vs-apply/


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

*/
