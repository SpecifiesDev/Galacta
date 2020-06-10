// mainscene.js
/**
* -== MainScene ==-
*		You know I don't know how we'll design scenes, but for now I'll build them through here.
*		This will esentially be the way we build the 3D enviroment around the user
*		-== Variables ==-
*			@vairable SObj {THREE.Scene} - Contains the 3D space that the scene takes place in
*
*		-== Functions ==-
*			@Function LoadTestScene {null} - Loads a debug scene, with a greene box.
*
**/




class MainScene{
	constructor(){

		this.SObj = new THREE.Scene;

	}

	LoadTestScene(){
		//Lighting

		//Basic Sun
		var Sun = new Lighting("Sun", 0, 0.3, 0xe6ae0f, -1, 5, 0, null, null)
		this.SObj.add(Sun.object);

		//Lamp light
		var Lamp = new Lighting("SkyLamp", 1, 0.25, 0xABFFEF, 0, 1, 0, -1, 2);
		this.SObj.add(Lamp.object);

		//Add test object
		//Create Box
		var geometry = new THREE.BoxGeometry(1, 1, 1);

		//Colour it
		var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

		//Create Mesh and position it
		var cube = new THREE.Mesh( geometry, material );
		cube.position.x = 0;
		cube.position.y = 10;
		cube.position.z = 2;


		this.SObj.add(cube);


	}
}
