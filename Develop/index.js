const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const projectQuestions = require('./getQuestions')
console.log(projectQuestions)
function writeToFile(data) {
    fs.appendFile('ReadMe.md', data, (err) =>
    err ? console.error(err) : console.log('Commit logged!'));
}

async function init() {
    var info = await inquirer.prompt(projectQuestions)
    console.log(info)
    return
    generateMarkdown(info)
}


init();
