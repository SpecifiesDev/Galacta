// render.js
/**
* -== Renderer ==-
*		The renderer controls the animation loop, and the actually handling of the
*		Render canvas
*
*		-== Variables ==-
*			@vairable RObj {THREE.WebGLRenderer} - Contains the OpenGl object that renders the 3D meshes
*
*		-== Functions ==-
*			@Function setup {null} - Sets up the Renderer on the HTML page
*			@Function animate {null} - Main loop through the game. Each loop it updates the game, then renders the next frame
*
**/


class Renderer{

	constructor(){
		this.RObj = new THREE.WebGLRenderer();
	}

	setup() {

		// set size, and add the child to the page
		this.RObj.setSize(window.innerWidth - 10, window.innerHeight - 20);
		document.body.appendChild(this.RObj.domElement);

	}

	animate() {
			//Next frame
			window.requestAnimationFrame(Galacta.Engine.Renderer.animate); //Recursion basically

			if(GameState.PLAY) {
				// if they're playing we can perform our animation tasks
				Galacta.Engine.Update();
				//Render scene
				Galacta.Engine.Renderer.RObj.render(Galacta.Engine.Scene.SObj, Galacta.Engine.Camera);

			}

		}

}
