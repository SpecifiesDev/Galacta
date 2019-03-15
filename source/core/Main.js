/*
  -== Main ==-
  This initializes the program by doing the following things
    - Start the 3d Engine
    - Connect the canvas to the renderer
    - Handle menu loads
    - etc
*/


class Game {

  /**
  * @variable {Engine} class.Engine - The engine for the game /core/Engine/EngineCore
  *
  * @function {null} init - Initializes the home screen
  * @function {null} StartGame - Get rid of menu, and start engine
  **/

  constructor(){

    this.Engine; //Init for later

  }


  init() {

    // Check if the screen is still located at home, if it is start a loop to animate the canvas for rain.
    if(GameState.LOGIN) {

      // We hide the elements while we're in game state login upon initalization
      document.getElementById("head").style.visibility = "hidden";
      document.getElementById("adventure").style.visibility = "hidden";

    }
    if(GameState.HOME) {
      document.getElementById("loginForm").style.display = "none";
      rainInit();
    }

  }

  StartGame() {
    if(GameState.HOME) {

      //Get Rid of rain
      clearInterval(interval);

      var elem = document.getElementById("rainAudio");

      // Pause and set to 0
      elem.pause();
      elem.currentTime = 0;

      //Remove the background canvas and elements
      document.getElementById("head").style.display = "none";
      document.getElementById("adventure").style.display = "none";
      document.getElementById("rainCanv").style.display = "none";

      //Hand off to the renderer
      GameState.PLAY = true;
      GameState.HOME = false;
      
      this.Engine = new Engine();
      this.Engine.init();
    }
  }





}
