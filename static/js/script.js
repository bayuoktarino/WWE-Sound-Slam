let score = 0;
let currentLevel = "easy";
let songsData = {};
let currentQuestionIndex = 0; // Stores the current question index

// Fetch song data from the server
async function loadSongs() {
    const response = await fetch("/get_songs");
    songsData = await response.json();
}

// Play the song
function playSong(file) {
    const audio = document.getElementById("song");
    audio.src = `/static/audio/${file}`;
    audio.play();
}

// Display options
function displayOptions(correctAnswer, wrongAnswers) {
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    // Combine correct and wrong answers
    const allOptions = [correctAnswer, ...wrongAnswers];

    // Create a button for each option
    allOptions.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(correctAnswer, option));
        optionsDiv.appendChild(button);
    });
}

// Check the answer
function checkAnswer(correctAnswer, selectedAnswer) {
    if (selectedAnswer === correctAnswer) {
        score += 10;
        alert("Correct!");
    } else {
        alert(`Wrong! The correct answer was ${correctAnswer}.`);
    }

    document.getElementById("score").textContent = score;
    nextSong();
}

// Load the next song
function nextSong() {
    if (currentQuestionIndex < songsData[currentLevel].length) {
        const song = songsData[currentLevel][currentQuestionIndex];
        playSong(song.file);
        displayOptions(song.correct_answer, song.wrong_answers);
        currentQuestionIndex++;
    } else {
        alert(`Level ${currentLevel} completed! Your final score is ${score}.`);
        resetGame();
    }
}

// Reset the game
function resetGame() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("score").textContent = score;
}

// Start the game
document.addEventListener("DOMContentLoaded", async () => {
    await loadSongs(); // Load song data when the page loads
    nextSong(); // Start the game
});

// Event listener for level buttons
document.getElementById("easy").addEventListener("click", () => {
    currentLevel = "easy";
    resetGame();
    nextSong();
});

document.getElementById("medium").addEventListener("click", () => {
    currentLevel = "medium";
    resetGame();
    nextSong();
});

document.getElementById("hard").addEventListener("click", () => {
    currentLevel = "hard";
    resetGame();
    nextSong();
});

// Event listener for the "Next Song" button
document.getElementById("next").addEventListener("click", nextSong);
