const inquirer = require("inquirer");


inquirer
    .prompt([
        {
            type: "input",
            message: "What is your Github username?",
            name: "gitName"
        },
        {
            type: "input",
            message: "What is the title of the project? (this should be the same name as repo)",
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
        {
            type: "input",
            message: "How would the user use your project?",
            name: "proUse"
        },
        {
            type: "input",
            message: "What licenses are used in your project?",
            name: "prolicenses"
        },
        {
            type: "input",
            message: "who is Contributing to your project?",
            name: "proContr"
        },
        {
            type: "input",
            message: "What tests are used in your project?",
            name: "proTest"
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


//[![Travis CI](https://travis-ci.org/${gitName}/${proName}.svg?branch=master)](https://travis-ci.org/tterb/yt2mp3)