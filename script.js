var timerId = setTimeout(function () {
  console.log("Expired");
}, 1000);

clearTimeout(timerId);

// var obj = {
//   message: "Hello, Timers.",
//   logMessage: function () {
//     console.log(this.message);
//   },
//   delayedLog: function () {
//     setTimeout(this.logMessage);
//   },
//};
var choicesEl = document.getElementById("choices");
var questionEl = document.getElementById("question");
var choiceOneEl = document.getElementById("choice1");
var choiceTwoEl = document.getElementById("choice2");
var choiceThreeEl = document.getElementById("choice3");
var choiceFourEl = document.getElementById("choice4");
var answerCorrectnessEl = document.getElementById("answer-correctness");
var rightSpanEl = document.getElementById("right-span");
var correctChoice; // e.g. "#choice1" "#choice2"
var secondsInterval = 75;
var quizInfo1 = {
  question: "How are you?",
  choice1: "good",
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
var i = 0;
function generateQuiz(
  question,
  choiceOptionOne,
  choiceOptionTwo,
  choiceOptionThree,
  choiceOptionFour,
  correctChoice
) {
  questionEl.textContent = question;
  choiceOneEl.textContent = choiceOptionOne;
  choiceTwoEl.textContent = choiceOptionTwo;
  choiceThreeEl.textContent = choiceOptionThree;
  choiceFourEl.textContent = choiceOptionFour;
  this.correctChoice = correctChoice;
}

function checkCorrectness(event) {
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
  }
}

var timeInterval = setInterval(function () {
  rightSpanEl.textContent = "Time: " + secondsInterval;
  secondsInterval--;

  if (secondsInterval === 0) {
    clearInterval(timeInterval);
    rightSpanEl.textContent = "Time Expired!";
  }
  choicesEl.addEventListener("click", checkCorrectness);
}, 1000);
generateQuiz(
  quizInfoList[i].question,
  quizInfoList[i].choice1,
  quizInfoList[i].choice2,
  quizInfoList[i].choice3,
  quizInfoList[i].choice4,
  quizInfoList[i].rightChoice
);
