var startButton = document.getElementById('btn-start')
var nextButton = document.getElementById('btn-next')
var questionContainerEl = document.getElementById('question-container')
var welcome = document.getElementById('welcome-container')
var questionEl = document.getElementById('question')
const answerButtonEl = document.getElementById('btn-answer')
var timerEl = document.getElementById("timer");
var scoreShowBtn = document.getElementById('btn-score')
var scoreForm = document.getElementById('score-form')
var playerScore = document.getElementById('highScore')
var finalHighScores = document.getElementById('btn-highScore')
var countCorrectAnswers = 0;
var savedScoresArr = [];

finalHighScores.addEventListener('click', savedScores)
startButton.addEventListener('click', startGame)
startButton.addEventListener('click', countdown)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
scoreShowBtn.addEventListener('click', highScore)

//timer
function countdown() {
    timeLeft = 75;

    var timeInterval = setInterval(function() {
        timerEl.textContent = timeLeft;
        timeLeft --;

        if (timeLeft === 0) {
            timerEl.textContent = "DONE"
            clearInterval(timeInterval);
        }
    }, 1000);
};


//index for question order/ random question shuffle
var shuffleQuestions, currentQuestionIndex

function startGame() {
    // hiding start button
    startButton.classList.add('hide')
    welcome.classList.add('hide')
    playerScore.classList.add('hide')
    //randomly shuffle order of questions
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    // index of questions, starting on 0
    currentQuestionIndex = 0
    // unhiding questions and answers
    questionContainerEl.classList.remove('hide')
    // run next question function
    setNextQuestion()
    countCorrectAnswers = 0;

}
// sets next question
function setNextQuestion () {
    resetState()
    // shuffles question per the current index location
    showQuestion(shuffleQuestions[currentQuestionIndex])

}

//show answers
function showQuestion(question) {
    // add the text to the current question
    questionEl.innerText = question.question
    //for each indiviudal answer
    question.answers.forEach(answer => {
        //create a button
        var button = document.createElement('button')
        // set the button text to answer
        button.innerText = answer.text
        // add class of btn
        button.classList.add('btn')
        //add a dataset attribute to button el
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        // take the button click in as a parameter
        button.addEventListener('click', selectAnswer)
        //append newly created button to the answer button element
        answerButtonEl.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    //if there is a child in the answer button elements, remove
    while (answerButtonEl.firstChild) {
        answerButtonEl.removeChild(answerButtonEl.firstChild)
    }
}

// answer function set to target
function selectAnswer (event) {
    var selectedButton = event.target
    // correct is pulled from dataset
    var correct = selectedButton.dataset.correct
    //if target is correct (see setStatusClass)
    setStatusClass(document.body, correct)
    // then it will populate a new set of questions from the next dataset
    Array.from(answerButtonEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    //if we are at the last question, hide next to stop question cycling
    if (shuffleQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
        // allow restart of game
    } else {
        scoreShowBtn.classList.remove('hide')
        scoreShowBtn.innerText = "Show Score!"
        questionContainerEl.classList.add('hide')
    }
    if (selectedButton.dataset = correct) {
        countCorrectAnswers++;
    }
    localStorage.setItem('score', countCorrectAnswers);
    document.getElementById('right-answers').innerHTML = countCorrectAnswers;
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function highScore() {
    localStorage.getItem(countCorrectAnswers)
    questionContainerEl.classList.remove('hide')
    scoreShowBtn.classList.add('hide')
    playerScore.classList.remove('hide')
    resetState()

    savedScoresArr.push(prompt("Enter your Initials to save!"));

    document.getElementById('question').innerHTML = ("<h2>Your Score!</h2>")
    document.getElementById('highScore').innerHTML = savedScoresArr + ": score " + countCorrectAnswers + "."
    savedScoresArr.push(countCorrectAnswers)
    localStorage.setItem('id', savedScoresArr)
    finalHighScores.classList.remove('hide')
    document.getElementById('btn-highScore').innerHTML = ("Show High Scores")
}

function savedScores() {
    resetState()
    finalHighScores.classList.add('hide')
    localStorage.getItem(savedScoresArr)
    document.getElementById('question').innerHTML = ("<h2>High Scores</h2>")
    document.getElementById('highScore').innerHTML = savedScoresArr;


}


// questions string and answers array
var questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
            { text: 'strings', correct: false, wrong: false},
            { text: 'booleans', correct: false, wrong: true },
            { text: 'alerts', correct: true, wrong: false },
            { text: 'numbers', correct: false, wrong: true }
        ]
    },
    {
        question: 'Arrays in JavaScript can be stored in:',
        answers: [
            { text: 'booleans', correct: false, wrong: true },
            { text: 'other arrays', correct: false, wrong: true },
            { text: 'numbers and strings', correct: false, wrong: true },
            { text: 'all of the above', correct: true, wrong: false }
        ]
    },
    {
        question: 'Condition in an if/else statement is enclosed with:',
        answers: [
            { text: 'sparenthesis', correct: true, wrong: false },
            { text: 'curly brackets', correct: false, wrong: true },
            { text: 'quotes', correct: false, wrong: true },
            { text: 'square brackets', correct: false, wrong: true }
        ]
    },
    {
        question: 'A useful tool that can be used during the devlopment and debugging for printing content to the debugger is:',
        answers: [
            { text: 'for loops', correct: false, wrong: true },
            { text: 'CSS', correct: false, wrong: true },
            { text: 'console.log', correct: true, wrong: false },
            { text: 'terminal/bash', correct: false, wrong: true }
        ]
    }
]