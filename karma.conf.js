/* eslint-disable no-var */

var webpackConfig = require('./webpack.config')

module.exports = function (config) {
  config.set({
    basePath : '',
    frameworks : ['mocha'],
    files : [
      {
        pattern : 'src/test-helpers/test-index.js',
        watched : false,
        included : true,
        served : true
      }
    ],
    webpack : webpackConfig,
    webpackMiddleware : {
      stats : {
        colors : true
      },
      noInfo: true
    },
    preprocessors : {
      'src/test-helpers/test-index.js' : ['webpack']
    },
    reporters : ['mocha', 'notify'],
    port : 9876,
    colors : true,
    logLevel : config.LOG_INFO,
    autoWatch : true,
    browsers : ['PhantomJS'],
    singleRun : true

  })
}

/* eslint-enable no-var */

