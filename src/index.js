'use estrict';

let score = 20;
let highScore = 0;
// Add a random number to be discovered
let numberAleatory = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';

// Alter the state of question. Saying if existing a number or not!
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'Not a number! ⛔';
  } else {
    if (guess === numberAleatory) {
      document.querySelector('.message').textContent = 'Congratulations! 🥳';
      document.querySelector('body').style.backgroundColor = '#60b347';
      highScore += score;
      document.querySelector('.highscore').textContent = highScore;
      document.querySelector('.number').textContent = numberAleatory;
    } else {
      document.querySelector('.message').textContent =
        guess > numberAleatory ? '📈 Too high!' : '📉 Too low!';
    }
  }
  if (guess != numberAleatory) {
    score--;
    document.querySelector('.score').textContent = score;
  } else if (score == 0) {
    document.querySelector('.message').textContent = '💥 You lost the game!';
  }

  // const guess = Number(document.querySelector('.guess').value);
  // if (!guess) {
  //   document.querySelector('.message').textContent = 'Not a number! ⛔';
  // } else if (guess > numberAleatory) {
  //   // altering the state of information for facility the user find the number aleatory
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     // User lose
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //   }
  // } else if (guess < numberAleatory) {
  //   if (score != 0) {
  //     // altering the state of information for facility the user find the number aleatory
  //     document.querySelector('.message').textContent = +;
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     // User lose
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //   }
  // } else if (guess == numberAleatory) {
  //   document.querySelector('.message').textContent = 'Congratulations! 🥳';
  //   document.querySelector('body').style.backgroundColor = '#60b347';
  //   highScore += score;
  //   document.querySelector('.highscore').textContent = highScore;
  //   document.querySelector('.number').textContent = numberAleatory;
  // }
});

//Adding event of reintialization of the game
document.querySelector('.btn.again').addEventListener('click', () => {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  numberAleatory;
  document.querySelector('.number').textContent = numberAleatory;
  document.querySelector('.number').textContent = '?';
});

// Adding event of confirm for resetting or not the game

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.btn.reset');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

// Adding event that reset the values of the game
document.querySelector('.btn.ok').addEventListener('click', () => {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.highscore').textContent = 0;
  numberAleatory;
  document.querySelector('.number').textContent = numberAleatory;
  document.querySelector('.number').textContent = '?';
  closeModal();
});

// Adding event for cancel the function of reset
document.querySelector('.btn.Cancel').addEventListener('click', () => {
  closeModal();
});

//Adding event for utilization of 'Esc' for to remove the table of options "cancel" and "Yes"
document.addEventListener('keydown', function (r) {
  if (r.key == 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
