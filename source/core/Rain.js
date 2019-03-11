// Rain.js

// global var to clearinterval
var interval;

var droplets = [];

function rainInit() {

	// Set up the canvas.
	var canvas = document.getElementById("rainCanv");
	var ctx = canvas.getContext("2d");

	// Subtract 10 to remove buffer
	ctx.canvas.width = window.innerWidth - 10;
	ctx.canvas.height = window.innerHeight - 10;

	// Create a variable containing an interval that runs the rain code. We place it in a variable so we can clear the interval whenever the user presses start.
	interval = setInterval(function() {
		rainDroplets();
	}, 1000 / 30);

}

function rainDroplets() {

	for(var i = 0; i < 100; i++) {
		if(droplets.length > 100) {
			break;
		}
		droplets.push(new Droplet(returnRandom(5, window.innerWidth - 5), returnRandom(5, window.innerHeight - 5), returnRandom(1, 3), returnRandom(3, 5)));
	}

	for(var i = 0; i < 100; i++) {
		var drop = droplets[i];
		drop.update();
		drop.draw();
	}


}

function returnRandom(min, max) {
    return Math.floor(Math.random() * max) + min;
}