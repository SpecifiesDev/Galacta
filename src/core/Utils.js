// Utils.js

// File containing utility functions that will be used throughout the game.

// Return the playing state of an audio element
function isPlaying(elem) {
  return !elem.paused;
}

// Just a function to return a random int
function returnRandom(min, max) {
    return Math.floor(Math.random() * max) + min;
}
