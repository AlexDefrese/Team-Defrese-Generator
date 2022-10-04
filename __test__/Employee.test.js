const Employee = require ('../lib/Employee');

test('to see if a new employee can be created', () => {
    const employeeVar = new Employee ();
    expect(typeof(employeeVar)).toBe('object');
})

test('to see if name input is valid', () => {
    const name = 'Steve';
    const employeeVar = new Employee(name);
    expect(typeof(employeeVar)).toBe(name);
})

test('to check for valid ID number', () => {
    const id = 2;
    const employeeVar = new Employee('Steve', id);
    expect(employeeVar.id).toBe(id);
})

test('to check for valid email', () => {
    const email = 'Steve@steve.com';
    const employeeVar = new Employee('Steve', 2, email);
    expect(employeeVar.email).toBe(email);
})

test('to get name', () => {
    const testName = 'Steve';
    const employeeVar = new Employee(testName);
    expect(employeeVar.getName()).toBe(testName);
})

test('to get ID', ()=> {
    const testID = 2;
    const employeeVar = new Employee(testID);
    expect(employeeVar.getId()).toBe(testID);
})

test('to verify role', () => {
    const returnValue = 'Employee';
    const employeeVar = new Employee('Steve', 2, 'Steve@steve.com');
    expect(employeeVar.getRole()).toBe(returnValue);
})