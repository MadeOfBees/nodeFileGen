const createQuestionMakerClass = require('./lib/QuestionMaker')
const questions = [`What is the name of your app?`, `What is this app for?`, `How do you use it?`, `How do you install it?`, `How do you report issues?`, `How can people support this project?`];
const names =['title', 'usage', 'howTo', 'install', 'issues', 'contribute']

var projectQuestions = createQuestionMakerClass(questions, names)
console.log(projectQuestions)

module.exports = projectQuestions