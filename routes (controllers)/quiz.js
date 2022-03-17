
const express = require('express')
const quizQuestion = require('../models/quizQuestion')
const router = express.Router()
const quiz = require('../models/quizQuestion')


// All Quiz R
router.get('/',async (req, res) => {
    let searchOptions = {}
    if(req.query.name != null && req.query.name !== ''){
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try{
        const quiz = await quizQuestion.find(searchOptions)
        res.render('quiz/index', 
        {quiz: quiz,
        searchOptions: req.query
    })
    } catch{
        res.redirect('/')
    }
   
})

// New Quiz R
router.get('/new', (req, res) => {
    res.render('quiz/new', {quiz: new quiz()})
})

// Create Quiz R
router.post('/', async (req, res) => {
    const quiz = new quizQuestion({
        Question: req.body.Question
    })
try{
const newquizQuestion = await quiz.save()
res.redirect(`quiz`)
}catch{ res.render('quiz/new', {
    quiz: quiz,
    errorMessage: 'Error'
})}})



module.exports = router