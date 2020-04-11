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
var questionContent = document.querySelector("#question-content");
var btnStart = document.querySelector("#btn-start");
var welcomeContent = document.querySelector("#welcome-container");
var questionIdCounter = 0;
var timeLeft = 0;
var timerEl = document.getElementById("timer");


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
    document.getElementById("welcome-h1").style.display = 'none';
    document.getElementById("welcome-h2").style.display = 'none';
    document.getElementById("btn-start").style.display = 'none';
};



var createQuestions = function(btnId) {
    //create question
    var qtnContainer = document.createElement('div');
    qtnContainer.className = "qtn-content-div";

    var questions = ["question 1", "question 2", "question 3"];
    for (var i = 0; i < questions.length; i++) {
        var questionOrderEl = document.createElement("h1");
        questionOrderEl.textContent = questions[i];
        questionOrderEl.setAttribute("value", questions[i]);
        qtnContainer.appendChild(questionOrderEl);
    }
    questionContent.appendChild(qtnContainer);

    var btn1 = document.createElement('button');
    btn1.setAttribute("id", btnId);
    btn1.textContent = "one";
    questionContent.appendChild(btn1);

    var btn2 = document.createElement('button');
    btn2.setAttribute("id", btnId);
    btn2.textContent = "two";
    questionContent.appendChild(btn2);

    var btn3 = document.createElement('button');
    btn3.setAttribute("id", btnId);
    btn3.textContent = "three";
    questionContent.appendChild(btn3);

    var btn4 = document.createElement('button');
    btn4.setAttribute("id", btnId);
    btn4.textContent = "four";
    questionContent.appendChild(btn4);

};


// create all elements
// 
// var btn2 = document.createElement('button');
// var btn3 = document.createElement('button');
// var btn4 = document.createElement('button');
// // store button elements in variable
// var buttonItems = document.getElementsByTagName('button');
// // set text content for elements
// // Append all of our elements
// body.appendChild(infoEl);

// set style attributes of all elements
//infoEl.setAttribute('style', 'margin:auto; border:solid; padding-top:300px; padding-bottom:0px;' );

document.getElementById("btn-start").addEventListener("click", countdown);
document.getElementById("btn-start").addEventListener("click", createQuestions);