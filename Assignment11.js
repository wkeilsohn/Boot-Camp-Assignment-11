var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2"); // Note the lack of #. This thing is fickle!
var resetButton = document.querySelector("#rb");
var p1display = document.querySelector("#h1_num1"); //# needed when calling specific id
var p2display = document.querySelector("#h1_num2");
var numInput = document.querySelector("#input");
var winningScoreDisplay = document.querySelector("p span") // selectes the first span in paragraphs
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1button.addEventListener("click", function(){
	if(!gameOver){ // Allows you to add to the score so long as the winning score has not been reached.
	p1Score++;
	// console.log(p1Score);
	if(p1Score === winningScore){ //Prevents us from adding more to the score
		gameOver = true;
		p1display.classList.add("winner"); //Changes the color
	}
	p1display.textContent = p1Score;
	}
});

p2button.addEventListener("click", function(){
	if(!gameOver){
	p2Score++;
	if(p2Score === winningScore){ // Having the logic in both function creates the deadlock which stops scoring after the winning point.
		gameOver = true;
		p2display.classList.add("winner");
	}
	p2display.textContent = p2Score;
}
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1display.textContent = 0;
	p2display.textContent = 0;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameOver = false;
	// Resets all variables to their defaults
};

resetButton.addEventListener("click", function(){
	reset();
});

numInput.addEventListener("change", function(){ //change events run anytime a value changes
	winningScoreDisplay.textContent = this.value;
	// winningScore = numInput.value; --> Don't do this b/c it tries to make a string equal to a number
	winningScore = Number(numInput.value);
	reset(); // Produces "DRY" code
});