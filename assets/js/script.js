/*jshint esversion: 6 */



/** Loaing the quiz game */

const quiz = document.getElementById('quiz');
const answerE1s = document.querySelectorAll('.answer');
const question = document.getElementById ('quiz-question');
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');
const submitButton = document.getElementById('submit');

const answers = document.querySelectorAll('answer');

let currentQuiz = 0;
let score = 0;

function quizGame () {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers () {
    answerE1s.forEach(answerE1s => answerE1s.checked = false);
}

function getSelected () {
    let answer;
    answerE1s.forEach(answerE1 => {
        if(answerE1.checked) {
            answer = answerE1.id;
        }
    });
    return answer;
}

/** Submitting the answer */
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
        return answer;
    }
);

submitButton.addEventListener('click',() => {
    const answer = getSelected ();
    if (answer === quizData[currentQuiz].correct){
        score++;
    }
    
    currentQuiz++;
    if(currentQuiz < quizData.length) {
        quizGame();
    } else {
        quiz.innerHTML = `<h2> Your total score is ${score}/${quizData.length}</h2> <br> <button onclick ="location.reload()">Start Again</button>`;
    }
    const messages =["Congratulations, you know a lot about Irish Sports!! ", "Well done, but a bit more study needed on Irish sports", "Maybe try again when you know a bit more about Irish sports"]

    var range
    if (score < 3) {
        range = 2;
    }
    if (score > 3 && score < 6) {
        range = 1;
    }
    if (score > 6) {
        range = 0;
    }
    document.getElementById("message").innerHTML = message[range];
});

/** When the webpage loads user is welcomed with a start Quiz button
 * Adding JS code so once the user clicks on the start button the game will begin
 */

const startButton = document.getElementById('start-btn');

startButton.addEventListener('click',startGame);

function startGame () {
    
    startButton.classList.add('hide');
    quizGame();
    document.querySelector('#quiz').style.display = 'block';
}
