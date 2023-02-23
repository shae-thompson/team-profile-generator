// Importing the Employee constructor for Intern inputs 
const Employee = require("./Employee");

// The Intern constructor then extends the Employee constructor 
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school; 
    }

    // Returns school from the user input 
    getSchool () {
        return this.school;
    }

     // Overrides the employee role to Intern
    getRole () {
        return "Intern";
    }
} 
 
// To export
module.exports = Intern;