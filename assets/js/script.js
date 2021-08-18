/** Array of quiz questions and answers */

const quizData = [
    {
        question: 'Q1. Every September, thousands of fans decked in their county colours make their way to Croke Park for the GAA (Gaelic Athletic Association) All-Ireland Football and Hurling Championship finals. In what Irish city is this iconic stadium located?',
        a:'Cork',
        b:'Wexford',
        c:'Dublin',
        d:'Kildare',
        correct:'c',
    },
    {
        question: 'Q2. What major rugby competition did Ireland win in 2018?',
        a:'Rugby World Cup',
        b:'Six Nations',
        c:'The Rugby Championship',
        d:'Rugby Europe Championship',
        correct:'b',
    },
    {
        question: 'Q3. Hurling dates back 2,000 years. What legendary Irish figure is said to have defended himself from a wolfhound with nothing but a hurl and a sliotar (ball)?',
        a:'Henry Shefflin',
        b:'Fionn Mac Cumhail',
        c:'Tommy Quaid',
        d:'Cú Chulainn',
        correct:'d',
    },
    {
        question: 'Q4. Ireland is world-renowned for its love of all things equine, with many champion thoroughbred horses born and raised here. In what county will you find the Irish National Stud?',
        a:'Kildare',
        b:'Kerry',
        c:'Dublin',
        d:'Galway',
        correct:'a',
    },
    {
        question: 'Q5. What motorcycle race in Northern Ireland did legendary racing champion Joey Dunlop win a total of 24 times?',
        a:'Tandragee 100, County Armagh',
        b:'The Ulster Grand Prix',
        c:'Internation North West 200, County Antrim',
        d:'Cookestown 100, County Tyrone',
        correct:'b',
    },
    {
        question: 'Q5. What motorcycle race in Northern Ireland did legendary racing champion Joey Dunlop win a total of 24 times?',
        a:'Tandragee 100, County Armagh',
        b:'The Ulster Grand Prix',
        c:'Internation North West 200, County Antrim',
        d:'Cookestown 100, County Tyrone',
        correct:'b',
    },
    {
        question: 'Q6. What GAA sport needs just a ball, a field of grass and a set of goalposts?',
        a:'Hurling',
        b:'Gaelic Football',
        c:'Handball',
        d:'Camogie',
        correct:'b',
    },
    {
        question: 'Q7. What county in Northern Ireland does golfing legend Rory McIlroy come from?',
        a:'Antrim',
        b:'Armagh',
        c:'Down',
        d:'Fermanagh',
        correct:'c',
    },
    {
        question: 'Q7. What county in Northern Ireland does golfing legend Rory McIlroy come from?',
        a:'Antrim',
        b:'Armagh',
        c:'Down',
        d:'Fermanagh',
        correct:'c',
    },
    {
        question: 'Q8. Name the Arena in Thurles, Co. Tipperary, which is famous for major hurling games, but occasionally also stages Gaelic football matches?',
        a:'Semple Stadium',
        b:'Páirc Uí Chaoimh',
        c:'Fitzgerald Stadium',
        d:'Pearse Stadium',
        correct:'a',
    },
    {
        question: 'Q9. Name the two Irish rowers who won gold medals at the Olympic Games 2021?',
        a:"Gary O'Donovan and Paul O' Donovan",
        b:'Fiona Murtagh and Emily Hegarty',
        c:"Fintan McCarthy and Paul O' Donovan",
        d:'Aifric Keogh and Eimear Lambe ',
        correct:'c',
    },
    {
        question: 'Q10. Sprinter Paul Hession, who broke the Irish 60 metres record three times in 2007, is a native of which County?',
        a:"Wicklow",
        b:'Louth',
        c:"Limerick",
        d:'Galway',
        correct:'d',
    }
];

/** Loaing the quiz game */

const quiz = document.getElementById('quiz')
const answerE1s = document.querySelectorAll('.answer')
const question = document.getElementById ('quiz-question')
const a_text = document.getElementById('a-text')
const b_text = document.getElementById('b-text')
const c_text = document.getElementById('c-text')
const d_text = document.getElementById('d-text')
const submitButton = document.getElementById('submit')

const answers = document.querySelectorAll('answer');

let currentQuiz = 0
let score = 0

quizGame ()

function quizGame () {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    question.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers () {
    answerE1s.forEach(answerE1s => answerE1s.checked = false)
}

function getSelected () {
    let answer
    answerE1s.forEach(answerE1 => {
        if(answerE1.checked) {
            answer = answerE1.id
        }
    })
    return answer
}

/** Submitting the answer */
const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id
        }
        return answer;
    }
    )

}

submitButton.addEventListener('click',() => {
    const answer = getSelected ()
    if (answer === quizData[currentQuiz].correct){
        score++;
    };
    
    currentQuiz++
    if(currentQuiz < quizData.length) {
        quizGame()
    } else {
        quiz.innerHTML = `<h2> Congratulations your total score is ${score}/${quizData.length}</h2> <br> <button onclick ="location.reload()">Start Again</button>`
    }
});

/** When the webpage loads user is welcomed with a start Quiz button
 * Adding JS code so once the user clicks on the start button the game will begin
 */

const startButton = document.getElementById('start-btn')

startButton.addEventListener('click',startGame)

function startGame () {
    console.log("start game clicked")
    startButton.classList.add('hide')
    .classList.remove('hide')
}
