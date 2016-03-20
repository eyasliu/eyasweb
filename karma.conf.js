// Karma configuration
// Generated on Sun Mar 13 2016 17:31:47 GMT+0800 (中国标准时间)
require('babel-core/register');
// import webpackConfig from './app/client/config/webpack.dev';
var webpack = require('webpack');
var webpackConfig = require('./app/client/config/webpack.test')['default'];

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      './app/client/utils/globals.test.js',
      './app/client/**/*.spec.js',
      // 'tests.webpack.js'
    ],


    // list of files to exclude
    exclude: [
      './app/client/node_modules/**/*',
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // add webpack as preprocessor
      // './app/client/**/*.js': ['coverage'],
      // './app/client/utils/globals.test.js': ['webpack', 'sourcemap'],
      './app/client/**/*': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true, //please don't spam the console when running in karma!
      quiet: true
    },
    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-chai',
      'karma-phantomjs-launcher'
    ], 
    // babelPreprocessor: {
    //   options: {
    //     presets: ['airbnb']
    //   }
    // },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type : 'text',
      // dir : 'coverage/'
    },

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
    browsers: [
      // 'Chrome',
      'PhantomJS'
    ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
