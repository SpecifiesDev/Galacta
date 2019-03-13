// Player.js

// upon game start, we create a player instance with starting values


class Player {

	constructor(x, y, z, name) {

		// Cursor of keys pressed.
		this.cursor = {
			"W": false,
			"A": false,
			"S": false,
			"D": false
		}

		// x y z coords
		this.x = x;
		this.y = y;
		this.z = z;

		// name to reference
		this.name = name;

		// set default health to 100
		this.health = 100;

	}

	update() {
		// Update whatever we need to
	}

	move() {
		// after update, we move
	}

	stats() {
		// grab stats of a player
	}

	// perform damage calculation to the player
	damage(amount) {
		// Since we don't want negative health, we check
		if(this.health -= amount < 0) {
			console.error("Error, called too much damage to Player object. Player.js:45");
		} else if(this.health -= amount > 0) {
			this.health -= amount;
		}
	}

}
