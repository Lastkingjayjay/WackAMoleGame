const squares = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let hitPositiion;
let currentTime = 60;
let timerId = null;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");
  hitPositiion = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPositiion) {
      result++;
      score.textContent = result;
      hitPositiion = null;
    }
  });
});

function moveMole() {
  timerId = setInterval(randomSquare, 500);
}
moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(timerId);
    clearInterval(countDownTimerId);
    alert("GAME OVER! Your final score is " + result);
  }
}
let countDownTimerId = setInterval(countDown, 1000);
