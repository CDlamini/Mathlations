kaboom({
  width: 480,
  height: 320,
  canvas: "#game",
  font: "apl386",
});

const target = rand(1, 10);
let score = 0;
let num1 = rand(1, target - 1);
let num2 = target - num1;

const targetNum = add([
  text(target),
  pos(width() / 2, height() / 2 - 50),
  origin("center"),
  scale(2),
  { 
    targetNum
  }
]);

const number1 = add([
  text(num1),
  pos(width() / 4, height() / 2 + 50),
  origin("center"),
  scale(2),
  { 
    num1 
  }
]);

const number2 = add([
  text(num2),
  pos(width() * 3 / 4, height() / 2 + 50),
  origin("center"),
  scale(2),
  { 
    num2 
  }
]);

// Check if the numbers are correct
function checkCorrect(num) {
  if (num === target) {
    return true;
  } else {
    return false;
  }
}

// Event listeners for clicking on numbers
number1.onClick(() => {
  if (checkCorrect(number1.num1)) {
    number1.color = rgb(0, 255, 0);
    number1.scale = 2.2;
    score++;
  } else {
    number1.color = rgb(255, 0, 0);
    number1.scale = 2.2;
  }
});

number2.onClick(() => {
  if (checkCorrect(number2.num2)) {
    number2.color = rgb(0, 255, 0);
    number2.scale = 2.2;
    score++;
  } else {
    number2.color = rgb(255, 0, 0);
    number2.scale = 2.2;
  }
});

// Update the score
function updateScore() {
  const scoreText = add([
    text("Score: " + score),
    pos(10, 10),
    {
      scoreText
    }
  ]);
}
updateScore();

// Create a new question
function newQuestion() {
  target = rand(1, 10);
  num1 = rand(1, target - 1);
  num2 = target - num1;

  targetNum.text = target;
  number1.text = num1;
  number2.text = num2;

  number1.color = rgb(0, 0, 255);
  number2.color = rgb(0, 0, 255);
  number1.scale = 2;
  number2.scale = 2;
}

// Restart button
add([
  rect(100, 40),
  pos(width() / 2, height() - 50),
  origin("center"),
  color(128, 128, 128),
  outline(4, rgb(0, 0, 0)),
  text("Restart", { size: 18 }),
  {
    restartButton
  }
]);

restartButton.onClick(() => {
  score = 0;
  newQuestion();
  updateScore();
  destroy(scoreText);
  updateScore();
});

// Event listener for space key
onKeyPress("space", () => {
  newQuestion();
});