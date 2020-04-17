const inquirer = require("inquirer");
const fs = require("fs");


function fireQuestions() {
    return inquirer.prompt(questions)
}

const questions = [

    {
        type: "input",
        message: "What is your Github username?",
        name: "gitName"
    },
    {
        type: "input",
        message: "What is your E-mail?",
        name: "email"
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


]
function init() {

    fireQuestions()
        .then(function (questions) {

            fs.writeFile("README.md", function (err) {
                `
            # ${ proName.response} README \n
            ## ** ${ gitName.response}** \n
            ## ** Email **\n
                ${ email.response} \n
            # User Profile ${ response.data.avatar_url} \n
            # App Description \n
                ${ proDesc.response} \n
            ## Table of Contents \n
                ${ proTable.response} \n
            ### Installation \n
                ${ proInstall.response} \n
            ## Contributors \n
                ${ proContr.response} \n
            ## Testing \n
                ${ protest.response} \n`



               
                let badge = "[![NPM Version](https://img.shields.io/npm/v/npm.svg?style=flat)]()";
                fs.appendFile("README.md", '\n' + process.argv[2] + badge, function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    else {
                        console.log("Success! You did it!");
                    }
                });



            });

        });

}

init();


