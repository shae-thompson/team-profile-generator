// Requires Employee constructor 
const Employee = require('../lib/Employee');

// creates employee object 
describe('employeeCard', () => {
    it("should show employee info", () => {
        const employee = new Employee('Shae', 1, 'shae@email.com');
        
        expect(employee.name).toEqual("Shae");
        expect(employee.id).toEqual(1);
        expect(employee.email).toEqual("shae@email.com");
    });
});

//Gets name with getName() 
describe('employeeName', () => {
    it("should show employee name", () => {
    const employee = new Employee('Shae', 1, 'shae@email.com');

    expect(employee.getName()).toEqual("Shae");
    });
});

// Gets ID with getId() 
describe('employeeID', () => {
    it('gets employee ID', () => {
    const employee = new Employee('Shae', 1, 'shae@email.com');

    expect(employee.getId()).toEqual(1);
    });
});

// Gets emails with getEmail()
describe('employeeEmail', () => {
    it('gets employee email', () => {
    const employee = new Employee('Shae', 1, 'shae@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
    });
});

// Gets employee type with getRole()
describe('employeeRole', () => {
    it('gets role of employee', () => {
    const employee = new Employee('Shae', 1, 'shae@email.com');

    expect(employee.getRole()).toEqual("Employee");
    });
}); 