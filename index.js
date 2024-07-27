const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer-button');
const feedbackElement = document.getElementById('feedback');

let currentQuestion;

function generateQuestion() {
  // Generate random numbers for operands and operator
  const operand1 = Math.floor(Math.random() * 10) + 1;
  const operand2 = Math.floor(Math.random() * 10) + 1;
  const operator = Math.random() < 0.5 ? '+' : '-';

  // Calculate correct answer
  const correctAnswer = eval(`${operand1} ${operator} ${operand2}`);

  // Generate incorrect answers
  const incorrectAnswer1 = correctAnswer + Math.floor(Math.random() * 3) + 1;
  const incorrectAnswer2 = correctAnswer - Math.floor(Math.random() * 3) - 1;

  // Create question string
  const question = `${operand1} ${operator} ${operand2} = ?`;

  // Assign values to buttons
  answerButtons[0].textContent = correctAnswer;
  answerButtons[1].textContent = incorrectAnswer1;
  answerButtons[2].textContent = incorrectAnswer2;

  // Shuffle button order
  answerButtons.forEach(button => {
    button.addEventListener('click', () => checkAnswer(button.textContent));
  });

  questionElement.textContent = question;
  feedbackElement.textContent = '';
}

function checkAnswer(selectedAnswer) {
  if (selectedAnswer == currentQuestion.correctAnswer) {
    feedbackElement.textContent = 'Correct!';
    // Add positive feedback, like a sound or animation
  } else {
    feedbackElement.textContent = 'Try again!';
    // Add gentle guidance, like highlighting the correct answer
  }

  generateQuestion();
}

generateQuestion();
