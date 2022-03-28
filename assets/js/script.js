
var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#timer");
var chosenEl = document.querySelector("#choices");
var doItBtn = document.querySelector("#submission");
var beginBtn = document.querySelector("#begin");
var initEl = document.querySelector("#yourinitials");
var returnMessageEl = document.querySelector("#returnmessage");

var quizQuestions = [
   {
     question: "What are JavaScript Data Types?",
     differentChoices: ["Number", "String", "Boolean", "Undifined", "All the above"],
     answer: "All the above"
   },
   {
    question: "which one of these key-words is function scoped?",
    differentChoices: ["Var", "Let", "Both"],
       answer: "Var"
       
   },

          
    {
      question: "Which one is a looping structure in JavaScript?",
      differentChoices: ["All the below", "For", "While", "do-while loops"],
      answer: "All the below"
    },
    {
      question: "What are the two basic groups of data types in JavaScript?",
      differentChoices: [
        "Primitive and attribute",
        "Primitive and reference types",
        "Reference types and attribute",
        "None of the above"
      ],
      answer: "Primitive and reference types"
    },
    {
      question: "Commonly used data types DO NOT include:",
      differentChoices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      question: "Boolean operators that can be used in JavaScript include:",
      differentChoices: [
        "'And' Operator &&",
        "'Or' Operator ||",
        "'Not' Operator !",
        "All the above"
      ],
      answer: "All the above"
    },
    
    {
      question: "What is the data type of variables in JavaScript?",
      differentChoices: [
        "Object data types",
        "Function data type",
        "None of the above",
        "All of the above"
      ],
      answer: "Object data types"
    },
    {
      question: "The condition in an if / else statement is enclosed within ____.",
      differentChoices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      differentChoices: [
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
        differentChoices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      question:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
        differentChoices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    },
    {
      question: "What is the type of Pop up boxes available in JavaScript?:",
      differentChoices: ["Alert", "Confirm", "Prompt", "All the above"],
      answer: "All the above"
    }
  ];

var currentQuestionIndex = 0;
var time = quizQuestions.length * 12;
var timerId;



function startQuiz() {
  
  var startScreenEl = document.getElementById("initial-screen");
  startScreenEl.setAttribute("class", "hide");


  questionsEl.removeAttribute("class");

  triggerTimer();
  

  getTheQuestion();
}

function triggerTimer() {
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

function getTheQuestion() {
 
  var currentQuestion = quizQuestions[currentQuestionIndex];

  
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.question;

 
  chosenEl.innerHTML = "";


  currentQuestion.differentChoices.forEach(function(choice, i) {

    var decision = document.createElement("button");
    decision.setAttribute("class", "choice");
    decision.setAttribute("value", choice);

    decision.textContent = i + 1 + ". " + choice;


    decision.onclick = choiceClick;

  
    chosenEl.appendChild(decision);
  });
}

function choiceClick() {

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
    endQuiz();
  } else {
    getTheQuestion();
  }
}

function endQuiz() {
  
  clearInterval(timerId);

  
  var endDisplayEl = document.getElementById("final-screen");
  endDisplayEl.removeAttribute("class");

 
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;

  
  questionsEl.setAttribute("class", "hide");
}



function getHighscore() {
  
  var initials = initEl.value.trim();

  if (initials !== "") {
    
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    
    var newScore = {
      score: time,
      initials: initials
    };

    
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

   
    window.location.href ="quizscore.html";
  }
}

function initiation(event) {

  if (event.key === "Enter") {
    getHighscore();
  }
}




doItBtn.onclick = getHighscore;


beginBtn.onclick = startQuiz;

initEl.onkeyup = initiation;