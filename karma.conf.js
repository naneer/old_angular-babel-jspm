// Karma configuration
// Generated on Sun Apr 05 2015 06:09:12 GMT+0000 (UTC)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'jspm', 'phantomjs-shim'],

    // proxy for jspm_packages
    proxies: {
      '/base/jspm_packages': '/base/src/jspm_packages'
    },
    
    // jspm configuration
    jspm: {
      loadFiles: ['src/**/*.spec.js', 'src/lib/bootstrap.js'],
      serveFiles: ['src/**/*.js', 'src/**/*.html'],
      packages: 'src/jspm_packages',
      config: 'src/config.js'
    },

    // list of files / patterns to load in the browser
    files: [
    ],


    // list of files to exclude
    exclude: [
      'src/**/*.e2e.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
