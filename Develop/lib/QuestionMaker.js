class QuestionMaker {
    constructor(questions, names){
        this.names = names
        this.questions = questions
        this.inquirerObjects = []
    }
    createInquirerQuestions(){
        for (let i = 0; i < this.questions.length; i++) {
            this.inquirerObjects.push({
                type: 'input',
                message: this.questions[i],
                name: this.names[i]
            })
        }
        return this.inquirerObjects
    }
}


function createQuestionMakerClass(questions, names){
    if(questions.length === names.length){
        return new QuestionMaker(questions,names).createInquirerQuestions
    }
    console.log("Can't make class")
}

module.exports = createQuestionMakerClass
