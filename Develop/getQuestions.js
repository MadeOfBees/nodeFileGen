const createQuestionMakerClass = require('./lib/QuestionMaker')
const questions = [`What is the name of your app?`, `What is this app for?`, `How do you use it?`, `How do you install it?`, `How do you report issues?`, `How can people support this project?`];
const names =['title', 'usage', 'howTo', 'install', 'issues', 'contribute']
const badges = ["[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)","[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)","[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)","[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)","[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)","[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)","No License"]
var projectQuestions = createQuestionMakerClass(questions, names)

module.exports = projectQuestions