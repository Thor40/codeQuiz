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
    console.log(timeLeft);
}

//start button
document.getElementById("btnStart").addEventListener("click", countdown());

// create all elements
// var body = document.body;
// var infoEl = document.createElement('div');
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

