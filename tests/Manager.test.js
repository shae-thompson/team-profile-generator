// Requires Manager constructor 
const Manager = require('../lib/Manager');

// creates manager object 
describe('managerCard', () => {
    it('makes the manager card', () => {
    const manager = new Manager('Shae', 1, 'shae@email.com');

    expect(manager.name).toEqual("Shae");
    expect(manager.id).toEqual(1);
    expect(manager.email).toEqual("shae@email.com");
    });
});

//Gets office number user with getOfficeNumber() 
describe('mangerOfficeNumber', () => {
    it('Gets the manager office number', () => {
    const manager = new Manager('Shae', 1, 'shae@email.com');

    expect(manager.getOfficeNumber()).toEqual(1);
    });
});