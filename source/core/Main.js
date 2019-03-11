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
    if(GameState.HOME) {

      rainInit();

    } else {
      // Testing purpose. Start game automatically. The "Start" button will be the actual call to start a function that deals with animation.
    }

  }





}
