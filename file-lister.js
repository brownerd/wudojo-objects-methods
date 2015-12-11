// Hacked from this resource: https://gist.github.com/joemccann/780256

import fs from 'fs'

function jsFiles(path, outFilename, cb) {
  fs.readdir(path, function(err, files) {

    const files = []

    // Check for js files and push on the array if it's a match.
    fs.readdirSync(path).forEach(function (file) {
      file.substr(-2).match(/js/) && files.push(`./js/${file}`)
    })

    fs.writeFile(__dirname + '/data/' + outFilename, 'module.exports = ' + JSON.stringify( files ), function(err) {
      if (err) throw err
      cb && cb('Dunzo.')
    })
  })
}

jsFiles('./js/arrays', 'array-list.js', (message) => {
    console.log(message)
})

jsFiles('./js/date', 'date-list.js', (message) => {
    console.log(message)
})

jsFiles('./js/dom', 'dom-list.js', (message) => {
    console.log(message)
})

jsFiles('./js/functions', 'functions-list.js', (message) => {
    console.log(message)
})

jsFiles('./js/json', 'json-list.js', (message) => {
    console.log(message)
})

jsFiles('./js/math', 'math-list.js', (message) => {
    console.log(message)
})

jsFiles('./js/objects', 'objects-list.js', (message) => {
    console.log(message)
})

jsFiles('./js/regex', 'regex-list.js', (message) => {
    console.log(message)
})

jsFiles('./js/strings', 'strings-list.js', (message) => {
    console.log(message)
})
