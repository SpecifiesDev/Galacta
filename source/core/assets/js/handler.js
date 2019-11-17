// Handlers.js

// This handler is for "enter" keys with text boxes. First wrote this code for an encryption algorithm

document.onkeydown = keyDownHandler;

function keyDownHandler(e) {
	if(e.keyCode == 13 && GameState.LOGIN) {
		Login();
	}
}


// Rest of the handlers for the actual gameplay