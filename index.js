const gameContainer = document.getElementById('game-container');
const startGameButton = document.getElementById('start-game');
const checkAnswerButton = document.getElementById('check-answer');
const problemElement = document.getElementById('problem');
const answerInput = document.getElementById('answer');
const scoreElement = document.getElementById('score');

let score = 0;

startGameButton.addEventListener('click', () => {
  gameContainer.style.display = 'block'; // Show game screen
  generateProblem(); // Generate the first problem
  startGameButton.style.display = 'none'; // Hide start game button
});

checkAnswerButton.addEventListener('click', () => {
  const userAnswer = parseInt(answerInput.value); // Convert answer to a number
  const correctAnswer = evaluateProblem(); // Get the correct answer

  if (userAnswer === correctAnswer) {
    score += 100; // Increase score by 100 points
    scoreElement.textContent = `Score: ${score}`;
    generateProblem(); // Generate a new problem
  } else {
    alert('Incorrect answer! Try again.');
  }

  answerInput.value = ''; // Clear the answer input
});

function generateProblem() {
  // Implement logic to generate a random math problem here
  // For example:
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const operator = Math.random() < 0.5 ? '+' : '-';
  problemElement.textContent = `${num1} ${operator} ${num2} = ?`;
}

function evaluateProblem() {
  // Implement logic to evaluate the problem based on generated numbers and operator
  // For example:
  const numbers = problemElement.textContent.split(' ').map(Number);
  const operator = problemElement.textContent.split(' ')[1];
  let result;
  if (operator === '+') {
    result = numbers[0] + numbers[1];
  } else {
    result = numbers[0] - numbers[1];
  }
  return result;
}
