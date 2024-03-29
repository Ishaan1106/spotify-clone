console.log('smort.js loaded');


document.addEventListener('DOMContentLoaded', function() {

//! Search bar functionality
let searchOption = document.querySelector('.upbar .option#search');
searchOption.addEventListener('click', function(event) {
    let searchIframe = document.getElementById('searchIframe');
    let playlistIframe = document.getElementById('playlistIframe');
    searchIframe.style.display = 'block';
    playlistIframe.style.display = 'none';
});

//! playlist button functionality
//selecting the playlist
var playlist1 = document.querySelector('#playlists-1');
var playlist2 = document.querySelector('#playlist-1');

// Add a click event listener to playlist
playlist1.addEventListener('click', function(event) {
    let searchIframe = document.getElementById('searchIframe');
    let playlistIframe = document.getElementById('playlistIframe');
    searchIframe.style.display = 'none';
    playlistIframe.style.display = 'block';
});
playlist2.addEventListener('click', function(event) {
    let searchIframe = document.getElementById('searchIframe');
    let playlistIframe = document.getElementById('playlistIframe');
    searchIframe.style.display = 'none';
    playlistIframe.style.display = 'block';
});


//! home reset button functionality
    // Home button functionality
    // Select the .upbar .option element with the id "home"
    let homeOption = document.querySelector('.upbar .option#home');

    // Add a click event listener to the home option
    homeOption.addEventListener('click', function(event) {

        // Select the iframes
        let searchIframe = document.getElementById('searchIframe');
        let playlistIframe = document.getElementById('playlistIframe');

        // Hide the iframes
        searchIframe.style.display = 'none';
        playlistIframe.style.display = 'none';
    });
});




// ! playbar feature
document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.querySelector('.bottom .middle .up .play');
    var playButtonImg = playButton.querySelector('img');
    var rightInput = document.querySelector('.down input');
    var timeDisplay = document.querySelector('.down .time1');
    var intervalId = null;

    playButton.addEventListener('click', function() {
        if (playButtonImg.src.endsWith('icons8-play-96.png')) {
            playButtonImg.src = './main/img/icon/icons8-pause-60.png';
            intervalId = setInterval(function() {
                var currentValue = parseFloat(rightInput.value);
                currentValue += 0.5556; // Change this value to control how much the input should move forward
                if (currentValue > 100) {
                    currentValue = 0; // Reset to the beginning when it reaches the end
                    clearInterval(intervalId); // Stop when it reaches the end
                    playButtonImg.src = './main/img/icon/icons8-play-96.png'; // Change the pause button back to the play button
                }
                rightInput.value = currentValue.toFixed(4);

                // Update the time display
                var minutes = Math.floor(currentValue / (100/3));
                var seconds = Math.floor((currentValue / (100/3) - minutes) * 60);
                timeDisplay.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
            }, 1000); // Update the slider every second
        } else {
            playButtonImg.src = './main/img/icon/icons8-play-96.png';
            clearInterval(intervalId); // Stop the movement when the button is clicked again
        }
    });
});