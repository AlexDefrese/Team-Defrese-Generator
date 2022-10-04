const Intern = require('../lib/Intern');

test('to create school', () => {
    const schoolTest = 'School Name';
    const employeeVar = new Intern('Frank', 4, 'frankfrank@frank.com', schoolTest);
    expect(employeeVar.school).toBe(schoolTest);
})

test('to see if officeNumber returns office number', () => {
    const officeNumber = '4';
    const employeeVar = new Intern('Frank', 4, 'frankfrank@frank.com', officeNumber);
    expect(employeeVar.officeNumber()).toBe(officeNumber);
})

test('to test role', () => {
    const returnValue = 'Intern';
    const employeeVar = new Intern('Frank', 4, 'frankfrank@frank.com', 'School Name');
    expect(employeeVar.getRole()).toBe(returnValue); 
})
