const quizData = [
  {
    question: "what is your aim?",
    a: "football player",
    b: "web developer",
    c: "singer",
    d: "movie star",
    correct: "b",
  },
  {
    question: "How old are you?",
    a: "19",
    b: "22",
    c: "16",
    d: "18",
    correct: "d",
  },
  {
    question: "who is your fav actor",
    a: "i like no one",
    b: "ajith",
    c: "vijay",
    d: "robert downey jr",
    correct: "a",
  },
  {
    question: "do you think you can do it?",
    a: "yes",
    b: "no",
    c: "may be",
    d: "dont know",
    correct: "a",
  },
];

const question = document.querySelector(".question");
const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text");
const c_text = document.getElementById("c-text");
const d_text = document.getElementById("d-text");
const button = document.querySelector(".button");
const answerEls = document.querySelectorAll(".answer");

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselect();
  currentQuiz = quizData[currentQuestion];

  question.innerText = currentQuiz.question;
  a_text.innerText = currentQuiz.a;
  b_text.innerText = currentQuiz.b;
  c_text.innerText = currentQuiz.c;
  d_text.innerText = currentQuiz.d;
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselect() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

button.addEventListener("click", () => {
  //   selected.forEach((check) => {
  //     console.log(check.value);
  //   });

  const answer = getSelected();

  if (answer) {
    if (answer == quizData[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      // TODO:show results

      const quizBox = document.querySelector(".quiz");

      quizBox.innerHTML = `
      <h2>your score is ${score}</h2>`;

      button.innerText = "replay";

      button.addEventListener("click", () => {
        window.location.reload();
      });
    }
  } else {
    alert("select something");
  }
});
