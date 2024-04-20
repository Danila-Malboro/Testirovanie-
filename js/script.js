//Массив с вопросами, вариантами ответов и правильными ответами
let Username = prompt('Ваше имя? ');
let questions = [
    {
        question:"Какой жанр у игры Black Russia?",
        options:["CRMP", "RPG", "Шутер", "Гонки"  ],
        correctAnswer: "CRMP",    
    },
    {
        question:"В каком году была выпущена игра Black Russia?",
        options:["2001", "2010", "2013", "2020"  ],
        correctAnswer: "2020",
    },
    {
        question:"Вопрос 3",
        options:["1", "2", "3", "4"  ],
        correctAnswer: "3",    
    },
    {
        question:"Вопрос 4",
        options:["1", "2", "3", "4"  ],
        correctAnswer: "1",
    },
    {
        question:"Вопрос 5",
        options:["1", "2", "3", "4"  ],
        correctAnswer: "3",    
    },
    {
        question:"Вопрос 6",
        options:["1", "2", "3", "4"  ],
        correctAnswer: "2",
    }
]
let currentQuestion = 0 ;// Текущий вопрос
let correctAnswers = 0 ;// Количество правильных ответов

// Функция для отображения  текущего вопроса и вариантов ответов  
function displayQuestion( ) {
    let questionElement = document.getElementById("question"); // Получить блок для размещения вопроса
    // Размещаем вопрос на странице
    questionElement.textContent = ` Вопрос ${currentQuestion + 1}: ${questions[currentQuestion].question} `;
    let optionsElement = document.getElementById("options"); // Получить блок для размещения кнопок
    optionsElement.innerHTML = ""; //Очищаем содержимое блока optionsElement   
    
    //Получить массив ответов 
    let optionsArray = questions[currentQuestion].options;

    //Создать кнопки с вариантами ответов и привязать к ним функцию перехода к следующему вопросу
    optionsArray.forEach((option) => {
        let button = document.createElement("button");
        optionsElement.append(button);
        button.textContent = option;
        button.classList.add('question_btn');
    });
        //Добавить обработчик события на блок с кнопками
    optionsElement.addEventListener("click", (e) => {
        //Записать переменную элемент на который кликнули
        let target = e.target;
        //Вызвать функцию перехода к следующему вопросу и передать ей текстовое содержимое кнопки по которой кликнули
        nextQuestion(target.textContent);
    }, {once : true} )
}
// Функция перехода к следующему вопросу
function nextQuestion(answer){
    if(answer === questions[currentQuestion].correctAnswer) {
        correctAnswers++;
    }
    currentQuestion++;
    if(currentQuestion < questions.length) {
        displayQuestion();
    } else {
       displayResult();
    }
}

function nextQuestion(answer) {
    if(answer === questions[currentQuestion].correctAnswer) {
        correctAnswers++;
    }
    currentQuestion++;
    if(currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResult();
        displayIncorrectAnswers();
    }
}


function displayResult() {
    let questionElement = document.getElementById("question");
    let optionsElement = document.getElementById("options");
    let resultElement = document.getElementById("result");
    questionElement.style.display = "none";
    optionsElement.style.display = "none";

    
    let percentage = ((correctAnswers / questions.length) * 100).toFixed(0); // Округляем до двух знаков после запятой
    if(Text.percentage > 5){
        percentage.display = "none";
    }
    let grade = "";
    if (percentage >= 90) {
        grade = "5";
    } else if (percentage >= 70) {
        grade = "4";
    } else if (percentage >= 50) {
        grade = "3";
    } else {
        grade = "2";
    }
    resultElement.textContent = `${Username} Правильных ответов: ${correctAnswers} из ${questions.length} (${percentage}%), ваша оценка: ${grade}`;
}

displayQuestion();








