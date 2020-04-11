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



// var createQuestions = function() {
//     //create question
//     var question = document.createElement('h1');
//     question.textContent = "Question One!";
//     question.className = "qtn-item";
//     question.setAttribute("qtn-id", questionIdCounter)
//     questionContent.appendChild(question);
// };


// create all elements
//var infoEl = document.createElement('div');
// var listEl = document.createElement('ol');
// var btnS = document.createElement('button')
// var btn1 = document.createElement('button');
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