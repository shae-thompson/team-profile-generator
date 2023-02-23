// Requires Engineer constructor 
const Engineer = require('../lib/Engineer');

// creates engineer object 
describe('engineerCard', () => {
    it('makes the engineer card', () => {
    const engineer = new Engineer('Shae', 1, 'shae@email.com');

    expect(engineer.name).toEqual("Shae");
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toEqual("shae@email.com");
    });
});

//Gets GitHub user with getGithub() 
describe('engineerGithub', () => {
    it('Gets the engineer GitHub user', () => {
    const engineer = new Engineer('Shae', 1, 'shae@email.com');

    expect(engineer.getGithub()).toEqual("github");
    });
});