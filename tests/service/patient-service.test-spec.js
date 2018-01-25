define(['app', 'angularMock'], function (app, angularmock) {
    describe("Patient service", function () {
        beforeEach(module('app'));
        var patientService, httpBackend;
        var data = {
            "patients": [
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
        beforeEach(inject(function (PatientService, $httpBackend) {
            patientService = PatientService;
            httpBackend = $httpBackend;

            httpBackend.whenGET('/js/patients.json').respond(data);
            PatientService.getPatient();
        }))

        it("should test http request", function () {
            httpBackend.flush();

            var patients = patientService.getPatientData();
            expect(patients.length).toEqual(6);
        })

        it("should test delete patient service", function () {
            httpBackend.flush();
            var isPatientDeleted = patientService.deletePatient(1);
            var patients = patientService.getPatientData();
            expect(patients.length).toEqual(5);

            var isPatientDeleted = patientService.deletePatient(1);
            expect(isPatientDeleted).toBe(false);
        })
    })
})