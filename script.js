'use strict';
// Select the elements
const guessInput = document.querySelector('.guess');
const checkButton = document.querySelector('.btn.check');
const message = document.querySelector('.message');
const scoreSpan = document.querySelector('.score');
const highScoreSpan = document.querySelector('.highscore');

// Generate Random Secret Number between 1 and 20
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let correctNumber = getRandomNumber(1, 20);
console.log(correctNumber);

	// 	Math.random():
	//	This function generates a random floating-point number between 0 (inclusive) and 1 (exclusive). For example, it could generate 0.23456, 0.78901, etc., but never exactly 1.
	//	Math.random() * (max - min + 1):
	//	By multiplying the result of Math.random() by (max - min + 1), you scale the random number to a new range:
// For min = 1 and max = 20, the calculation becomes:
// Math.random() * (20 - 1 + 1) // Simplifies to Math.random() * 20 

	// •	Now, Math.random() generates a number between 0 and 1, so multiplying by 20 gives a number between 0 and 20 (e.g., 0 to 19.999...).

	// .	Math.floor(...):
	// •	Math.floor() rounds down the floating-point number to the nearest whole number (integer). This ensures that the result is an integer.
	// •	So, the Math.random() * (max - min + 1) will produce a decimal between 0 and 19.999..., and Math.floor() will round it down to a whole number between 0 and 19.
	// 	+ min:
	// •	Adding min shifts the range from [0, 19] to [1, 20].
	// •	If the result from Math.floor() is 0, adding min (1) results in 1.
	// •	If the result from Math.floor() is 19, adding min results in 20.
	// •	This adjustment ensures the generated number falls within the desired range of[1, 20].
 

// Regenerates new number when the correct number has been guessed 
function updateCorrectNumber() {
  let newNumber;
  do {
    newNumber = getRandomNumber(1, 20);
  } while (newNumber === correctNumber);
  return newNumber;
}

// Initialize score
let score = parseInt(scoreSpan.textContent, 10);
let highscore = parseInt(highScoreSpan.textContent, 10);

// Add event listener to the Check button
checkButton.addEventListener('click', function () {
  const guessedNumber = Number(guessInput.value);

  // Handle unwanted or invalid guess
  if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 20) {
    message.textContent = 'Please enter a number between 1 and 20!';
    guessInput.focus();
    return;
  }

  if (guessedNumber === correctNumber) {
    message.textContent = 'Correct Guess!';
    score += 1; // Increment the score
    scoreSpan.textContent = score;
    document.body.style.backgroundColor = '#60b347'; // Set background color to green to signify success

    // Update high score if the current score is greater
    if (score > highscore) {
      highscore = score;
      highScoreSpan.textContent = highscore;
    }
    correctNumber = updateCorrectNumber();
    console.log(correctNumber);
  } else if (guessedNumber < correctNumber) {
    message.textContent = 'Too low!';
    score -= 1; // Decrement the score when guess is lower than correct score
    scoreSpan.textContent = score;
  } else if (guessedNumber > correctNumber) {
    message.textContent = 'Too high!';
    score -= 1; // Decrement the score when guess us higher than correct score
  }

  if (score <= 0) {
    message.textContent = 'Game Over!';
    scoreSpan.textContent = 0;
    document.body.style.backgroundColor = '#FF0000'; // Set background color to red
    checkButton.disabled = true;
    guessInput.disabled = true;
  }

  // Clear the input field and set focus after each guess
  guessInput.value = '';
  guessInput.focus();

  console.log(correctNumber);
});

// Add event listener to the Again button to reset the game
document.querySelector('.btn.again').addEventListener('click', function () {
  score = 20; // Reset the score for easy mode or 10 for hard mode
  scoreSpan.textContent = score;
  correctNumber = getRandomNumber(1, 20); // Generate a new correct number
  message.textContent = 'Start guessing...';
  document.body.style.backgroundColor = '#222'; // Reset background color
  checkButton.disabled = false;
  guessInput.disabled = false;
  guessInput.value = '';
  guessInput.focus(); // Set focus on the input field
});
