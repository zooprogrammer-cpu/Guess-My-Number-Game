'use strict';

// console.log(document.querySelector('.message').textContent)

// document.querySelector('.message').textContent = 'Correct Number 🎉'
// console.log(document.querySelector('.message').textContent)

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 15

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//clicking button runs the function

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;

let highScore = 0;

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.score').textContent = score;

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.highscore').textContent = highScore;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess);

  if (!guess) {
    //document.querySelector('.message').textContent = '⛔️ No Number!';
    displayMessage('⛔️ No Number!');
    // When Player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    //document.querySelector('.message').textContent = '🎉 Correct Number';
    displayMessage('🎉 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
    }
    //When guess is too high
  }
  //When guess is incorrect
  else if (guess !== secretNumber) {
    score = score - 1;
    document.querySelector('.score').textContent = score;
  } else {
    //document.querySelector('.message').textContent = '💥You lost the game!';
    displayMessage('💥You lost the game!');
    document.querySelector('.score').textContent = 0;
  }

  document.querySelector('.message').textContent =
    guess > secretNumber ? '📈 Too High' : '📉 Too Low';
});
