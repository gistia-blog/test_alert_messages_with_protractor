module.exports = function(config) {
  config.set({
    files: [
      'bower_components/angular/angular.min.js',
      'bower_components/jquery/dist/jquery.min.js',
      'bower_components/toastr/toastr.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/**/*.js',
      'tests/unit/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
