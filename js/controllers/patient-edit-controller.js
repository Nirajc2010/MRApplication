define(['./module', 'services/patientService', 'services/utility'], function(module, PatientService) {

    module.controller('PatientEditController', ['$scope', '$routeParams', '$location', 'PatientService', 'utilityService', 'CONSTANTS', function($scope, $routeParams, $location, PatientService, utilityService, CONSTANTS) {

        (function() {
            $scope.genders = CONSTANTS.genders;
            var id = Number($routeParams.id);
            var patientData = PatientService.getPatientById(id);
            $scope.data = Object.assign({}, patientData);
            var dob = utilityService.convertDateStringToObject($scope.data.Dob);
            $scope.data.Dob = dob;
        })()


        $scope.updatePatient = function() {
            var isUpdated = PatientService.updatePatient($scope.data);
            if (isUpdated) {
                $location.path("/patient");
            }
        }

        $scope.cancel = function() {
            $location.path("/patient");
        }

        $scope.delete = function() {
            var isDeleted = PatientService.deletePatient($routeParams.id);
            if (isDeleted) {
                $location.path("/patient");
            }
        }
    }]);
});