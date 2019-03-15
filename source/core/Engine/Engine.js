//Engine.js
/**
* -== ENGINE ==-
*   The engine is the core of the program, and pretty much controls all the phyiscs / rendering
*   SUB CLASS OF Game() | Galacta
*   PATH = Galacta.Engine
*
*   -== Variables ==-
*     @vairable Renderer {Renderer} - The renderer, /source/core/Engine/Render.js
*     @variable Scene {MainScene} - The current scene being loaded into the Engine, /source/core/Engine/scenes/Mainscene.js
*     @variable Camera {THREE.PerspectiveCamera} - The Camera that feeds GUI information to the user, created in /source/core/Engine/Objects/PlayerControl.js
*     @variable PlayerClass {PlayerControl} - Houses all of the player data, /source/core/Engine/Objects/PlayerClass.js
*     @variable Delta {performance} - The current time of the program, used to tell time between frames
*     @variable PreviousDelta {performance} - The DELTA of the last frame
*   -== Functions ==-
*     @function init {null} - Initilizes the renderer, then the scene, then finally the player. After that it starts the animation loop.
*     @function Update {null} - Is called every frame, resets deltas, and updates the entire player class
*
*
*
**/

class Engine{
  constructor(){

    this.Renderer;
    this.Scene;
    this.Camera;
    this.PlayerClass;

    this.Delta = performance.now();
    this.PreviousDelta = this.Delta;
  }

  init(){
    console.log("[ -- Setting up renderer -- ]");

    this.Renderer = new Renderer();
    this.Renderer.setup();

    console.log("[ -- Setting up Scene to render -- ]");
    this.Scene = new MainScene();
    this.Scene.LoadTestScene();

    console.log("[ -- Setting up controls -- ]")
    this.PlayerClass = new PlayerControl();

    console.log("[ -- Start animation loop -- ]")
    this.Renderer.animate();


  }

  Update(){
    //Update Deltas
    this.PreviousDelta = this.Delta;
    this.Delta = performance.now();

    //Update player controls first
    this.PlayerClass.Update();

  }

  AddObject(Obj){
    this.Scene.SObj.add(Obj);

  }
}
