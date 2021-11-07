const quizData = [
    {
        question: '1 + 1 = ?',
        a: '2',
        b: '3',
        c: '1',
        d: '4',
        correct: 'a'
    }, {
        question: 'Làm thế nào để không mập và vẫn tốt cho sức khỏe ?',
        a: 'Ăn như điên sợ gì mập',
        b: 'Ăn healthy',
        c: 'Nhịn đói không ăn gì ',
        d: 'Ăn ngày 2 bữa thôi ',
        correct: 'b'
    }, {
        question: 'What is the most used programming language in 2019 ?',
        a: 'Java',
        b: 'C++',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    }, {
        question: 'Who is the President of US ?',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b'
    }, {
        question: 'Bao nhhiêu lâu nữa thì bán được 1 tỉ gói mè ?',
        a: 'Không biết',
        b: '1000 năm',
        c: 'Hỏi anh long á',
        d: '200 năm',
        correct: 'c'
    }
]

const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
loadQuiz();
function loadQuiz() {
    deselectAnswers();
    const currenQuizData = quizData[currentQuiz];
    questionEl.innerText = currenQuizData.question;
    a_text.innerText = currenQuizData.a;
    b_text.innerText = currenQuizData.b;
    c_text.innerText = currenQuizData.c;
    d_text.innerText = currenQuizData.d;


}

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    });
    return answer;

}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        return answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    console.log(answer)
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            if (score > 0) {
                quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} question. </h2>
                <button id="continue" class="btn btn-continue"> Continue </button>
                `
                const submitContinue = document.getElementById('Reload');
                submitContinue.onclick = () => {
                    location.reload();
                }
            }
            else {
                quiz.innerHTML = `<h2>Sorry, your correct answer is ${score}/${quizData.length} </h2>`
            }
        }
    }

});