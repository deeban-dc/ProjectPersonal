// Get the audio element and buttons
const audio = document.getElementById('backgroundMusic');
const playButton = document.getElementById('playBtn');
const pauseButton = document.getElementById('pauseBtn');

// Play the audio when play button is clicked
playButton.addEventListener('click', () => {
    audio.play();
    playButton.disabled = true; // Disable play button when music is playing
    pauseButton.disabled = false; // Enable pause button
});

// Pause the audio when pause button is clicked
pauseButton.addEventListener('click', () => {
    audio.pause();
    playButton.disabled = false; // Enable play button when music is paused
    pauseButton.disabled = true; // Disable pause button
});
