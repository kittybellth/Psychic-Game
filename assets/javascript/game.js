
// welcome pop-up
var gotName = false

while(gotName == false) {

	// ask name
	var name = prompt("Hey! What's your name?");

		// user has to type somthing in the box otherwise the pop-up will ask again
		if(name == "") {
			gotName = false;
		}

		// user must not click cancel otherwise the pop-up will ask again
		else if (name !== "null") {

			// if user type something it will ask for confirm
			// if user clicks cancel it will ask again other it will show welcome message
			if (confirm("Are you sure your name is " + name + " ?")) {
			document.getElementById("welcome").innerHTML = ("<h1> Welcome to Psychic-Game " + name + " !</h1>");
			gotName = true;
			
			}
		}
};

// Global Variable
var winCounter = "";
var loseCounter = "";
var guessCounter = "3";
var userGuess = [];
var computerChoice = ["a","e","i","o","u"];
var computerGuess = "";

// initialize guessount
document.getElementById("guessCount").innerHTML = guessCounter;

// create computer guess
function computerPick (){
	computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)]
	console.log("ComputerChoice = " + computerGuess);
	document.getElementById("computer-picked").innerHTML = computerGuess;
	document.getElementById("computer-picked").style.visibility = "hidden";
	
};
	computerPick();


// create restart function
function reset () {
	userGuess = [];
	document.getElementById("userGuesses").innerHTML = userGuess;
	guessCounter = "3";
	console.log("guess " + guessCounter);
	document.getElementById("guessCount").innerHTML = guessCounter;
};


// create main event
document.onkeyup = function main (event) {

	var userInput = event.key;
	if (event.key == "a" || event.key == "e" || event.key == "i" || event.key == "o" || event.key == "u"){
		console.log("userInput = " + userInput);
		userGuess.push(userInput);
		document.getElementById("userGuesses").innerHTML = ("<button>" + userGuess + "</button>");
	}
		// create condition if usertype matches with computer random inside event function
		// if it matches win score increases
		if (userInput == computerGuess) {
			winCounter++;
			console.log("win " + winCounter);
			document.getElementById("userWin").innerHTML = winCounter;
			reset();
			computerPick();
		}

		// if it doesn't match guessCount decreases
		else if (userInput !== computerGuess) {
			guessCounter--;
			console.log("guess " + guessCounter);
			document.getElementById("guessCount").innerHTML = guessCounter;

			// if guessCount decrease to "0" lose score inceases
			if (guessCounter == "0") {
				loseCounter++;
				console.log("guess " + loseCounter);
				document.getElementById("userLose").innerHTML = loseCounter;
				reset();
				computerPick();
			}
		}
};

document.getElementById("answer").onmousedown = function() {
document.getElementById("computer-picked").style.visibility = "visible";
};

document.getElementById("answer").onmouseup = function() {
document.getElementById("computer-picked").style.visibility = "hidden";
};

document.getElementById("answer").mouseDown = function() {
document.getElementById("computer-picked").style.visibility = "visible";
}



