var winCount = "";
var loseCount = "";
var guessCount = "3";
var userGuess = [];
var computerChoice = ["a","e","i","o","u"];
var computerGuess = "";
var computerRandom = computerChoice[Math.floor(Math.random()*computerChoice.length)];
	
// initialize guessount
document.getElementById("guessCount").innerHTML = guessCount;

// create computer guess
function computerPick (){
	computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)]
	console.log("ComputerChoice = " + computerGuess);
};

	computerPick();


// create clear array function
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
	

		if (userInput == computerGuess) {
			winCount++;
			console.log("win " + winCount);
			document.getElementById("userWin").innerHTML = winCount;
			reset();
			computerPick();
		}

		else if (userInput !== computerGuess) {
			guessCount--;
			console.log("guess " + guessCount);
			document.getElementById("guessCount").innerHTML = guessCount;

			if (guessCount == "-1") {
				loseCount++;
				console.log("guess " + loseCount);
				document.getElementById("userLose").innerHTML = loseCount;
				reset();
			}
		}
	}
};





