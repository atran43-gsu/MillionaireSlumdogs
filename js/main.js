
/*important: assummes that the var name from PHP back end is as follow
please confirm with Steve*/
/*var for test*/
let STATE = "NEWQ";
let QID = "QW2";
var Q = "What is what waht";
var A1 = "answer 1 yse yse";
var A2 = "answer 2 bla bal";
var A3 = "answer 3 iunkdf";
var A4 = "answer  4 ewsdf";
var SCORE = 700;


/**end var for test */


/**list of nodes */
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
let choiceInput = document.querySelector(".choice-input");
let keepPlayingButton = document.querySelector(".keep-playing");
let takeMoneyButton = document.querySelector(".take-money");


/**end list of nodes */


/**first thing: update score and progress*/
let firstActions = function () {
    //update score
    choiceScore.value = SCORE;
    answerScore.value = SCORE;

    //update progress
    for (let i = 0; i < 1000000; i = i + 100) {
        let element = document.getElementById(i);
        if (element && (parseInt(element.id) < SCORE)) {
            //Toan, you can change appreance of element here by javascript
            element.style.backgroundColor = "blue";
        }
    }
}



/**update questions */
let updateQuestion = function () {
    
    quizContent.style.display = "block";

    //update question ID
    questionID.value = QID;
    question.innerHTML= Q;

    ansVal1.value = A1;
    ansText1.innerHTML = A1;

    ansVal2.value = A2;
    ansText2.innerHTML = A2;

    ansVal3.value = A3;
    ansText3.innerHTML = A3;

    ansVal4.value = A4;
    ansText4.innerHTML = A4;
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
        choiceInput.setAttribute("name", "KEEPPLAYING");
    }
    else {
        choiceInput.setAttribute("name", "TAKEMONEY");
    }
    choiceForm.submit();
};

keepPlayingButton.addEventListener("click", submitChoice);
takeMoneyButton.addEventListener("click", submitChoice);


/**cases
 * fron back to front:

    +update questions --done
    +update result
     - when wrong: 
        display wrong
     - when right:
        display righ
    +update point list
        display what to be done
 */


/*list of what finction to run based on state*/
firstActions();
STATE === "CORRECT" && winAction();
STATE === "INCORRECT" && loseAction();
STATE === "NEWQ" && updateQuestion(); //when new questions pops up

console.log("test: code ran through");