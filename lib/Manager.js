// Importing the Employee constructor for Manager inputs 
const Employee = require("./Employee");

// The Manager constructor then extends the Employee constructor 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber; 
    }

    // Returns office number from the user input 
    getOfficeNumber () {
        return this.officeNumber;
    }

     // Overrides the employee role to manager
    getRole () {
        return "Manager";
    }
}

// To export
module.exports = Manager; 