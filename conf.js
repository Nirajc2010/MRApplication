exports.config = {
    baseUrl: 'http://localhost:8080/#/patient',
    directConnect: true,
    seleniumServerJar: 'protrator-config/selenium-server-2.40.0.jar',
    chromeDriver: 'protrator-config/chromedriver.exe',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['customConfig.js', 'e2etests/update-patient-spec.js', 'e2etests/cancel-patient-spec.js', 'e2etests/save-inavlid-patient-spec.js', 'e2etests/new-patient-spec.js']
}