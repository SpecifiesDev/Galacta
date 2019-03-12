// Droplet.js
class Droplet {

	// Construct a new droplet with starting x / y, a rate of fall, density, deathHeight, and sway chance.
	constructor(startx, starty, rate, density, deathHeight) {
		this.x = startx;
		this.y = starty;
		this.v = rate;
		this.d = density;
		this.isDead = false;
		this.dh = deathHeight;

		// Change the chance to just compute locally, and compute by a decimal.
		var chance = Math.random();

		/* If the value exceends / = 80, the droplet initializes with swaying.
		*	The real reason we add a chance is to try and create a natural effect.
		* If all of them sway, or too many sway, the regression is noticable.
		* By adding chance we creating a "wind" effect without overdoing the swaying.
		*/
		if(chance >= .80){
			this.r = 0;
			this.sway = true;
		} else {
			this.sway = false;
		}

		// To give a more natural look to the rain particles, slower moving particles will now be bigger.
		if(this.v == 7 || this.v == 6){
			this.d = 1.5;
		} else if(this.v == 4 || this.v == 5) {
			this.d = 2;
		}
	}



	// Update the position of the droplet
	update() {
		this.y += this.v;

		// Use sine regression to alternate the position of a droplet. Creates a way effect.
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
