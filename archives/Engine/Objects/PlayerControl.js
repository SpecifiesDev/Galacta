//PlayerControl.js

/**
* -== PlayerControl ==-
*   Dispite the poor class name, this is the parent class of Player. It contains the Player.js subclass, along with all of the movement functions
*
*   -== Variables ==-
*     @variable Player {Player} - The child class of Player, that contains information relating to the player
*     @variable PointerLockControl {THREE.PointerLockControls} - Controls the locking of the pointer, and the rotation of the camera upon mouse movement.
*     @variable Keys {w,a,s,d} - If a player presses one of the keys, it becomes a 1, thus causing Update() to move the player in that direction
*
*   -== Functions ==-
*     @function window.onblur - When the window is clicked out of, chrome calls onblur. Here we use it to disengage point lock, but it could have later usages
*     @function window.onfocus - When the user clicks back in on the window, we lock the pointer putting them in the game again
*     @function SetUpListeners - Set ups the listeners for key clicks, like WASD
*     @function Update - Updates the player subclass, then updates position depending on input
*
**/


class PlayerControl{

  constructor(){
    //Set Up player control
    this.Player = new Player("Taylor");

    //Create Camera and place it in scene
    Galacta.Engine.Camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1e27);

    //Create the pointer lock
    this.PointerLockControl = new THREE.PointerLockControls(Galacta.Engine.Camera);
    this.Player.Obj = this.PointerLockControl.getObject();

    //Add the Camera to the scene
    Galacta.Engine.AddObject(this.Player.Obj);

    //Set up keys
    this.Keys = {
  			"w": 0,
  			"a": 0,
  			"s": 0,
  			"d": 0
  	}

    //Set up key listeners
    this.SetUpListeners();

    //Lock the window, and set unlock window
    this.PointerLockControl.lock();

    window.onblur = function(){
      Galacta.Engine.PlayerClass.PointerLockControl.unlock();
    }

    window.onfocus = function(){
      Galacta.Engine.PlayerClass.PointerLockControl.lock();
    }
  }

  Update(){
    this.Player.Update(); //Player.js

    //Movement
    var SPEED = 100;
    var velocity = new THREE.Vector3();
    var direction = new THREE.Vector3();

    this.CurrentTick = (Galacta.Engine.Delta - Galacta.Engine.PreviousDelta) / 1000;

    velocity.x -= velocity.x * 10.0 * this.CurrentTick;
    velocity.z -= velocity.z * 10.0 * this.CurrentTick;

    //Set in which direction the character should move
    direction.z = this.Keys.w - this.Keys.s;
    direction.x = this.Keys.a - this.Keys.d;
    direction.normalize();

    if(this.Keys.w == 1 || this.Keys.s == 1 ){
      velocity.z -= direction.z * SPEED * this.CurrentTick;
    }

    if(this.Keys.a == 1 || this.Keys.d == 1){
      velocity.x -= direction.x * SPEED * this.CurrentTick;
    }
    this.Player.Obj.translateX( velocity.x * this.CurrentTick );
    this.Player.Obj.translateZ( velocity.z * this.CurrentTick );
  }


  SetUpListeners(){
    window.onkeydown = function(key){
      let Class = Galacta.Engine.PlayerClass;
      var code = key.keyCode;
      switch(code){
        case 87:
          Class.Keys.w = "1"
          break;
        case 65:
          Class.Keys.a = "1"
          break;
        case 83:
          Class.Keys.s = "1"
          break;
        case 68:
          Class.Keys.d = "1"
          break;
        default:
          break;
        }
    }

    window.onkeyup = function(key){
      var code = key.keyCode;
      let Class = Galacta.Engine.PlayerClass;
      switch(code){
        case 87:
          Class.Keys.w = "0"
          break;
        case 65:
          Class.Keys.a = "0"
          break;
        case 83:
          Class.Keys.s = "0"
          break;
        case 68:
          Class.Keys.d = "0"
          break;
          break;
        default:
          break;

      }

    }

  }


}
