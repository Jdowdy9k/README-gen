const inquirer = require("inquirer");
const fs = require("fs");


function fireQuestions() {
    return inquirer.prompt(questions);
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
        name: "desc"
    },
    {
        type: "input",
        message: "Give a table of contents for your project.",
        name: "table"
    },
    {
        type: "input",
        message: "How would the user install your project?",
        name: "install"
    },
    {
        type: "input",
        message: "How would the user use your project?",
        name: "user"
    },
    {
        type: "input",
        message: "What licenses are used in your project?",
        name: "licenses"
    },
    {
        type: "input",
        message: "who is Contributing to your project?",
        name: "contr"
    },
    {
        type: "input",
        message: "What tests are used in your project?",
        name: "Test"
    },


]
function init() {

    fireQuestions()
        .then(function (questions) {

            fs.writeFile("README.md", process.argv[2] ,function (err) {
                `
            # ${ questions.proName } README \n
            ## ** ${ questions.gitname}** \n
            ## ** Email **\n
                ${ questions.email} \n
            # App Description \n
                ${ questions.desc} \n
            ## Table of Contents \n
                ${ questions.table} \n
            ### Installation \n
                ${ questions.install} \n
            ## Contributors \n
                ${ questions.contr} \n
            ## Testing \n
                ${ questions.Test} \n`




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


