// Rain.js

// global var to clearinterval
let interval;

// Array containing our droplet objects
let droplets = [];

// Reference of canvas elem
let canvas = document.getElementById("rainCanv");
let ctx = canvas.getContext("2d");


// Population size of droplets
let size = 500;


function rainInit() {
	// Create a variable containing an interval that runs the rain code. We place it in a variable so we can clear the interval whenever the user presses start. Runs at 60 frames.
	interval = setInterval(function() {
		rainDroplets();
	}, 1000 / 60);
}

function rainDroplets() {

	// Subtract 10 to remove buffer, we do it constantly so whenever the window is updated, we take that value into account.
	ctx.canvas.width = window.innerWidth - 10;
	ctx.canvas.height = window.innerHeight - 10;

	// Get instance of our rainElem rainAudio
	let rainElem = document.getElementById("rainAudio");


	// I would like to note that the audio will not play until a user interacts with the document.
	// Our fix for this is having some sort of interaction at the very start, just not implemented yet.

	// This is a perpetual loop. Will keep our music running as long as the user is on the home screen.
	if(!isPlaying(rainElem)) {
		rainElem.currentTime = 0;
		rainElem.play();
	}


	// Clear every frame
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Populate array upon first run.
	for(let i = 0; i < size; i++) {
		if(droplets.length > size) {
			break;
		}
		// We randomize death height to create a natural removal of the rain droplets.
		droplets.push(new Droplet(returnRandom(1, window.innerWidth - 5), returnRandom(1, window.innerHeight - 10), returnRandom(4, 9), 1, window.innerHeight - returnRandom(1, 25)));
	}

	/* First check if the droplet is "dead", basically off of the screen. If it is, we're going to replace it's value with a new droplet that starts between 1,30
	* Note that in the first class definition, we define within the bounds of the entire window and in the second we define 1,30. This is because we want it to start
	* naturally, and then keep spawning from the top. This prevents any gaps.
	*/
	for(let i = 0; i < size; i++) {
		let drop = droplets[i];

		if(drop.isDead) {
			// Replace value with new droplet starting at top
			droplets[i] = new Droplet(returnRandom(1, window.innerWidth - 5), returnRandom(1, 30), returnRandom(4, 9), 1, window.innerHeight - returnRandom(1, 25));
		} else {
			// Update then draw
			drop.update();
			drop.draw();
		}
	}



}
