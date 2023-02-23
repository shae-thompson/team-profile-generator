// Requires Intern constructor 
const Intern = require('../lib/Intern');

// creates intern object 
test('makes the intern card', () => {
    const intern = new Intern('Shae', 1, 'shae@email.com');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
});

//Gets School user with getSchool() 
test('Gets the intern School user', () => {
    const intern = new Intern('Shae', 1, 'shae@email.com');

    expect(intern.getSchool()).toEqual(expect.any(String));
});