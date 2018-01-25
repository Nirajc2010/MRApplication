var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/js',

    paths: {
            'angular': '../node_modules/angular/angular',
            'angular-route': '../node_modules/angular-route/angular-route',
            'domReady': '../node_modules/requirejs-domready/domReady',
            'angularMock': '../node_modules/angular-mocks/angular-mocks',
            'app': '../js/app'
    },

    shim: {
        'app': {
            deps: ['angular'],
            exports: 'app'
        },
        angular: { exports: 'angular' },
        'angularMock':  {
            deps: ['angular'],
            exports: 'angularMock'
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start


});

