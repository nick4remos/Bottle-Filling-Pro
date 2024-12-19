// Game Variables
let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 600;

let currentLevel = 1;
let score = 0;
let selectedColor = 'red';
let intervalId;

// Set up color selector
document.getElementById('color-select').addEventListener('change', (e) => {
  selectedColor = e.target.value;
});

// Start Game Button
document.getElementById('start-button').addEventListener('click', startGame);

// Reset Button
document.getElementById('reset-button').addEventListener('click', resetGame);

// Game Logic
function startGame() {
  clearInterval(intervalId);
  score = 0;
  currentLevel = 1;
  updateScoreboard();
  intervalId = setInterval(() => {
    drawBottle();
    redirectExternal();
  }, 15000); // Every 15 seconds
}

function resetGame() {
  clearInterval(intervalId);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  score = 0;
  currentLevel = 1;
  updateScoreboard();
}

function drawBottle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = selectedColor;
  ctx.fillRect(150, 200, 100, 300); // Drawing bottle
  score += 10;
  currentLevel = Math.floor(score / 100) + 1;
  updateScoreboard();
}

function updateScoreboard() {
  document.getElementById('level').textContent = currentLevel;
  document.getElementById('score').textContent = score;
}

// Redirect Function
function redirectExternal() {
  window.open('https://www.example.com', '_blank');
}
