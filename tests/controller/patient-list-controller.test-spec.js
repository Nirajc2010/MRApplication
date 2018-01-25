define(['app', 'angularMock'], function(app, angularmock) {
    describe("Patient controller test", function () {
        beforeEach(module('app'));

        var $controller, rootScope, PatientService;
        beforeEach(inject(function (_$controller_, _$rootScope_, PatientService) {
            $controller = _$controller_;
            rootScope = _$rootScope_;

            var data = {
                "patients" : [
                    {
                        "id": 1,
                        "name": "Niraj",
                        "age": 32,
                        "gender": "Male",
                        "email": "nira@g.com",
                        "height": 32,
                        "Dob": "04/24/1985",
                        "address": "Nerul"

                    },
                    {
                        "id": 2,
                        "name": "Niraj1",
                        "age": 31,
                        "gender": "Male",
                        "email": "nira@g.com",
                        "height": 31,
                        "Dob": "02/04/1985",
                        "address": "Nerul"

                    }
                ]
            }
            PatientService = spyOn(PatientService, 'getPatientData').and.returnValue(data);
        }))

        it("should test rendering of patients", function () {
            var $scope = rootScope.$new();
            var controller = $controller("PatientController", {$scope: $scope});
            expect($scope.patients.patients.length).toEqual(2);
        })
    })
})