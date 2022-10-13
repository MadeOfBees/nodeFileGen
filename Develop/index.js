const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = [`What is the name of your app?`, `What is this app for?`, `How do you use it?`, `How do you install it?`, `How do you report issues?`, `How can people support this project?`];

function writeToFile(data) {
    fs.appendFile('ReadMe.md', data, (err) =>
    err ? console.error(err) : console.log('Commit logged!'));
}

async function init() {
    var iteration = 1;
    console.log(`Hello and welcome to Bee's readme maker!\n`);
    var questionArr = []
    for (const quez of questions) {
        var qNum = getName(`q` + iteration)
        data = {
            type: `input`,
            message: quez,
            name: qNum,
        }
        questionArr.push(data)
        ++iteration
    }
    console.log(questionArr)
    var info = await inquirer.prompt(questionArr)
    generateMarkdown(info)
}

class TitleMaker {
    constructor(value){
        this.value = value
        this.switchTitle()
    }
    switchTitle (){
        switch (this.value) {
            case 'q1':
                
                break;
        
            default:
                break;
        }
    }
}

init();
