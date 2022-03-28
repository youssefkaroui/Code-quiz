
var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#time");
var choicesEl = document.querySelector("#choices");
var doItBtn = document.querySelector("#submit");
var startBtn = document.querySelector("#start");
var initialsEl = document.querySelector("#initials");
var returnMessageEl = document.querySelector("#feedback");

var quizQuestions = [
   {
     question: "What are JavaScript Data Types?",
     choices: ["Number", "String", "Boolean", "Undifined", "All the above"],
     answer: "All the above"
   },
   {
    question: "which one of these key-words is function scoped?",
       choices: ["Var", "Let", "Both"],
       answer: "Var"
       
   },

          
    {
      question: "Which one is a looping structure in JavaScript?",
      choices: ["All the below", "For", "While", "do-while loops"],
      answer: "All the below"
    },
    {
      question: "What are the two basic groups of data types in JavaScript?",
      choices: [
        "Primitive and attribute",
        "Primitive and reference types",
        "Reference types and attribute",
        "None of the above"
      ],
      answer: "Primitive and reference types"
    },
    {
      question: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      question: "Boolean operators that can be used in JavaScript include:",
      choices: [
        "'And' Operator &&",
        "'Or' Operator ||",
        "'Not' Operator !",
        "All the above"
      ],
      answer: "All the above"
    },
    
    {
      question: "What is the data type of variables in JavaScript?",
      choices: [
        "Object data types",
        "Function data type",
        "None of the above",
        "All of the above"
      ],
      answer: "Object data types"
    },
    {
      question: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      question:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      question:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    },
    {
      question: "What is the type of Pop up boxes available in JavaScript?:",
      choices: ["Alert", "Confirm", "Prompt", "All the above"],
      answer: "All the above"
    }
  ];

var currentQuestionIndex = 0;
var time = quizQuestions.length * 12;
var timerId;



function startQuiz() {
  
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");


  questionsEl.removeAttribute("class");

  runTimer();
  

  getQuestion();
}

function runTimer() {
  timerId = setInterval(function() {
    console.log(time)
    console.log(typeof time)
    time--;
    timerEl.textContent = time;
  
    if (time <= 0) {
      quizEnd();
    }
  }, 1000);
  
}

function getQuestion() {
 
  var currentQuestion = quizQuestions[currentQuestionIndex];

  
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.question;

 
  choicesEl.innerHTML = "";


  currentQuestion.choices.forEach(function(choice, i) {

    var decision = document.createElement("button");
    decision.setAttribute("class", "choice");
    decision.setAttribute("value", choice);

    decision.textContent = i + 1 + ". " + choice;


    decision.onclick = questionClick;

  
    choicesEl.appendChild(decision);
  });
}

function questionClick() {

  if (this.value !== quizQuestions[currentQuestionIndex].answer) {

    time -= 15;

    if (time < 0) {
      time = 0;
    }
   
    timerEl.textContent = time;
    returnMessageEl.textContent = "Wrong";
    returnMessageEl.style.color = "orange";
    returnMessageEl.style.fontSize = "200%";
  } else {
    returnMessageEl.textContent = "Correct";
    returnMessageEl.style.color = "blue";
    returnMessageEl.style.fontSize = "200%";
  }

  
  returnMessageEl.setAttribute("class", "feedback");
  setTimeout(function() {
    returnMessageEl.setAttribute("class", "feedback hide");
  }, 1000);

  
  currentQuestionIndex++;

  
  if (currentQuestionIndex === quizQuestions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

function quizEnd() {
  
  clearInterval(timerId);

  
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");

 
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;

  
  questionsEl.setAttribute("class", "hide");
}



function saveHighscore() {
  
  var initials = initialsEl.value.trim();

  if (initials !== "") {
    
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    
    var newScore = {
      score: time,
      initials: initials
    };

    
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

   
    window.location.href = "score.html";
  }
}

function checkForEnter(event) {

  if (event.key === "Enter") {
    saveHighscore();
  }
}


doItBtn.onclick = saveHighscore;


startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;