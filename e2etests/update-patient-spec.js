describe('patient list', function () {

    beforeEach(function () {
        //browser.get('http://localhost:8080/#/patient');
    });

    it('should render patient list', function () {
        browser.get('http://localhost:8080/#/patient');
        var patientLink = element(by.repeater('patient in patients').row(0).column('patient.name'));
        patientLink.click();
    });

    it('should edit patient', function () {
        element(by.model('data.name')).clear().sendKeys('Citius');
        element(by.model('data.age')).clear().sendKeys('31');
        expect( element(by.model('data.name')).getAttribute('value')).toEqual('Citius');
        element(by.id('update')).click();
    });

    it('should count patients', function () {
        var patients = element.all(by.repeater('patient in patients'));
        expect(patients.count()).toEqual(6);
    });
});