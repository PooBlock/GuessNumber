"use strict";
//selecting the .message class

//document.querySelector(`.message`).textContent = `Correct Number!`;

//document.querySelector(`.number`).textContent = `13`;

// document.querySelector(`.guess`).value = 23;
// console.log(document.querySelector(`.guess`).value);

//function
const wrongGuess = function (message) {
  if (score > 1) {
    document.querySelector(`.message`).textContent = `${message}`;
    score--;
    document.querySelector(`.score`).textContent = score;
  } else {
    document.querySelector(`.message`).textContent = `You lost the game!`;
    document.querySelector(`.score`).textContent = 0;
  }
};

//variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(`.check`).addEventListener(`click`, function () {
  let guess = Number(document.querySelector(`.guess`).value);
  console.log(guess);

  //when there is no input
  if (!guess) {
    document.querySelector(`.message`).textContent = `No number!`;

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `Correct Number!`;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
    }

    document.querySelector(`.highscore`).textContent = highscore;

    //when guess is too high
  } else if (guess > secretNumber) {
    wrongGuess("Too High!");

    //when guess is too low
  } else if (guess < secretNumber) {
    wrongGuess(`Too low!`);
  }
});

//again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
