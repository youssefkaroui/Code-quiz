var timerEl= document.querySelector("#time-count");
var questionEl= document.querySelector("#questions");
var choicesEl= document.querySelector("#choices");
var submitBtnEl= document.querySelector("#initials-submission");
var beginBtn= document.querySelector("start-btn");
var initialsEl= document.querySelector("your-initials");

var multipelQuestions=[
    {
        question: "What is the correct way to write a JavaScript array?",
        differentChoices: ["var num=[1,2,3];", "var num=(1,2,3);"],
        answer: "var num=[1,2,3]"
      },
      {
        question: "which one of these key-words is function scoped?",
        differentChoices: ["Var", "Let", "Both"],
           answer: "Var"
           
       },
       {
        question: "What are JavaScript Data Types?",
        differentChoices: ["Number", "String", "Boolean", "Undifined", "All the above"],
        answer: "All the above"
      },
      {
        question: "What is the type of Pop up boxes available in JavaScript?:",
        differentChoices: ["Alert", "Confirm", "Prompt", "All the above"],
        answer: "All the above"
      },
      {
        question:"A very useful tool used during development and debugging for printing content to the debugger is:",
          differentChoices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
      },
      {
        question: "var x = 3 + 4 + '7'; The value of x is :",
        differentChoices: ["14","'77'","'347'","77"],
        answer: "'77'"
      },
      {
        question: "What is the intruder?",
        differentChoices: ["mouseover","mouseout", "mousein","mousemove"],
        answer: "mousein"
      },
      {
        question:"What is correct commenting in JavaScript?:",
          differentChoices: ["/*This is a comment*/", "<!--This is a comment-->"],
        answer: "/*This is a comment*/"
      },
      {
        question:"How do you declare a JavaScript variable x?",
          differentChoices: ["define x;", "variable x;","var x;","def x;"],
        answer: "var x;"
      },
      {
        question:"To get the data type of some variable you will use:",
          differentChoices: ["dataType", "typeof"],
        answer: "typeof"
      },
      {
        question:"When we don't assign a value to a variable it will be?",
          differentChoices: ["null", "undefined","NaN"],
        answer: "undefined"
      },
      {
        question:"In JavaScript can we pass functions as arguments to other functions?",
          differentChoices: ["yes", "no"],
        answer: "yes"
      },
      {
        question:"How do you write 'Eureka' in an alert box?",
          differentChoices: ["msg('Eurika');", "alert('Eureka');","msgBox('Eureka');","alertBox('Eureka');"],
        answer: "alert('Eureka');"
      },
      {
        question:"In JavaScript can we pass functions as arguments to other functions?",
          differentChoices: ["yes", "no"],
        answer: "yes"
      },
      {
        question:"Are semicolons required at the end of the JavaScript line?",
          differentChoices: ["yes", "no"],
        answer: "no"
      },
      {
        question:"Which of the following events will you add in the addEventListener() method?",
          differentChoices: ["click", "onclick"],
        answer: "click"
      },
     {
        question:"A string can be converted to an array using which method:",
          differentChoices: ["split()", "slice()","splice()","piece()"],
        answer: "split()"
      },
      {
        question:"Which of the following properties return the URL of the current page.",
          differentChoices: ["location.URL", "URL.location","window.location.href","v"],
        answer: "window.location.href"
      },
      {
        question:"The method confirm('message') will show:",
          differentChoices: ["dialog box", "input field"],
        answer: "dialog box"
      },
      {
        question:"Which timing event is used to delay the execution of the function?",
          differentChoices: ["timer()", "setTimeout()"],
        answer: "setTimeout()"
      }
    
]
var currentQuestion=0;
var time =multipelQuestions.length * 14;
var  timerId;

function triggerTimer() {
    timerId=setInterval(function(){
        console.log(time)
        console.log(typeof time)
        time--;
        timerEl.textContent=time;
        if (time=0){
            quizEnd();
        }
    },1000
}

function getQuestion(){
    var currentQuestion= quizQ
}