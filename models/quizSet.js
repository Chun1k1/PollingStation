const quizQuestionSchema = require('./quizQuestion');
const mongoose = require('mongoose')

const quizSetSchema = new mongoose.Schema({
    questionSet:{
        type:[quizQuestionSchema],
        validate: {
            validator: function(value ){
                return value.length === 10;
            },
        } 
    }
},
{
    timestamps:true
});

module.exports=mongoose.model('quizSet', quizSetSchema)

