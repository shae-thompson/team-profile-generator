class Employee {
    constructor(id, name, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    // Get name from user input
    getName() {
        return this.name;
    }

    // Get ID from user input
    getId() {
        return this.id;
    }

    // Get email from user input
    getEmail() {
        return this.email;
    }

    // Returns employee type
    getEmployee() {
        return 'Employee';
    }
};

// To export
module.exports = Employee;
