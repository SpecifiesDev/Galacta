// Login.js


// Logged in user
var loggedIn;

var universalUser = "cqb5";

var universalPass = "misandryisokay";

// Run checks
function Login() {

	// grab the values and remove them
	var user = document.getElementById("Username").value;

	document.getElementById("Username").value = "";

	var password = document.getElementById("Password").value;

	document.getElementById("Password").value = "";

	/*
	* Compare them to our indexed user / pass
	* For now, we'll just use a universal key
	* When we release into beta / release
	* There will be more to this.
	*/
	if(!(user.toLowerCase() == universalUser) || !(password == universalPass)) {
		document.getElementById("tryAgain").style.visibility = "visible";
	} else if(user.toLowerCase() == universalUser && password == universalPass) {
		loggedIn = user;
		startHome();
	}

}
function startHome() {

  // Change our gamestate
  GameState.LOGIN = false;
  GameState.HOME = true;

  // Completely remove our login form from the stack, as we will never use it again in this session
  document.getElementById("loginForm").style.display = "none";

	// Set our hidden elements to visible, when we switch to the main game canvas, we can completely remove these like we did above
  document.getElementById("head").style.visibility = "visible";
  document.getElementById("adventure").style.visibility = "visible";

  // Start the rain
  rainInit();
}
