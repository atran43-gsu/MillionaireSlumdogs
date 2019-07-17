/*var for test
!!! PLEASE COMMENT THEM OUT WHEN MERGE TO PHP*/
let state = "NEWQ";
var q = "What is what waht";
var a1 = "answer 1 yse yse";
var a2 = "answer 2 bla bal";
var a3 = "answer 3 iunkdf";
var a4 = "answer  4 ewsdf";
var score = 500;
let highScore = 500000;
let highScorePlayer = "Jane Smith";

/**end var for test */

/**list of nodes */
let highScoreDisplay = document.querySelector(".high-score");
let highScorePlayerDisplay = document.querySelector(".high-score-player");

let choiceScore = document.querySelector(".choice-score");
let answerScore = document.querySelector(".answer-score");

let quizContent = document.querySelector("#quizcontent");
let questionID = document.querySelector(".question-ID");
var question = document.querySelector(".question");
var ansVal1 = document.querySelector(".answer-value-1");
var ansText1 = document.querySelector(".answer-text-1");

var ansVal2 = document.querySelector(".answer-value-2");
var ansText2 = document.querySelector(".answer-text-2");

var ansVal3 = document.querySelector(".answer-value-3");
var ansText3 = document.querySelector(".answer-text-3");

var ansVal4 = document.querySelector(".answer-value-4");
var ansText4 = document.querySelector(".answer-text-4");

let loseContainer = document.querySelector("#lose");
let winContainer = document.querySelector("#win");

let choiceForm = document.querySelector(".choice");
let choiceState = document.querySelector(".choice-state");
let keepPlayingButton = document.querySelector(".keep-playing");
let takeMoneyButton = document.querySelector(".take-money");

/**end list of nodes */

/**first thing: update score and progress*/
let firstActions = function () {
    //update score
    choiceScore.value = score;
    answerScore.value = score;

    //update progress
    for (let i = 0; i <= 1000000; i = i + 100) {
        let element = document.getElementById(i);
        if ( element && (parseInt(element.id) <= score) ) {
            //Toan, you can change appreance of element here by javascript
            element.style.backgroundColor = "blue";
        }
    }

    //update highscore and highscore player
    highScoreDisplay.innerHTML = highScore;
    highScorePlayerDisplay.innerHTML = highScorePlayer;
}

/**update questions */
let updateQuestion = function () {
    
    quizContent.style.display = "block";

    //update question ID
    question.innerHTML= q;

    ansVal1.value = a1;
    ansText1.innerHTML = a1;

    ansVal2.value = a2;
    ansText2.innerHTML = a2;

    ansVal3.value = a3;
    ansText3.innerHTML = a3;

    ansVal4.value = a4;
    ansText4.innerHTML = a4;
};

/**when win */
let winAction = function () {
    winContainer.style.display = "block"; // display win container when correct
};

/** when lose */
let loseAction = function () {
    loseContainer.style.display = "block";
};

/* choices */
// function run when choose
let submitChoice = function (eventObject) {
    if (eventObject.target === keepPlayingButton) {
        choiceState.setAttribute("value", "KEEPPLAYING");
    }
    else {
        choiceState.setAttribute("value", "TAKEMONEY");
    }
    choiceForm.submit();
};

keepPlayingButton.addEventListener("click", submitChoice);
takeMoneyButton.addEventListener("click", submitChoice);


/*
 * Runtime calls
 */

/*what function to run based on state*/
firstActions();
state === "CORRECT" && winAction(); //short hand, similar to if statement
state === "INCORRECT" && loseAction();
state === "NEWQ" && updateQuestion();

console.log("test: code ran through");