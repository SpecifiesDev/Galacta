// render.js


// Honestly, this framework / pathing will probably be changed. I just threw this together so we'd have a "start" function.

function setup() {
	// Set it to window, so we can acess it throughout the script.
	window.renderer = new THREE.WebGLRenderer();

	// set size, and add the child to the page
	renderer.setSize(window.innerWidth - 10, window.innerHeight - 20);
	document.body.appendChild(renderer.domElement);

	function animate() {
		//Next frame
		window.requestAnimationFrame(animate);

		if(GameState.PLAY) {
			// if they're playing we can perform our animation tasks

			window.renderer.render(window.scene, window.camera);
		}
	}
}