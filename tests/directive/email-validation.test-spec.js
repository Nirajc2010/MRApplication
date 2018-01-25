define(['app', 'angularMock'], function(app, angularmock) {
    describe("Patient Directive test", function () {
        beforeEach(module('app'));
        ///beforeEach(module('email.html'));
        var $compile, rootScope, PatientService, $httpBackend;
        beforeEach(inject(function (_$compile_, _$rootScope_, _$httpBackend_, $injector) {
            $compile = _$compile_;
            rootScope = _$rootScope_;
            $httpBackend = _$httpBackend_;
            $scope = rootScope.$new();

            $httpBackend = $injector.get('$httpBackend');
            //$httpBackend.whenGET('partials/email.html').respond(200, '');

        }))

        it("should test email validation", function () {
            var elem = angular.element("<form><email-val></email-val></form>");
            var element = $compile(elem)($scope);
            $scope.$digest();
            //expect(element.html()).toContain('Email:');
        })
    })
})