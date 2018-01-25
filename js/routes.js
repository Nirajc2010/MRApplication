/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/patient', {
            templateUrl: 'partials/patient.html',
            controller: 'PatientController',
            resolve: {
                initialPatientData: function(PatientService) {
                    return PatientService.getPatient();
                }
            }
        }).when('/add-patient', {
            templateUrl: 'partials/patient-add.html',
            controller: 'PatientAddController'
        }).when('/edit-patient/:id', {
            templateUrl: 'partials/patient-edit.html',
            controller: 'PatientEditController'
        }).otherwise({
            redirectTo: '/patient'
        });
    }]);
});
