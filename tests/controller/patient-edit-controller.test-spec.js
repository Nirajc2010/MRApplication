define(['app', 'angularMock'], function(app, angularmock) {
    describe("Patient edit controller test", function () {
        beforeEach(module('app'));

        var $controller, rootScope, PatientService, routeParams, location, utilityService, scope, a, httpBackend;
        beforeEach(inject(function (_$controller_, _$injector_, _$rootScope_, $routeParams, $location, PatientService, utilityService, $location) {
            $controller = _$controller_;
            rootScope = _$rootScope_;
            routeParams = $routeParams;
            location = $location;
            utilityService = utilityService;
            scope = _$rootScope_.$new();
            PatientService = _$injector_.get('PatientService');
            location = $location;

            var data =  {
                "id": 1,
                "name": "Niraj",
                "age": 32,
                "gender": "Male",
                "email": "nira@g.com",
                "height": 32,
                "Dob": "04/24/1985",
                "address": "Nerul"

            };

            spyOn(PatientService, 'getPatientById').and.returnValue(data);
            $controller("PatientEditController", {$scope: scope});
        }))

        it("patient edit controller initialize", function () {
            expect(scope.data.id).toEqual(1);
        })

        it("should update patient controller", inject(function (_$injector_) {
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
            PatientService = _$injector_.get('PatientService');
            spyOn(PatientService, 'getPatient').and.callThrough();
            spyOn(PatientService, 'getPatientData').and.returnValue(data.patients);
            update = spyOn(PatientService, 'updatePatient').and.callThrough();
            scope.updatePatient();
            expect(update).toHaveBeenCalledWith(data.patients[0]);
            expect(location.$$url).toEqual('/patient');
        }))
    })
})