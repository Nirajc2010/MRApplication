define(['./module', 'services/patientService'], function(module, PatientService) {

    module.controller('PatientController', ['$scope', 'PatientService', '$location', function($scope, PatientService, $location) {
        $scope.patients = PatientService.getPatientData();

        $scope.newPatient = function() {
            $location.path("/add-patient");
        }
    }]);
});