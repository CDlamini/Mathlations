const maze = document.getElementById('maze');
const spaceship = document.getElementById('spaceship');
const question = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer-button');

let spaceshipPosition = { x: 0, y: 0 };

// Maze data (replace with your maze structure)
const mazeData = [
  // ...
];

function generateQuestion() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const correctAnswer = num1 + num2;
  const incorrectAnswers = [
    correctAnswer + 1,
    correctAnswer - 1,
    Math.floor(Math.random() * 20) + 1,
  ];

  question.textContent = `${num1} + ${num2} =`;

  const answers = [correctAnswer, ...incorrectAnswers];
  shuffleArray(answers);

  answerButtons.forEach((button, index) => {
    button.textContent = answers[index];
    button.addEventListener('click', () => checkAnswer(answers[index]));
  });
}

function checkAnswer(selectedAnswer) {
  const correctAnswer = parseInt(question.textContent.split('=')[1]);
  if (selectedAnswer === correctAnswer) {
    // Move spaceship to next position based on maze data
    spaceshipPosition.x += 10; // Example: move spaceship right
    spaceship.style.left = spaceshipPosition.x + 'px';
    generateQuestion();
  } else {
    // Handle incorrect answer (e.g., play sound, show feedback)
  }
}

function shuffleArray(array) {
  // Implement a shuffling algorithm
}

generateQuestion();
