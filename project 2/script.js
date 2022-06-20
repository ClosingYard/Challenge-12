 // Define a set of questions
const questions = [
    // Technische vragen
    {
        question: "In Visual Studio Code, Hoe roep je een preset op van HTML?",
        choices: 
        ["a. <! en dan enter>", 
        "b. <$ en dan TAB>", 
        "c. <Je roept naar je computer>", 
        "d. <Dit is niet mogelijk>"],
        answer: "a. <! en dan enter>"
    },

    {
        question: "Hoe benoem je een CSS file?",
        choices: 
        ["a. index.css", 
        "b. stylesheet.php", 
        "c. stylesheet.css", 
        "d. De naam maakt niet uit"],
        answer: "c. stylesheet.css"
    },

    {
        question: "Een programmeer taal is ___",
        choices: 
        ["a. Een taal die Spanjaarden begrijpen", 
        "b. Een taal die alle Nederlanders begrijpen", 
        "c. Een taal die computers begrijpen", 
        "d. Een taal met alleen maar enen en nullen"],
        answer: "c. Een taal die computers begrijpen"
    },

    {
        question: "Wat gebeurt er als je een debug doet runnen?",
        choices: 
        ["a. Bugs worden opgespoort en verholpen", 
        "b. Een enkele statement wordt gecontroleerd", 
        "c. Je controleerd of er insecten in je computer zitten", 
        "d. Onnodige functies worden verwijderd"],
        answer: "a. Bugs worden opgespoort en verholpen"
    },

    {
        question: "Welke van de onderstaande antwoorden is een Data-Type?",
        choices: 
        ["a. Modulo", 
        "b. Null", 
        "c. VAR", 
        "d. DDOS"],
        answer: "b. Null"
    },

    {
        question: "In JavaScript, hoe print je iets op de console?",
        choices: 
        ["a. Debug", 
        "b. console.log", 
        "c. Print Screen", 
        "d. log.console"],
        answer: "b. console.log"
    },

    {
        question: "Hoe vaak kun je een ID dezelfde naam geven?",
        choices: 
        ["a. Twee keer", 
        "b. Er is geen limiet", 
        "c. Tien keer", 
        "d. Een keer"],
        answer: "d. Een keer"
    },

    {
        question: "Hoe vaak kun je een class gebruiken met dezelfde naam?",
        choices: 
        ["a. Geen enkele keer", 
        "b. Honderd keer", 
        "c. Er is geen limiet", 
        "d. Twee keer"],
        answer: "c. Er is geen limiet"
    },

    {
        question: "In HTML, hoeveel soorten headings kun je maken?",
        choices: 
        ["a. Vier", 
        "b. Vijf", 
        "c. Twaalf", 
        "d. Zes"],
        answer: "d. Zes"
    },

    {
        question: "Hoe wordt een multi-line comment gemaakt?",
        choices: 
        ["a. //...", 
        "b. /*...*/", 
        "c. <*...*>", 
        "d. //*...*//"],
        answer: "b. /*...*/"
    },

    {
        question: "Met welke property kun je de lengte van je string achterhalen?",
        choices: 
        ["a. Prototype", 
        "b. Constructor", 
        "c. Length", 
        "d. Width"],
        answer: "c. Length"
    },

    {
        question: "Waar staat USR voor?",
        choices: 
        ["a. User", 
        "b. Undefined Software Rating", 
        "c. United States Resident", 
        "d. Dit betekent niets"],
        answer: "a. User"
    },

    {
        question: "Hoe noem je een werkplek in Github?",
        choices: 
        ["a. GitZone", 
        "b. Git", 
        "c. Git Work Group", 
        "d. Repository"],
        answer: "d. Repository"
    },

    {
        question: "Welk programma gebruikt school voor het ontwerpen van een project?",
        choices: 
        ["a. Visual Studio", 
        "b. Figma", 
        "c. Adobe Illustrator", 
        "d. NicePage"],
        answer: "b. Figma"
    },

    {
        question: "Wat zijn Methods?",
        choices: 
        ["a. Een manier om Data-Types aan te spreken", 
        "b. Een manier om Strings aan te spreken", 
        "c. Een manier om een som te berekenen", 
        "d. Een manier om Symbols te bewerken"],
        answer: "a. Een manier om Data-types aan te spreken"
    },

    // Non-Technische vragen
    {
        question: "Uit hoeveel letters bestaat een Benderal code?",
        choices: 
        ["a. Twee", 
        "b. Wat is een benderal code?", 
        "c. Vier", 
        "d. Geen"],
        answer: "d. Geen"
    },    
    
    {
        question: "Hoe vaak per week moeten wij vast naar Maastricht?",
        choices: 
        ["a. Iedere dag", 
        "b. Nooit", 
        "c. Twee dagen", 
        "d. Drie dagen"],
        answer: "c. Twee dagen"
    },    
    
    {
        question: "Welke docent praat teveel?",
        choices: 
        ["a. Mr.Steens", 
        "b. Mr.Backus", 
        "c. Mvr.Winckers", 
        "d. Ze praten allemaal teveel"],
        answer: "d. Ze praten allemaal teveel"
    },    
    
    {
        question: "Waar krijgen wij onze opdrachten in uitgezet?",
        choices: 
        ["a. Teams", 
        "b. Padlet", 
        "c. School Mail", 
        "d. Trello"],
        answer: "b. Padlet"
    },    
    
    {
        question: "Wat moeten wij aan het begin van een challenge doen?",
        choices: 
        ["a. Programmeren", 
        "b. Een presentatie", 
        "c. Een LEAN bord maken", 
        "d. Gamen"],
        answer: "Een LEAN bord maken"
    },    
    
    {
        question: "Hoeveel procent van ICT studenten worden tijdens hun studie benaderd door bedrijven?",
        choices: 
        ["a. 70%", 
        "b. 48%", 
        "c. 24%", 
        "d. 2%"],
        answer: "b. 48%"
    },    
    
    {
        question: "Hoeveel pauzes krijgen wij in een enkele dag?",
        choices: 
        ["a. Drie", 
        "b. Vier", 
        "c. Een", 
        "d. Twee"],
        answer: "a. Drie"
    },    
    
    {
        question: "Wat doen studenten het liefste als ze moeten werken?",
        choices: 
        ["a. Werken", 
        "b. Gamen", 
        "c. Slapen", 
        "d. Niksen"],
        answer: "b. Gamen"
    },    
    
    {
        question: "Welke school locatie is beter?",
        choices: 
        ["a. Maastricht", 
        "b. Heerlen", 
        "c. Sittard", 
        "d. Beek"],
        answer: "c. Sittard"
    },    
    
    {
        question: "Wat kan school doen tegen drinken in het lokaal?",
        choices: 
        ["a. Helemaal niets", 
        "b. Verbieden", 
        "c. Zelf ook drinken", 
        "d. Blikjes verbieden"],
        answer: "d. Blikjes verbieden"
    },    
    
    {
        question: "Iemand zegt dat hij een Pro-builder is in Fortnite, Hoe reageert de klas?",
        choices: 
        ["a. Respect man", 
        "b. We spelen geen Fortnite", 
        "c. Welke skins heb je?", 
        "d. F**k you"],
        answer: "d. F**k you"
    },    
    
    {
        question: "Welke stelling is correct?",
        choices: 
        ["a. Docenten geven direct de benderal code, zonder het grappig te vinden om nep codes te roepen", 
        "b. Bij high-end gamen denk je aan een Apple computer", 
        "c. Als ik zeg dat ik dub Anime kijk, dan krijg ik geen klap", 
        "d. Elke morgen vindt onbewust een stoelendans plaats voordat ik ga zitten"],
        answer: "d. Elke morgen vindt onbewust een stoelendans plaats voordat ik ga zitten"
    },    
    
    {
        question: "",
        choices: 
        ["a. ", 
        "b. ", 
        "c. ", 
        "d. "],
        answer: ""
    },    
    
    {
        question: "",
        choices: 
        ["a. ", 
        "b. ", 
        "c. ", 
        "d. "],
        answer: ""
    },    
    
    {
        question: "",
        choices: 
        ["a. ", 
        "b. ", 
        "c. ", 
        "d. "],
        answer: ""
    },
];

// grab references to elements
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");

var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");

var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");

var summary = document.getElementById("summary");
var submitInitialBtn = document.getElementById("submitInitialBtn");
var initialInput = document.getElementById("initialInput");
var everything = document.getElementById("everything");

var highScoreSection = document.getElementById("highScoreSection");
var finalScore = document.getElementById("finalScore");

var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn"); 
var viewHighScore = document.getElementById("viewHighScore");
var listOfHighScores = document.getElementById("listOfHighScores");

// define other variables
var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;

/**
 * FUNCTIONS
 */

// WHEN I click the start button, timer starts
var totalTime = 151;
function newQuiz() {
    questionIndex = 0;
    totalTime = 30;
    timeLeft.textContent = totalTime;
    initialInput.textContent = "";

    startDiv.style.display = "none";
    questionDiv.style.display = "block";
    timer.style.display = "block";
    timesUp.style.display = "none";

    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                gameOver();
                // nextQuestion();
            }
        }
        if(totalTime <=10 && totalTime >=0 ) {
            document.getElementById("timer").style.backgroundColor = "red" 
        }
        if(totalTime <=20 && totalTime >=10  ) {
            document.getElementById("timer").style.backgroundColor = "yellow" 
        }
        if(totalTime <=30 && totalTime >=20 ) {
            document.getElementById("timer").style.backgroundColor = "green" 
        }
    },1000);

    showQuiz();
};

// console.log(questions[questionIndex].question);
// console.log(questions[questionIndex].choices);

// then presented with questions and choices
function showQuiz() {
    nextQuestion();
}

function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
}

// after question is answered, show if correct or wrong
function checkAnswer(answer) {

    var lineBreak = document.getElementById("lineBreak");
    lineBreak.style.display = "block";
    answerCheck.style.display = "block";

    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        // correct answer, add 1 score to final score
        correctAns++;
        totalTime += 5;

        // console.log(correctAns);
        answerCheck.textContent = "Correct!";
    } else {
        // wrong answer, deduct 10 second from timer
        timeLeft.textContent = totalTime;
        answerCheck.textContent = "Wrong! The correct answer is: " + questions[questionIndex].answer;
    }

    questionIndex++;
    // repeat with the rest of questions 
    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        // if no more question, run game over function
        gameOver();
    }
}

function chooseA() { checkAnswer(0); }

function chooseB() { checkAnswer(1); }

function chooseC() { checkAnswer(2); }

function chooseD() { checkAnswer(3); }

// when all questions are answered or timer reaches 0, game over
function gameOver() {
    summary.style.display = "block";
    questionDiv.style.display = "none";
    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "block";

    // show final score
    finalScore.textContent = correctAns;
}

// enter initial and store highscore in local storage
function storeHighScores(event) {
    event.preventDefault();

    // stop function is initial is blank
    if (initialInput.value === "") {
        alert("Please enter your initials!");
        return;
    } 

    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";   

    // store scores into local storage
    var savedHighScores = localStorage.getItem("high scores");
    var scoresArray;

    if (savedHighScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedHighScores)
    }

    var userScore = {
        initials: initialInput.value,
        score: finalScore.textContent
    };

    console.log(userScore);
    scoresArray.push(userScore);

    // stringify array in order to store in local
    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);
    
    // show current highscores
    showHighScores();
}

// function to show high scores
var i = 0;
function showHighScores() {

    startDiv.style.display = "none";
    timer.style.display = "none";
    questionDiv.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";

    var savedHighScores = localStorage.getItem("high scores");

    // check if there is any in local storage
    if (savedHighScores === null) {
        return;
    }
    console.log(savedHighScores);

    var storedHighScores = JSON.parse(savedHighScores);

    for (; i < storedHighScores.length; i++) {
        var eachNewHighScore = document.createElement("p");
        eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
        listOfHighScores.appendChild(eachNewHighScore);
    }
}

/**
 * ADD EVENT LISTENERS
 */

startQuizBtn.addEventListener("click", newQuiz);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

submitInitialBtn.addEventListener("click", function(event){ 
    storeHighScores(event);
});

viewHighScore.addEventListener("click", function(event) { 
    showHighScores(event);
});

goBackBtn.addEventListener("click", function() {
    startDiv.style.display = "block";
    highScoreSection.style.display = "none";
});

clearHighScoreBtn.addEventListener("click", function(){
    window.localStorage.removeItem("high scores");
    listOfHighScores.innerHTML = "High Scores Cleared!";
    listOfHighScores.setAttribute("style", "font-family: 'Archivo', sans-serif; font-style: italic;")
});