// Get DOM elements
const scoreElement = document.getElementById("score");
const clickButton = document.getElementById("clickButton");

// Initial score
let score = 0;

// Update the score on the page
function updateScore() {
  scoreElement.textContent = `Score: ${score}`;
}

// Click event handler
clickButton.addEventListener("click", () => {
  score++;
  updateScore();
});

// Initial update of the score display
updateScore();

