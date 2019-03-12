/*
  -== Main ==-
  This initializes the program by doing the following things
    - Start the 3d Engine
    - Connect the canvas to the renderer
    - Handle menu loads
    - etc
*/


/*
  -== CLASS Game ==-
    -== Details ==-
      -- the head of the game, will start all child processes such as rendering, model loading etc etc
      -- Called by init()

      -== Functions ==-
        init()
        -
*/

class Game {


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





}
