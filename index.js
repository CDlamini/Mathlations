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

}
