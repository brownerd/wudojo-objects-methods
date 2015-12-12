// Hacked from this resource: https://gist.github.com/joemccann/780256

import fs from 'fs'

function jsFiles(path, dir, outFilename, cb) {
  fs.readdir(path, function(err, files) {

    var files = []

    // Check for js files and push on the array if it's a match.
    fs.readdirSync(path).forEach(function (file) {
      file.substr(-2).match(/js/) && files.push(`./js/${dir}/${file}`)
    })

    fs.writeFile(__dirname + '/data/' + outFilename, 'module.exports = ' + JSON.stringify( files, null, 2 ), function(err) {
      if (err) throw err
      cb && cb('Dunzo.')
    })
  })
}
// // Create Arrays list
// jsFiles('./js/arrays', 'arrays', 'array-list.js', (message) => {
//     console.log(message)
// })
// // Create Dates list
// jsFiles('./js/date', 'date', 'date-list.js', (message) => {
//     console.log(message)
// })
// // Create DOM list
// jsFiles('./js/dom', 'dom', 'dom-list.js', (message) => {
//     console.log(message)
// })
// // Create Functions list
// jsFiles('./js/functions', 'functions', 'functions-list.js', (message) => {
//     console.log(message)
// })
// // Create JSON list
// jsFiles('./js/json', 'josn', 'json-list.js', (message) => {
//     console.log(message)
// })
// // Create Math list
// jsFiles('./js/math', 'math', 'math-list.js', (message) => {
//     console.log(message)
// })
// // Create Object list
// jsFiles('./js/objects', 'objects', 'objects-list.js', (message) => {
//     console.log(message)
// })
// // Create RegEx list
// jsFiles('./js/regex', 'regex', 'regex-list.js', (message) => {
//     console.log(message)
// })
// // Create String list
// jsFiles('./js/strings', 'strings', 'strings-list.js', (message) => {
//     console.log(message)
// })
// // Create Other list
jsFiles('./js/other', 'strings', 'other-list.js', (message) => {
    console.log(message)
})
