// Day 2: Functions and conditional statements

// I am building a simple quiz game that asks the user a series of questions and keep track of the score.

// Task 1: Define the quiz questions and answers using functions and array of object
  const questions = [
    {
        question: () => 'What is the capital of France?',
        answer: () => 'Paris'
    },
    {
        question: () => 'What is the capital of Nigeria?',
        answer: () => 'Abuja'
    },
    {
        question: () => 'What is the largest planet in our solar system?',
        answer: () => 'Jupiter'
    },
    {
        question: () => 'What is 2 + 2?',
        answer: () => 4
    },
    {
        question: () => 'What is 2 * 5?',
        answer: () => 10
    },
  ]

let userInfo = {
    score: 0,
    questionAnswered: 0,
    correctAnswers: 0
};

// Task 2: Create a function to ask the user a question and check their answer

function askQuestion(question, answer) {
    const userAnswer = prompt(question);
    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    // Award 5 marks if the answer is corrct
    userInfo.score += 5;

    // Increment by 1, question answered
    userInfo.questionAnswered++;

    // Increment by one correct answer
    userInfo.correctAnswers++
    } else {
        userInfo.questionAnswered++;
    }
    displayScore();
}

function displayScore() {
    console.log(`Your current score is ${userInfo.score}.`);
    console.log(`You have answered ${userInfo.questionAnswered} questions so far`);
    console.log(`You have gotten ${userInfo.correctAnswers} answers right.`);
}

// Task 3: Display the final score and congratulatory message
function playAgain() {
    const response = prompt("Do you want to play again? (yes/no)");

    if (response.toLowerCase() === 'yes') {
        // Reset user info
        userInfo.score = 0;
        userInfo.questionAnswered = 0;
        userInfo.correctAnswers = 0;

        askQuestion(questions[0].question(), questions[0].answer());
    } else {
        console.log("Thanks for playing");
    }
}

// Start the quiz
askQuestion(questions[0].question(), questions[0].answer());

// Ask user if they want to play again
playAgain();