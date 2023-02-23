// Create a team array
generateEmployeeTeam = team => {
    
    // Create Manager Profiles
    const generateManager = function(manager) {
        return `
            <div class="box" style="width:250px; height:200px">
                    <div id="top" class="p-1 has-background-primary-dark">
                        <p class="title is-4 has-text-white">${manager.name}</p>
                        <p class="title is-4 has-text-white"><i class="fa-solid fa-mug-hot"></i> Manager</p>
                    </div>
                    <div id="bottom">
                        <p>ID Number: ${manager.id}</p>
                        <p>Email: <a href=mailto:${manager.email}>${manager.email}</a></p>
                        <p>Office Number: ${manager.officeNumber}</p>
                    </div>
            </div>`;
    };

    // Create Engineer Profiles
    const generateEngineer = function(engineer) {
        return `
            <div class="box" style="width:250px; height:200px">
                    <div id="top" class="p-1 has-background-primary-dark">
                        <p class="title is-4 has-text-white">${engineer.name}</p>
                        <p class="title is-4 has-text-white"><i class="fa-solid fa-glasses"></i> Engineer</p>
                    </div>
                    <div id="bottom">
                        <p>ID Number: ${engineer.id}</p>
                        <p>Email: <a href=mailto:${engineer.email}>${engineer.email}</a></p>
                        <p>Office Number: <a href=https://github.com/${engineer.github}>${engineer.github}</p>
                    </div>
            </div>`;
    };

    // Create Intern Profiles
    const generateIntern = function(intern) {
        return `
            <div class="box" style="width:250px; height:200px">
                    <div id="top" class="p-1 has-background-primary-dark">
                        <p class="title is-4 has-text-white">${intern.name}</p>
                        <p class="title is-4 has-text-white"><i class="fa-solid fa-graduation-cap"></i> Intern</p>
                    </div>
                    <div id="bottom">
                        <p>ID Number: ${intern.id}</p>
                        <p>Email: <a href=mailto:${intern.email}>${intern.email}</a></p>
                        <p>School: ${intern.school}</p>
                    </div>
            </div>`;
    };
    
    // Create Employee Team array and psuh to HTML
    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");
}
// Create HTML file and export

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="./structure.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">

    </head>
    <body>
    <header class="title is-2 has-text-white has-background-primary-dark has-text-centered p-3">Team Profile</header>
        <main>
            <div id="profile-boxes" class="is-flex is-justify-content-center is-justify-content-space-evenly is-flex-wrap-wrap">
                ${generateEmployeeTeam(team)}
            </div>
        </main>
    </body>
    </html>`;
}