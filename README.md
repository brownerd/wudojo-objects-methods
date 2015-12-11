# Learning TAPE, ESLINT, NPM Watch and CodeCoverage

It took these resources to figure this shit out. I still suck, but I have a starting point now.

- [Buckle Up with Tape…](https://medium.com/@MarcFly1103/buckle-up-with-tape-1bd5e9e828#.17zidumfl)
- [buckle-up-with-tape-part1](https://github.com/MarcCloud/buckle-up-with-tape-part1)
- [react-hello](https://github.com/ericelliott/tdd-es6-react/tree/master/examples/react-hello)
- [5 Questions Every Unit Test Must Answer](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d#.nka7obln0)


```js

// Referenced from react-hello

  "scripts": {
    "init": "rimraf .validate.json && rimraf .jshintrc",
    "clean": "rimraf build",
    "lint": "eslint source test",
    "prebuild": "npm run clean",
    "build": "npm run build:webpack && npm run build:min && npm run build:doc",
    "build:webpack": "node scripts/buildWebpack.js",
    "build:min": "node scripts/buildProduction.js",
    "build:doc": "doctoc --github --title \"## Contents\" ./",
    "start": "node scripts/dev-server.js",
    "test": "babel-node test/index.js",
    "dev": "watch 'clear && npm run -s lint && npm -s test' source test",
    "cov": "npm run cov:clean && npm run cov:generate",
    "cov:clean": "rimraf coverage",
    "cov:generate": "babel-node node_modules/.bin/isparta cover --report text --report html test/index.js",
    "prepublish": "npm run build",
    "validate": "npm run lint && npm run build && npm test",
    "validate-dev": "npm run lint && npm run build && npm test | faucet",
    "audit": "nsp package",
    "deps": "npm run deps:missing && npm run deps:extra",
    "deps:missing": "dependency-check package.json",
    "deps:extra": "dependency-check package.json --extra --no-dev --ignore",
    "precheck": "npm run validate",
    "check": "npm run audit && npm run deps && npm outdated --depth 0"
  },
  "pre-commit": [
    "lint"
  ],

```
