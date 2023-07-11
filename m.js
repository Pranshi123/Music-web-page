var audioPlayer = document.getElementById('audio-player');

function playSong(songUrl) {
  audioPlayer.src = songUrl;
  audioPlayer.play();
}

function play() {
  audioPlayer.play();
}

function pause() {
  audioPlayer.pause();
}

function stop() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
}

function likeSong(button, songTitle) {
  button.classList.toggle('liked');
  var likeText = button.classList.contains('liked') ? 'Liked' : 'Like';
  button.textContent = likeText;

  var favoriteSongs = JSON.parse(localStorage.getItem('favoriteSongs')) || [];
  if (button.classList.contains('liked')) {
    favoriteSongs.push
  } 
}