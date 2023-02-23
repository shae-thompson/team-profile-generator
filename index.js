// // Link required packages
const fs = require('fs'); 
const inquirer = require('inquirer');

// // Link HTML generator page
const generateHTML = require('./src/HTMLgenerate.js');

// // Link team constrctor pages
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern =  require("./lib/Intern");

// Employee array
const teamEmployee = [];

// Create an array of questions for user input
// Manager questions 
const addManager = () => {
    console.log(`Please build your team!`);

    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the team manager?', 
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's ID number?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?",
        }
    ])
    .then(managerAnswers => {
        const  { name, id, email, officeNumber } = managerAnswers; 
        const manager = new Manager (name, id, email, officeNumber);

        teamEmployee.push(manager); 
        console.log(manager); 
    })
};
// Other Employee Questions
const addEmployee = () => {
    console.log(`Add your employees to your team!`);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'employeeType',
            message: "Which type of employee would you like to add?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID number?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?",
        },
        {
            when: (input) => input.employeeType === "Engineer",
            type: 'input',
            name: 'github',
            message: "What is the engineer's github username?",
        },
        {
            when: (input) => input.employeeType === "Intern",
            type: 'input',
            name: 'school',
            message: "What school does the intern attend?",
        },
        {
        type: 'confirm',
        name: 'addNewEmployee',
        message: 'Would you like to add more team members?',
        default: false
        },
    ])
    
    .then(employeeData => {
        // Answers for different Employee types
        let { name, id, email, employeeType, github, school, addNewEmployee } = employeeData; 
        let employee; 

        if (employeeType === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (employeeType === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamEmployee.push(employee); 

        if (addNewEmployee) {
            return addEmployee(teamEmployee); 
        } else {
            return teamEmployee;
        }
    })

};

// Generate HTML page using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(teamEmployee => {
    return generateHTML(teamEmployee);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });