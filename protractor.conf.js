'use strict';

var options = {
  port: '3000'
};

var jar = require('selenium-server-standalone-jar');

exports.config = {
  seleniumServerJar: jar.path,
  directConnect: true,
  suites: {
    full: 'src/lib/**/*.e2e.js'
  },
  capabilities: {
    browserName: 'chrome'
  },
  baseUrl: 'http://localhost:' + options.port,
  rootElement: '[data-main-app]',
  framework: 'jasmine',
  jasmineNodeOpts: {
    onComplete: null,
    realtimeFailure: true,
    showTiming: true,
    isVerbose: true,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 30000
  }
};