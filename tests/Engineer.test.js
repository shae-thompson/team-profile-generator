// Requires Engineer constructor 
const Engineer = require('../lib/Engineer');

// creates engineer object 
test('makes the engineer card', () => {
    const engineer = new Engineer('Shae', 1, 'shae@email.com');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
});

//Gets GitHub user with getGithub() 
test('Gets the engineer GitHub user', () => {
    const engineer = new Engineer('Shae', 1, 'shae@email.com');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});