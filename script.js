// Get DOM elements
const scoreElement = document.getElementById("score");
const clickButton = document.getElementById("clickButton");

// Initial score
let score = 0;

// Update the score on the page
function updateScore() {
  scoreElement.textContent = `Score: ${score}`;
}


function checkScore() {
  if (score === 11) {
    displayClock();
  }
}

function displayClock() {
  const clockDiv = document.getElementById("clock");
  clockDiv.style.display = "block";
}


// Click event handler
clickButton.addEventListener("click", () => {
  score++;
  updateScore();
  checkScore();
});

