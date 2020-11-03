//bellow are quiz.html variables
var choicesEl = document.getElementById("choices");
var questionEl = document.getElementById("questionId");
var choiceOneEl = document.getElementById("choice1");
var choiceTwoEl = document.getElementById("choice2");
var choiceThreeEl = document.getElementById("choice3");
var choiceFourEl = document.getElementById("choice4");
var answerCorrectnessEl = document.getElementById("answer-correctness");
var rightSpanEl = document.getElementById("right-span");
var secondsInterval = 75;
var correctChoice; // e.g. "#choice1" "#choice2"
var quizInfo1 = {
  question: "How are you?",
  choice1: "good ",
  choice2: "fine",
  choice3: "ok",
  choice4: "amazing",
  rightChoice: "#choice1",
};
var quizInfo2 = {
  question: "How you feel?",
  choice1: "good",
  choice2: "fine",
  choice3: "ok",
  choice4: "amazing",
  rightChoice: "#choice1",
};
var quizInfo3 = {
  question: "How is everything?",
  choice1: "good",
  choice2: "fine",
  choice3: "ok",
  choice4: "amazing",
  rightChoice: "#choice1",
};
var quizInfo4 = {
  question: "How do you enjoy?",
  choice1: "good",
  choice2: "fine",
  choice3: "ok",
  choice4: "amazing",
  rightChoice: "#choice1",
};
var quizInfo5 = {
  question: "How do you eat?",
  choice1: "good",
  choice2: "fine",
  choice3: "ok",
  choice4: "amazing",
  rightChoice: "#choice1",
};
var quizInfoList = [quizInfo1, quizInfo2, quizInfo3, quizInfo4, quizInfo5];
var totalPoints = 0;
//bellow is code regarding quiz.html page
if (window.location.href.indexOf("quiz.html") > -1) {
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
    }
    if (secondsInterval < 1) {
      clearInterval(timeInterval);
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
    if (event.target.matches(correctChoice)) {
      answerCorrectnessEl.textContent = "Correct!";
    } else {
      answerCorrectnessEl.textContent = "Wrong!";
      if (secondsInterval < 10) {
        secondsInterval = 0;
      }
      secondsInterval = secondsInterval - 10;
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
  finalScoreEl.textContent = "Your final score is " + secondsInterval;
  scorePageSubmitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem(initialsText.value, secondsInterval);
    window.open("highScoresPage.html", "_self");
    ret;
  });
}

var orderedListEl = document.getElementById("ordered-list");
////bellow is highScoresPage.html code
if (window.location.href.indexOf("highScoresPage.html") > -1) {
}
