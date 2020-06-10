// Player.js
/**
* It's 4:30 I'M SO TIRED
* -== Player ==-
*		This class is meant to sit under the PlayerControl class, so it can store data ]
*		relevant to the user, along with the model data and
*		anything else we deem is nessiary. I may just get rid of this class, and combine it
*		with the aformentioned class.
*		-== Variables ==-
*			@vairable Obj {Object3D} - Contains the 3d Object that represents the player. Changing it's location will change the camera location
*			@vairable name {String} - Name of player - Dunno why it's here ask austin
*			@vairable health {int} - Hp pool - again ask austin
*
*		-== Functions ==-
*			@Function Update {null} - Presumably updates stats
*			@Function Stats {null} - Formats stats?
*			@Function Damage {null} - Edits hp pool
*
**/

class Player {

	constructor(name) {
		this.Obj;

		// name to reference
		this.name = name;

		// set default health to 100
		this.health = 100;

	}

	Update() {
		// Update whatever we need to
	}

	Stats() {
		// grab stats of a player
	}

	// perform damage calculation to the player
	Damage(amount) {
		// Since we don't want negative health, we check
		if(this.health -= amount < 0) {
			console.error("Error, called too much damage to Player object. Player.js:46");
		} else if(this.health -= amount > 0) {
			this.health -= amount;
		}
	}

}
