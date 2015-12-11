// Hacked from this resource: https://gist.github.com/joemccann/780256

import fs from 'fs'

function jsFiles(path, outFilename, cb) {
  fs.readdir(path, function(err, files) {

    var files = []

    // Check for js files and push on the array if it's a match.
    fs.readdirSync(path).forEach(function (file) {
      file.substr(-2).match(/js/) && files.push(`./js/${file}`)
    })

    fs.writeFile(__dirname + '/data/' + outFilename, 'module.exports = ' + JSON.stringify( files, null, 2 ), function(err) {
      if (err) throw err
      cb && cb('Dunzo.')
    })
  })
}
// Create Arrays list
jsFiles('./js/arrays', 'array-list.js', (message) => {
    console.log(message)
})
// Create Dates list
jsFiles('./js/date', 'date-list.js', (message) => {
    console.log(message)
})
// Create DOM list
jsFiles('./js/dom', 'dom-list.js', (message) => {
    console.log(message)
})
// Create Functions list
jsFiles('./js/functions', 'functions-list.js', (message) => {
    console.log(message)
})
// Create JSON list
jsFiles('./js/json', 'json-list.js', (message) => {
    console.log(message)
})
// Create Math list
jsFiles('./js/math', 'math-list.js', (message) => {
    console.log(message)
})
// Create Object list
jsFiles('./js/objects', 'objects-list.js', (message) => {
    console.log(message)
})
// Create RegEx list
jsFiles('./js/regex', 'regex-list.js', (message) => {
    console.log(message)
})
// Create String list
jsFiles('./js/strings', 'strings-list.js', (message) => {
    console.log(message)
})
