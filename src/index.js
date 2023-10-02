'use estrict';

let score = 20;
let highScore = 0;
// Add a random number to be discovered
let numberAleatory = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = numberAleatory;

// Alter the state of question. Saying if existing a number or not!
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'Not a number! ⛔';
  } else if (guess > numberAleatory) {
    document.querySelector('.message').textContent = '📈 Too high!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < numberAleatory) {
    document.querySelector('.message').textContent = '📉 Too low!';
    score = score - 1;
    document.querySelector('.score').textContent = score;
  } else if (guess == numberAleatory) {
    document.querySelector('.message').textContent = 'Congratulations! 🥳';
    highScore += score;
    document.querySelector('.highscore').textContent = highScore;
  }
});
