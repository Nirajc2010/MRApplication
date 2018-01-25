define(['./module'], function (module) {
    'use strict';
    module.service('PatientService', ['httpService', function (httpService) {
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
                    "name": "Ram",
                    "age": 31,
                    "gender": "Male",
                    "email": "nira@g.com",
                    "height": 31,
                    "Dob": "02/04/1985",
                    "address": "Nerul"

                },
                {
                    "id": 3,
                    "name": "Joy",
                    "age": 32,
                    "gender": "Male",
                    "email": "nira@g.com",
                    "height": 32,
                    "Dob": "04/24/1985",
                    "address": "Nerul"

                },
                {
                    "id": 4,
                    "name": "Shruti",
                    "age": 31,
                    "gender": "Male",
                    "email": "nira@g.com",
                    "height": 31,
                    "Dob": "02/04/1985",
                    "address": "Nerul"

                },
                {
                    "id": 5,
                    "name": "Nikhil",
                    "age": 32,
                    "gender": "Male",
                    "email": "nira@g.com",
                    "height": 32,
                    "Dob": "04/24/1985",
                    "address": "Nerul"

                },
                {
                    "id": 6,
                    "name": "Bharat",
                    "age": 31,
                    "gender": "Male",
                    "email": "nira@g.com",
                    "height": 31,
                    "Dob": "02/04/1985",
                    "address": "Nerul"

                }
            ]
        }

        this.setPatientData = function (patData) {
            this.data = patData;
        }

        this.getPatient = function () {
            var self = this;
            httpService.get('/js/patients.json').then(function () {
                self.setPatientData(data);
            });
        }

        this.getPatientData = function () {
            return this.data ? this.data.patients : data.patients;
        }

        this.getPatientById = function (id) {
            return this.getPatientData().find(function (patient) {
                if (patient.id === id) {
                    return patient;
                }
            })
        }

        this.updatePatient = function (modifiedPatient) {
            return this.getPatientData().some(function (patient) {
                if (modifiedPatient.id === patient.id) {
                    Object.assign(patient, modifiedPatient);
                    return true;
                }
            });
        }

        this.deletePatient = function (id) {
            var self = this;
            return this.getPatientData().some(function (patient, index) {
                if (parseInt(id) === patient.id) {
                    self.getPatientData().splice(index, 1);
                    return true;
                }
            });
        }

        this.savePatient = function (patient) {
            patient.id = parseInt(Math.random() * 1000);
            this.getPatientData().push(patient);
            return true;
        }
    }]);
});