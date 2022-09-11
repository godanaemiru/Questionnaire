const QuizData = [
    {
        question: "How old is Godana?",
        a: '55',
        b: '30',
        c: '24',
        d: '23',
        correct: 'd'
    },
    {
        question: "How old is Hordofa?",
        a: '20',
        b: '32',
        c: '50',
        d: '16',
        correct: 'a'
    },
    {
        question: "How old is Agee?",
        a: '28',
        b: '20',
        c: '29',
        d: '60',
        correct: 'a'
    },
    {
        question: "How old is Obsse?",
        a: '20',
        b: '30',
        c: '34',
        d: '33',
        correct: 'd'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = QuizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {

    let answer = undefined;
    answerEls.forEach((answerEl)=> {
        if(answerEl.checked) {
            answer = answerEl.id;
        } 
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl)=> {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', ()=> {
    const answer =  getSelected();
   console.log(answer);

    if(answer) {
        if(answer === QuizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++
        if(currentQuiz < QuizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = '<h2>You anwered correctly <h2>' + score + '/' + (QuizData.length) + '<button onclick="location.reload()">Reload</button>' ;
        }
    }
});