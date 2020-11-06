//bellow are quiz.html variables
var choicesEl = document.getElementById("choices");
var questionEl = document.getElementById("questionId");
var choiceOneEl = document.getElementById("choice1");
var choiceTwoEl = document.getElementById("choice2");
var choiceThreeEl = document.getElementById("choice3");
var choiceFourEl = document.getElementById("choice4");
var answerCorrectnessEl = document.getElementById("answer-correctness");
var rightSpanEl = document.getElementById("right-span");
var secondsInterval = 74;
var correctChoice; // e.g. "#choice1" "#choice2"
var quizInfo1 = {
  question: "Inside which HTML element do we put the JavaScript?",
  choice1: "<javascript>",
  choice2: "<js>",
  choice3: "<scripting>",
  choice4: "<script>",
  rightChoice: "#choice4",
};
var quizInfo2 = {
  question:
    "What is the correct JavaScript syntax to change the content of the HTML element below? <p id='demo'>This is a demonstration.</p>",
  choice1: "document.getElementById('demo').innerHTML ='Hello World!';",
  choice2: "#demo.innerHTML = 'Hello World';",
  choice3: "document.getElement('p').innerHTML = 'Hello World!'",
  choice4: "document.getElementByName('p').innerHTML = 'Hello World';",
  rightChoice: "#choice1",
};
var quizInfo3 = {
  question: "How do you write 'Hello World' in an alert box?",
  choice1: "console.log('Hello World');",
  choice2: "alertBox('Hello World');",
  choice3: "alert('Hello World');",
  choice4: "msgBox('Hello World');",
  rightChoice: "#choice3",
};
var quizInfo4 = {
  question: "What is the correct way to write a JavaScript array?",
  choice1: "var colors = (1:'red', 2:'green', 3: 'blue');",
  choice2: "var colors = 1 = ('red'), 2=('green'), 3=('blue');",
  choice3: "var colors = ['red', 'green', 'blue'];",
  choice4: "var colors = 'red', 'green', 'blue';",
  rightChoice: "#choice3",
};
var quizInfo5 = {
  question: "How do you find the number with the highest value of x and y?",
  choice1: "Math.ceil(x, y)",
  choice2: "Math.max(x, y)",
  choice3: "top(x, y)",
  choice4: "ceil(x, y)",
  rightChoice: "#choice2",
};
var quizInfoList = [quizInfo1, quizInfo2, quizInfo3, quizInfo4, quizInfo5];
//bellow is code regarding quiz.html page
if (window.location.href.indexOf("quiz.html") > -1) {
  var totalPoints = 0;
  var i = 0; // i is used as a index to access the info inside the list
  function generateQuiz(
    quizQuestion,
    choiceOptionOne,
    choiceOptionTwo,
    choiceOptionThree,
    choiceOptionFour,
    correctChoice
  ) {
    questionEl.textContent = quizQuestion;
    choiceOneEl.textContent = choiceOptionOne;
    choiceTwoEl.textContent = choiceOptionTwo;
    choiceThreeEl.textContent = choiceOptionThree;
    choiceFourEl.textContent = choiceOptionFour;
    this.correctChoice = correctChoice;
  }

  var timeInterval = setInterval(function () {
    rightSpanEl.textContent = "Time: " + secondsInterval;
    secondsInterval--;

    if (i === quizInfoList.length) {
      window.open("scorePage.html", "_self");
      clearInterval(timeInterval);
      localStorage.setItem("secondsInterval", secondsInterval);
    }
    if (secondsInterval < 1) {
      rightSpanEl.textContent = "No time remaining!";
    }
  }, 1000);

  generateQuiz(
    quizInfoList[i].question,
    quizInfoList[i].choice1,
    quizInfoList[i].choice2,
    quizInfoList[i].choice3,
    quizInfoList[i].choice4,
    quizInfoList[i].rightChoice
  );

  choicesEl.addEventListener("click", function (event) {
    if (event.target.matches(correctChoice)) {
      answerCorrectnessEl.textContent = "Correct!";
      var timeout = window.setTimeout(function () {
        answerCorrectnessEl.textContent = "";
        clearInterval(timeout);
      }, 1500);
    } else {
      answerCorrectnessEl.textContent = "Incorrect!";
      timeout = window.setTimeout(function () {
        answerCorrectnessEl.textContent = "";
        clearInterval(timeout);
      }, 1500);
      if (secondsInterval < 10) {
        secondsInterval = 0;
      } else {
        secondsInterval = secondsInterval - 10;
      }
    }
    if (event.target.matches("li") && i < quizInfoList.length) {
      i++;
      generateQuiz(
        quizInfoList[i].question,
        quizInfoList[i].choice1,
        quizInfoList[i].choice2,
        quizInfoList[i].choice3,
        quizInfoList[i].choice4,
        quizInfoList[i].rightChoice
      );
    }
  });
}
// bellow are scorePage.html variables
var scorePageSubmitBtn = document.getElementById("scorePageSubmit");
var initialsText = document.getElementById("inputInitials");
var finalScoreEl = document.getElementById("finalScore");
//bellow is scorePage.html code
if (window.location.href.indexOf("scorePage.html") > -1) {
  // scorePage function
  var finalScore = localStorage.getItem("secondsInterval");
  if (finalScore < 0 || finalScore === null) {
    finalScore = 0;
    finalScoreEl.textContent = "Your final score is " + finalScore;
  } else {
    finalScoreEl.textContent = "Your final score is " + finalScore;
  }

  rightSpanEl.textContent = "Time: " + finalScore;
  scorePageSubmitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    if (!isNaN(initialsText.value) || !isNaN(parseInt(initialsText.value))) {
      alert("Enter initials to continue!");
    } else {
      localStorage.setItem(initialsText.value.toUpperCase(), finalScore);
      window.open("highScoresPage.html", "_self");
    }
  });
}
//bellow are highScoresPage.html var
var orderedListEl = document.getElementById("ordered-list");
var clearHighscoresEl = document.getElementById("clearHighscores");
////bellow is highScoresPage.html code
if (window.location.href.indexOf("highScoresPage.html") > -1) {
  //next three lines are used to keep the time on the top right corner; then, we delete the data from localStorage
  var finalScore = localStorage.getItem("secondsInterval");
  rightSpanEl.textContent = "Time: " + finalScore;
  localStorage.removeItem("secondsInterval");

  //next lines is to access all data from local storage
  var orderedArchive = [];
  function sortLocalStorage() {
    var localStorageValues = [];
    for (var i = 0; i < localStorage.length; i++) {
      localStorageValues[i] = localStorage.getItem(localStorage.key(i));
    }
    //bellow is descendent sorting of the numbers
    localStorageValues.sort((a, b) => b - a);
    console.log(localStorageValues);

    // Bellow is process of making the list ready for display
    for (var i = 0; i < localStorageValues.length; i++) {
      for (var j = 0; j < localStorage.length; j++) {
        // conditional bellow should work just when the value is not repeating
        if (
          localStorage.getItem(localStorage.key(j)) === localStorageValues[i] &&
          localStorage.getItem(localStorage.key(j)) !==
            localStorageValues[i - 1]
        ) {
          orderedArchive.push(
            localStorage.key(j) + ": " + localStorageValues[i]
          );
        }
      }
    }
  }
  //display Highscore List Function is bellow
  function displayHighscore() {
    sortLocalStorage();
    for (var i = 0; i < orderedArchive.length; i++) {
      var newLiEl = document.createElement("li");
      newLiEl.textContent = orderedArchive[i];
      newLiEl.setAttribute(
        "style",
        "background-color: cornflowerblue; margin:10px; width: 40%; padding-left:5px;"
      );
      orderedListEl.appendChild(newLiEl);
    }
  }
  // calling the function above
  displayHighscore();
  clearHighscoresEl.addEventListener("click", function () {
    localStorage.clear();
    window.open("highScoresPage.html", "_self");
  });
}
