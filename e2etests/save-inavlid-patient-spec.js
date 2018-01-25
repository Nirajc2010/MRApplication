
describe('Invalid patient list', function() {

    beforeEach(function() {
        //browser.get('http://localhost:8080/#/patient');
    });

    it('should render patient list', function() {
        var a = element(by.repeater('patient in patients').row(0).column('patient.name'));
        a.click();

    });

    it('validate empty patient name', function() {
        element(by.model('data.name')).clear().sendKeys(' ');
        element(by.id('update')).click();
    });

});