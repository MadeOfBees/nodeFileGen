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
    var newData = await inquirer.prompt([{
        type: "list",
        name: "license",
        message: "What License would you like",
        choices: ["MIT", "NoLicese"]
    }])
    for (const key in newData) {
        if (Object.hasOwnProperty.call(newData, key)) {
            if(!info[key]){
                info[key] = newData[key]
            }    
        }
    }
    console.log(info)
    return
    generateMarkdown(info)
}


init();
