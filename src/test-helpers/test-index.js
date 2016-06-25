import './requires/chai-extensions'
import Promise from 'bluebird'

Promise.config({
  warnings : false // turn off warnings during test, since it throws when faking server
})

console.error = msg => { throw new Error(msg) } // eslint-disable-line no-console

// requiring by context makes sure another other pre-source code
// execution can happen first. webpack can copy source code into test
// files, which removes the single source of truth.
const testsContext = require.context('..', true, /\.spec$/)
testsContext.keys().forEach(testsContext)
