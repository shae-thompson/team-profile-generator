// Importing the Employee constructor for Engineer inputs 
const Employee = require("./Employee");

// The Engineer constructor then extends the Employee constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github; 
    }

    // Returns GitHub username from the user input 
    getGithub () {
        return this.github;
    }

     // Overrides the employee role to engineer
    getRole () {
        return "Engineer";
    }
}

// To export
module.exports = Engineer; 