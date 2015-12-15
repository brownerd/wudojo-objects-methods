// String.prototype.link()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/link

// Use the link() method to create an HTML snippet for a hypertext link. The returned string can then be added to the document via document.write() or element.innerHTML.

export const linK = (linkText, propperURL) => linkText.link(propperURL + '/')
