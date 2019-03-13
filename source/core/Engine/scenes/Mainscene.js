// mainscene.js

function setScene() {

	window.scene = new THREE.Scene();
	window.camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1e27);

}
