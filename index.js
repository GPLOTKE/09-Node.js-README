// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// console.log('package is:', package)

// TODO: Create an array of questions for user input
const questions = ['What is your github username?',
    'What is your email address?',
    'What is your project name?',
    'Please write a description of your project.',
    'What kind of license should your project have?',
    'What command should be run to install the dependencies?',
    'What command should be run to run tests?',
    'What does the user need to know about using the repository?',
    'What does the user need to know about contributing to the repository?',
];

inquirer
    .prompt([{
            type: 'input',
            message: questions[0],
            name: 'username',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'email',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'description',
        },
        {
            type: 'list',
            message: questions[4],
            choices: [
                "MIT",
                "ISC",
                "Apache_2.0",
                "GNU_GPLv3",
            ],
            name: 'license',
        },
        {
            type: 'input',
            message: questions[5],
            name: 'installation',
        },
        {
            type: 'input',
            message: questions[6],
            name: 'tests',
        },
        {
            type: 'input',
            message: questions[7],
            name: 'usage',
        },
        {
            type: 'input',
            message: questions[8],
            name: 'contributing',
        },
    ])
    // TODO: Create a function to write README file
    .then((data) => {
        const readmeContent = generateMarkdown(answers);

        fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();