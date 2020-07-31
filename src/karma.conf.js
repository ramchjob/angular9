// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, '../coverage'),
            reports: ['html', 'lcovonly'],
            fixWebpackSourcePaths: true,
            thresholds: {
                statements: 70,
                lines: 70,
                branches: 70,
                functions: 70
            }
        },
        reporters: ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome', 'ChromeNoSandboxHeadless'],
        singleRun: false,
        browserDisconnectTimeout: 180000,
        browserDisconnectTolerance: 5,
        browserNoActivityTimeout: 180000,
        captureTimeout: 180000,
        proxies: {
            "/angular9/": "/assets/",
            "/angular9/assets/": "/assets/",
        },
        customLaunchers: {
            ChromeNoSandboxHeadless: {
                base: 'Chrome',
                flags: [
                    '--no-sandbox',
                    // See https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md
                    '--headless',
                    '--disable-gpu',
                    '--disable-translate',
                    '--disable-extensions',
                    '--disable-setuid-sandbox',
                    // Without a remote debugging port, Google Chrome exits immediately.
                    '--remote-debugging-port=9222',
                    '--disable-web-security',
                ]
            }
        },
    });
};
