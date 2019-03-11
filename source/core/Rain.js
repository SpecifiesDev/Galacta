// Rain.js

// global var to clearinterval
var interval;

var droplets = [];

// Population size of droplets
var size = 1500;


function rainInit() {

	// Set up the canvas.
	var canvas = document.getElementById("rainCanv");
	var ctx = canvas.getContext("2d");

	// Subtract 10 to remove buffer
	ctx.canvas.width = window.innerWidth - 10;
	ctx.canvas.height = window.innerHeight - 10;

	// Create a variable containing an interval that runs the rain code. We place it in a variable so we can clear the interval whenever the user presses start. Runs at 60 frames.
	interval = setInterval(function() {
		rainDroplets();
	}, 1000 / 60);

}

function rainDroplets() {

	// I could've created global vars but meh, this will do
	var canvas = document.getElementById("rainCanv");
	var cont = canvas.getContext("2d");

	// Clear every frame
	cont.clearRect(0, 0, canvas.width, canvas.height);

	// Populate array upon first run.
	for(var i = 0; i < size; i++) {
		if(droplets.length > size) {
			break;
		}
		// We randomize death height to create a natural removal of the rain droplets.
		droplets.push(new Droplet(returnRandom(1, window.innerWidth - 5), returnRandom(1, window.innerHeight - 10), returnRandom(4, 9), 1, window.innerHeight - returnRandom(1, 10)));
	}

	/* First check if the droplet is "dead", basically off of the screen. If it is, we're going to replace it's value with a new droplet that starts between 1,30
	* Note that in the first class definition, we define within the bounds of the entire window and in the second we define 1,30. This is because we want it to start
	* naturally, and then keep spawning from the top. This prevents any gaps.
	*/
	for(var i = 0; i < size; i++) {
		var drop = droplets[i];

		if(drop.isDead) {
			// Replace value with new droplet starting at top
			droplets[i] = new Droplet(returnRandom(1, window.innerWidth - 5), returnRandom(1, 30), returnRandom(4, 9), 1, window.innerHeight - returnRandom(1, 10));
		} else {
			// Update then draw
			drop.update();
			drop.draw();
		}
	}
	

}

// Just a function to return a random int
function returnRandom(min, max) {
    return Math.floor(Math.random() * max) + min;
}