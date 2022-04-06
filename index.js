// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
// install and require inquirer

// require fs
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'Enter the project title: (REQUIRED)',
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('Please enter a project title!');
            return false;
        }
    }
},

];

// TODO: Create a function to initialize app
function init() {
    // ask the user the questions - inquirer
    // -- returns a promis of the answer obj
    // -- then
    // -- -- pass that answer obj to generate md
    // -- -- that will returna  string that you should catch in a var
    // -- -- use fs to write a readme.md file
    // -- -- pass in the string w/ you markdown into that writefile

    // then you add the answers to the markdown creation function
}

// Function call to initialize app
init();
