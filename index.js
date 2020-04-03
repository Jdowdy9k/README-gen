const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of the project?",
            name: "proName"
        },
        {
            type: "input",
            message: "Give a discription of your project.",
            name: "proDesc"
        },
        {
            type: "input",
            message: "Give a table of contents for your project.",
            name: "proTable"
        },
        {
            type: "input",
            message: "How would the user install your project?",
            name: "proInstall"
        },
    ]).then(function(response) {
            console.log(response.proName)
            console.log(response.proDesc)
      });




      function writeToFile(fileName, data) {
}

function init() {

}

init();

