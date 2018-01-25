// Karma configuration
// Generated on Sat Jan 20 2018 10:35:34 GMT+0530 (India Standard Time)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [




        {pattern: 'partials/*.html', included: false },
        {pattern: 'node_modules/angular/angular.js', included: false},
        {pattern: 'node_modules/angular-route/angular-route.js', included: false},
      {pattern: 'node_modules/angular-mocks/angular-mocks.js', included: false},
      {pattern: 'js/**/*.js', included: false},

      {pattern: 'tests/**/*spec.js', included: false},
        'tests/main-test.js',

    ],


    // list of files to exclude
    exclude: [
        'js/main',
        'js/bootstrap'
    ],

      plugins: [
          'karma-chrome-launcher',
          'karma-requirejs',
          'karma-jasmine',
          'karma-ng-html2js-preprocessor'
      ],
      // added this pre-processor section
      preprocessors: {
          'partials/email.html': ['ng-html2js']
      },

// added this ngHtml2JsPreprocessor section
      ngHtml2JsPreprocessor: {
          stripPrefix: 'partials/'

      },


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
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


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 0,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
