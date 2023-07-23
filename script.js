// Get the audio element
const audio = document.getElementById('lovelyAudio');

// Get the "Play Lovely" button
const playLovelyButton = document.getElementById('playLovelyButton');

// Add an event listener to the button to play or pause the "Lovely" song
playLovelyButton.addEventListener('click', () => {
  // Check if the audio is playing or not
  if (audio.paused) {
    // If the audio is paused, play it
    audio.play();
  } else {
    // If the audio is playing, pause it
    audio.pause();
  }
});
