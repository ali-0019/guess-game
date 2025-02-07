"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#000";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = 20;
  score = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  number = Math.trunc(Math.random() * 20) + 1;
});

document.querySelector(".check").addEventListener("click", function () {
  const geuss = Number(document.querySelector(".guess").value);
  console.log(geuss);
  if (score > 0) {
    if (!geuss) {
      document.querySelector(".message").textContent = "⛔ No number!";
    } else if (geuss === number) {
      document.querySelector(".message").textContent = "🎉 thats wright";
      document.querySelector(".number").textContent = number;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      let highscore = document.querySelector(".highscore").textContent;
      if (highscore < score) {
        document.querySelector(".highscore").textContent = score;
      }
    } else if (geuss > number) {
      document.querySelector(".message").textContent = "too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (geuss < number) {
      document.querySelector(".message").textContent = "too low!";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    document.querySelector(".message").textContent = "💥 You lost the game!";
    document.querySelector(".score").textContent = 0;
    document.querySelector("body").style.backgroundColor = "#FF033E";
  }
});
