// var timerId = setTimeout(function () {
//   console.log("Expired");
// }, 1000);

// clearTimeout(timerId);

// var obj = {
//   message: "Hello, Timers.",
//   logMessage: function () {
//     console.log(this.message);
//   },
//   delayedLog: function () {
//     setTimeout(this.logMessage);
//   },
// };
var choicesEl = document.getElementById("choices");
var questionEl = document.getElementById("question");
var choiceOneEl = document.getElementById("choice1");
var choiceTwoEl = document.getElementById("choice2");
var choiceThreeEl = document.getElementById("choice3");
var choiceFourEl = document.getElementById("choice4");
var answerCorrectnessEl = document.getElementById("answer-correctness");
var correctChoice; // e.g. "#choice1" "#choice2"
var secondsInterval = 75;

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
  if (event.target.matches(correctChoice)) {
    answerCorrectnessEl.textContent = "Correct!";
  } else {
    answerCorrectnessEl.textContent = "Wrong!";
  }
}

generateQuiz("How are you?", "good", "bad", "ok", "amazing", "#choice2");

choicesEl.addEventListener("click", checkCorrectness);
