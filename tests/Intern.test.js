// Requires Intern constructor 
const Intern = require('../lib/Intern');

// creates intern object 
describe('internCard', () => {
    it('makes the intern card', () => {
    const intern = new Intern('Shae', 1, 'shae@email.com');

    expect(intern.name).toEqual("Shae");
    expect(intern.id).toEqual(1);
    expect(intern.email).toEqual("shae@email.com");
    });
});

//Gets School user with getSchool() 
describe('internSchool', () => {
    it('Gets the intern School user', () => {
    const intern = new Intern('Shae', 1, 'shae@email.com');

    expect(intern.getSchool()).toEqual("school");
    });
});