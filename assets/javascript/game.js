
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
			// if user clicks cancel it will ask again other it will show welcome sentence
			if (confirm("Are you sure your name is " + name + " ?")) {
			document.getElementById("welcome").innerHTML = ("<h1> Welcome to Psychic-Game " + name + " !</h1>");
			gotName = true;
			
			}
		}
};

// Global Variable
var winCount = "";
var loseCount = "";
var guessCount = "3";
var userGuess = [];
var computerChoice = ["a","e","i","o","u"];
var computerGuess = "";

// initialize guessount
document.getElementById("guessCount").innerHTML = guessCount;

// create computer guess
function computerPick (){
	computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)]
	console.log("ComputerChoice = " + computerGuess);
};
	computerPick();


// create restart function
function reset () {
	userGuess = [];
	document.getElementById("userGuesses").innerHTML = userGuess;
	guessCount = "3";
	console.log("guess " + guessCount);
	document.getElementById("guessCount").innerHTML = guessCount;
};


// create main event
document.onkeyup = function main (event) {

	var userInput = event.key;
	if (event.key == "a" || event.key == "e" || event.key == "i" || event.key == "o" || event.key == "u"){
		console.log("userInput = " + userInput);
		userGuess.push(userInput);
		document.getElementById("userGuesses").innerHTML = ("<button>" + userGuess + "</button>");
	
		// create condition if usertype matches with computer random inside event function
		// if it matches win score increases
		if (userInput == computerGuess) {
			winCount++;
			console.log("win " + winCount);
			document.getElementById("userWin").innerHTML = winCount;
			reset();
			computerPick();
		}

		// if it doesn't match guessCount decreases
		else if (userInput !== computerGuess) {
			guessCount--;
			console.log("guess " + guessCount);
			document.getElementById("guessCount").innerHTML = guessCount;

			// if guessCount decrease to "0" lose score inceases
			if (guessCount == "0") {
				loseCount++;
				console.log("guess " + loseCount);
				document.getElementById("userLose").innerHTML = loseCount;
				reset();
			}
		}
	}
};





