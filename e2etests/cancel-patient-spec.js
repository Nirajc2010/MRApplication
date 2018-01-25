
describe('cancel patient list', function() {

    it('should render patient list', function() {
        var a = element(by.repeater('patient in patients').row(0).column('patient.name'));
        a.click();
    });

    it('should cancel the edit patient', function() {
        element(by.model('data.name')).sendKeys('Raj');
        element(by.id('cancel')).click();
    });

    it('should count patients', function () {
        var patients = element.all(by.repeater('patient in patients'));
        expect(patients.count()).toEqual(6);
    });
});