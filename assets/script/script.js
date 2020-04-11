/* 
Click start button:
    timer starts
    presented with question;
answer the question:
    presented with another question;
question answred incorrectly:
    time subtracted from clock;
all Q's answered or timer = 0:
    gave is over;
game is over:
    save initials and score;
SHOW HIGH SCORE;
*/
var bodyEl = document.createElement("div");
var btnStart = document.querySelector("#btn-start");
var qtnContent = document.querySelector("#question-content");
var welcomeContent = document.querySelector("#welcome-container");

var timeLeft = 0;
var timerEl = document.getElementById("timer");
var questionChoices = [ "question one", "question two", "question three"];
var questionIdCounter = 0;
var answerChoices = [ "a", "b", "c", "d"];
var answerIdCounter = 0;

//timer
function countdown() {
    timeLeft = 5;

    var timeInterval = setInterval(function() {
        timerEl.textContent = timeLeft;
        timeLeft --;

        if (timeLeft === 0) {
            timerEl.textContent = "DONE"
            clearInterval(timeInterval);
        }
    }, 1000);
    //hide welcome elements
    document.getElementById("welcome-h1").style.display = 'none';
    document.getElementById("welcome-h2").style.display = 'none';
    document.getElementById("btn-start").style.display = 'none';
};

var createQuestions = function() {
    var questionTitleEl = document.createElement("div");
    question = questionChoices[questionIdCounter]
    questionTitleEl.innerHTML = "<h1 class='qtn-title'>" + question + "</h1>";

    qtnContent.appendChild(questionTitleEl);


    var btn1 = document.createElement('button');
    btn1.setAttribute("id", "correctA");
    btnCounter = answerChoices[answerIdCounter];
    btn1.innerHTML = btnCounter;
    if (answerIdCounter < 4) {
        qtnContent.appendChild(btn1);
        answerIdCounter++;
    }
    

    // var btn2 = document.createElement('button');
    // btnCounter = answerChoices[1];
    // btn2.innerHTML = btnCounter;
    // qtnContent.appendChild(btn2);

    // var btn3 = document.createElement('button');
    // btnCounter = answerChoices[2];
    // btn3.innerHTML = btnCounter;
    // qtnContent.appendChild(btn3);

    // var btn4 = document.createElement('button');
    // btnCounter = answerChoices[3];
    // btn4.innerHTML = btnCounter;
    // qtnContent.appendChild(btn4);

document.getElementById('correctA').addEventListener("click", answered)


};

var answered = function () {
    alert("Correct!");
    questionIdCounter++;
    createQuestions();
};


document.getElementById("btn-start").addEventListener("click", countdown);
document.getElementById("btn-start").addEventListener("click", createQuestions);