
const mongoose = require('mongoose')
const quizAnswerOpSchema = require('./quizAnswerOp')


const quizQuestionSchema = new mongoose.Schema({
    Question:{
        type: String,
        minlength: 10,
        maxlength: 1000,
        required: true
    },
    answerOptions: {
        type: [quizAnswerOpSchema],
        default: undefined,
        validate: {
            validator: function(value){
                return value && value.length === 4;
            },
            
        }
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('quiz', quizQuestionSchema)
