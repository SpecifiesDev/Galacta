// Droplet.js
class Droplet {

	// Construct a new droplet with starting x / y, a rate of fall, and density.
	constructor(startx, starty, rate, density) {
		this.x = startx;
		this.y = starty;
		this.v = rate;
		this.d = density;
	}



	// Update the position of the droplet
	update() {
		this.y += v;
	}

	// Draw to canvas
	draw() {

		// Reference our canvas and its context
		var canv = document.getElementById("rainCanv");
		var ctx = canv.getContext("2d");

		// begin drawing
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.d, 0, Math.PI * 2);
		ctx.fillStyle = "#ffffff";
		ctx.fill();
		ctx.closePath();
		

	}




}