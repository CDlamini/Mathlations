// Simple animation example (unchanged)
const element = document.querySelector('body');

element.addEventListener('mouseover', () => {
  element.classList.add('animate');
});

element.addEventListener('mouseout', () => {
  element.classList.remove('animate');
});

// Add the animation class (unchanged)
element.classList.add('animate');

// Remove the animation class after a short delay (unchanged)
setTimeout(() => {
  element.classList.remove('animate');
}, 1000);

let score = 0;
const scoreElement = document.getElementById('score'); // Assuming you have an element with id 'score'

function checkAnswer(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    score += 250;
    scoreElement.textContent = `Score: ${score}`;

    if (score >= 5000) {
      // Game over logic here (e.g., show a winning message)
      console.log("You win!");
    }
  } else {
    // Handle incorrect answer (e.g., display a message)
    console.log("Incorrect answer!");
  }
}
