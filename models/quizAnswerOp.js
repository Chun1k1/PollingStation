const mongoose = require('mongoose')

const quizAnswerOpSchema = new mongoose.Schema({
    optionNumber:{
        type:Number
    },
    answerBody:{
        type: String,
        minlength:1,
        maxlength:300,
    },
    isCorrect:{
        type:Boolean,
        default:false,

    }
},{
    _id: false
});