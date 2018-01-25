define(['./module', 'services/patientService', 'services/utility'], function(module, PatientService) {

    module.controller('PatientAddController', ['$scope', '$location', 'PatientService', 'CONSTANTS', function($scope, $location, PatientService, CONSTANTS) {

        (function() {
           $scope.data = {};
           $scope.genders = CONSTANTS.genders;
            //$scope.selectedGender = "Not selected";
        })()

        $scope.savePatient = function() {
            var isSaved = PatientService.savePatient($scope.data);
            if (isSaved) {
                $location.path("/patient");
            }
        }

        $scope.cancel = function() {
            $location.path("/patient");
        }

    }]);
});