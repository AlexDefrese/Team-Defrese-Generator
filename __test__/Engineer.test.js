const Engineer = require('../lib/Engineer');

test('to see if GitHub can be created', () => {
    const githubTest = 'JohnJohn';
    const employeeVar = new Engineer('John', 3, 'johnjohn@john.com', githubTest);
    expect(employeeVar.github).toBe(githubTest);
})

test('to see if githubTest returns GitHub', () => {
    const githubTest = 'JohnJohn';
    const employeeVar = new Engineer('John', 3, 'johnjohn@john.com', githubTest);
    expect(employeeVar.github).toBe(githubTest);
})

test('to test role', () =>{
    const returnValue = 'Engineer';
    const employeeVar = new Engineer('John', 3, 'johnjohn@john.com', 'JohnJohn');
    expect(employeeVar.getRole()).toBe(returnValue);
})