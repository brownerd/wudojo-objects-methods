// JSON.parse()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

// The JSON.parse() method parses a string as JSON, optionally transforming the value produced by parsing.

/*
Parameters

  text
    The string to parse as JSON. See the JSON object for a description of JSON syntax.

  reviver Optional
    If a function, prescribes how the value originally produced by parsing is transformed, before being returned.

Returns

  Returns the Object corresponding to the given JSON text.

Throws

  Throws a SyntaxError exception if the string to parse is not valid JSON.
*/


// JSON.parse() does not allow trailing commas

// More Info
// https://msdn.microsoft.com/library/cc836466(v=vs.94).aspx

export const jsonPARSEFN = (json) => JSON.parse(json)
