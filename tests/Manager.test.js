// Requires Manager constructor 
const Manager = require('../lib/Manager');

// creates manager object 
test('makes the manager card', () => {
    const manager = new Manager('Shae', 1, 'shae@email.com');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
});

//Gets office number user with getOfficeNumber() 
test('Gets the manager office number', () => {
    const manager = new Manager('Shae', 1, 'shae@email.com');

    expect(manager.getOfficeNumber()).toEqual(expect.any(String));
});