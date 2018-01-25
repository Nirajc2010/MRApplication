
describe('New patient list', function() {

    beforeEach(function() {

    });

    it('should render new patient information page', function() {
        browser.get('http://localhost:8080/#/patient');
        var patientLink = element(by.id('addpatient'));
        patientLink.click();
    });

    it('should save new patient', function() {
        element(by.model('data.name')).sendKeys('John');
        element(by.model('data.age')).sendKeys('31');
        element(by.model('data.gender')).sendKeys('Male');
        element(by.model('data.email')).sendKeys('ni@c.o');
        element(by.model('data.height')).sendKeys(3.4);

        element(by.id('save')).click();
    });

});