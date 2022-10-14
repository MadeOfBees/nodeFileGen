const createQuestionMakerClass = require('./utils/questionBuilder')
const questions = ["What is the name of your app?","What is this app for?","How do you install it? ","How do you use it?","How do you report issues?","Did you run any tests? How do you run them?","How can people support this project?","What is your github username? ","What is your email?"];
const names = ["name","description","install","usage","report","tests","support","username","email"];
var projectQuestions = createQuestionMakerClass(questions, names)

module.exports = projectQuestions