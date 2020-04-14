const inquirer = require("inquirer");
const fs = require("fs");


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
        
    ]).then(function (questions) {




      fs.writeFile("README.md", generateMarkdown = `
            # ${proName.response} README \n
            ## **${gitName.response}** \n
            # User Profile ${response.data.avatar_url} \n
            # App Description \n
            ${proDesc.response}\n
            ## Table of Contents \n
            ${proTable.response}\n
            ### Installation \n
            ${proInstall.response}\n
            ## ** Email**\n
            ${.}\n
            ## Contributors \n
            ${.}\n
            ## Testing \n
            ${.}\n
            ## Questions \n
            ${.}
            `,
            

            function(err) {

                if (err) {
                  return console.log(err);
                }
            
            
                })
               let badge = "[![NPM Version](https://img.shields.io/npm/v/npm.svg?style=flat)]()";
                fs.appendFile("README.md", '\n' + badge, function(err){
                    if (err) {
                        return console.log(err);
                    }
                    else{
                        console.log("Success! You did it!");
                    }
                });

            });
        });
    };

init();


