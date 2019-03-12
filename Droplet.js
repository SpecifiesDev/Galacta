// Droplet.js
class Droplet {

	// Construct a new droplet with starting x / y, a rate of fall, density, deathHeight, and sway chance.
	constructor(startx, starty, rate, density, deathHeight, sway) {
		this.x = startx;
		this.y = starty;
		this.v = rate;
		this.d = density;
		this.isDead = false;
		this.dh = deathHeight;

		// 80% chance for droplet to have sway
		if(sway = 2){
			this.r = 0;
			this.sway = true;
		} else {
			this.sway = false;
		}
	}



	// Update the position of the droplet
	update() {
		this.y += this.v;

		// Sways the rain back and forth if it is a droplet that has that ability
		if(this.sway == true){
			this.x += Math.sin(this.r * (1/8));
			this.r += Math.PI / 6;
		}

		if(this.y > this.dh) {
			this.isDead = true;
		}
	}

	// Draw to canvas
	draw() {

		// Reference our canvas and its context

		var canv = document.getElementById("rainCanv");
		var ctx = canv.getContext("2d");
		// begin drawing
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.d, 0, Math.PI * 2);
		ctx.fillStyle = "#6b98e0";
		ctx.fill();
		ctx.closePath();
		

	}




}