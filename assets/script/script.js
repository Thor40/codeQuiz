var startButton = document.getElementById('btn-start')
var nextButton = document.getElementById('btn-next')
var questionContainerEl = document.getElementById('question-container')
var welcome = document.getElementById('welcome-container')
var questionEl = document.getElementById('question')
const answerButtonEl = document.getElementById('btn-answer')
var timerEl = document.getElementById("timer");
var showScore = document.getElementById('btn-score')
var scoreForm = document.getElementById('score-form')
var countCorrectAnswers = 0;

startButton.addEventListener('click', startGame)
startButton.addEventListener('click', countdown)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
showScore.addEventListener('click', highScore)

//timer
function countdown() {
    timeLeft = 75;

    var timeInterval = setInterval(function() {
        timerEl.textContent = timeLeft;
        timeLeft --;

        if (timeLeft === 0 || shuffleQuestions.length > currentQuestionIndex + 1) {
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
        showScore.classList.remove('hide')
        showScore.innerText = "Show Score!"
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
    showScore.classList.add('hide')
    resetState()
    var scoreInput = window.prompt("Please add initials!")
    questionEl.innerText.add(scoreInput[countCorrectAnswers])
}

// questions string and answers array
var questions = [
    {
        question: 'What is 2 + 2',
        answers: [
            { text: '4', correct: true, wrong: false},
            { text: '2', correct: false, wrong: true },
            { text: '7', correct: false, wrong: true },
            { text: '5', correct: false, wrong: true }
        ]
    },
    {
        question: 'What is 4 + 3',
        answers: [
            { text: '7', correct: true },
            { text: '56', correct: false }
        ]
    },
    {
        question: 'What color is the sky',
        answers: [
            { text: 'blue', correct: true },
            { text: 'red', correct: false }
        ]
    }
]