// Requires Employee constructor 
const Employee = require('../lib/Employee');

// creates employee object 
test('makes the employee card', () => {
    const employee = new Employee('Shae', 1, 'shae@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//Gets name with getName() 
test('Gets the employee name', () => {
    const employee = new Employee('Shae', 1, 'shae@email.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// Gets ID with getId() 
test('gets employee ID', () => {
    const employee = new Employee('Shae', 1, 'shae@email.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// Gets emails with getEmail()
test('gets employee email', () => {
    const employee = new Employee('Shae', 1, 'shae@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// Gets employee type with getRole()
test('gets role of employee', () => {
    const employee = new Employee('Shae', 1, 'shae@email.com');

    expect(employee.getRole()).toEqual("Employee");
}); 