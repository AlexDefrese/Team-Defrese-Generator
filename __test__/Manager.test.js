const Manager = require('../lib/Manager');

test('to see if office number can be created', () => {
    const officeNumberTest = 5;
    const employeeVar = new Manager ('Madisen', 5, 'madisenmadisen@madisen.com', officeNumberTest);
    expect(employeeVar.officeNumberTest).toBe(officeNumberTest);
})

test('to test role', () => {
    const returnValue = 'Manager';
    const employeeVar = new Manager ('Madisen', 5, 'madisenmadisen@madisen.com', 5);
    expect(employeeVar.getRole()).toBe(returnValue);
})