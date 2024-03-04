//User Story
//AS A coding boot camp student
//I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
//SO THAT I can gauge my progress compared to my peers

//Acceptance Criteria
//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score


var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;



//Create a function to initialize the game

// The init function is called when the page loads 
function init() {
  getWins();
  getlosses();
}


//Create a function to start the game
function startGame() {
  isWin = false;
  timerCount = 90;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  startTimer()
}

//Create a function to start the timer
document.addEventListener("click", function(setTime) {
  setTime();
} 
// The setTime function starts and stops the timer and triggers winGame() and loseGame()

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 90000);
}


// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 90000);
}


//Create a function to display the questions
// Attach event listener to document to listen for key event
document.addEventListener("click", function(event) {
  // If the count is zero, exit function
  if (timerCount === 0) {
    loseGame();
    return;
  }
  /
  // Test if button pushed is correct
  if (addEventListener.includes(click)) {
    var letterGuessed = event.click;
    checkGuess(answerGuessed)
    checkWin();
  }
});


checkGuess(answerGuessed);
if (answerGuessed === correctAnswer) {
  winGame();
} else {  
  loseGame();
}

//Create a function to display the score

// Updates win count on screen and sets win count to client storage
function setWins() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}

// Updates lose count on screen and sets lose count to client storage
function setLosses() {
  lose.textContent = loseCounter;
  localStorage.setItem("loseCount", loseCounter);
}

// These functions are used by init
function getWins() {
  // Get stored value from client storage, if it exists
  var storedWins = localStorage.getItem("winCount");
  // If stored value doesn't exist, set counter to 0
  if (storedWins === null) {
    winCounter = 0;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    winCounter = storedWins;
  }
  //Render win count to page
  win.textContent = winCounter;
}

function getlosses() {
  var storedLosses = localStorage.getItem("loseCount");
  if (storedLosses === null) {
    loseCounter = 0;
  } else {
    loseCounter = storedLosses;
  }
  lose.textContent = loseCounter;
}

function checkWin() {
  // If the word equals the blankLetters array when converted to string, set isWin to true
  if (chosenWord === blanksLetters.join("")) {
    // This value is used in the timer function to test if win condition is met
    isWin = true;
  }
}
//Create a function to display the high score


//Create a function to end the game
// The winGame function is called when the win condition is met
function winGame() {
  wordBlank.textContent = "YOU WON!!!🏆 ";
  winCounter++
  startButton.disabled = false;
  setWins()
}

// The loseGame function is called when timer reaches 0
function loseGame() {
  wordBlank.textContent = "GAME OVER";
  loseCounter++
  startButton.disabled = false;
  setLosses()
}
//Create a function to submit the score


//Create a function to clear the score
// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setWins()
  setLosses()
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);
//Create a function to restart the game

//Imported code from Web App Mini Project
var quizQuestion = document.querySelector(".quizQuestion");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

// Variables to keep track of quiz state
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;


// Array of questions the user will guess
function question(questionAsked, answerA, answerB, answerC, answerD, correctAnswer) {
  this.questionAsked = questionAsked;
  this.answerA = answerA;
  this.answerB = answerB;
  this.answerC = answerC;
  this.answerD = answerD;
  this.correctAnswer = correctAnswer;
}
 
var questions = [
  new question("What does HTML stand for?", "A. Hyper Text Markup Language", "B. High-level Text Markup Language", "C. Hyperlink and Text Markup Language", "D. High-level Markup Language", "A"
  new question("Which tag is used to define an unordered list in HTML?), "A) "<ul>", "B) "<ol>", "C) "<li>", "D) "<ul>", "A"),
  new question("Which property is used in CSS to change the text color of an element?", "A) color", "B) text-color", "C) font-color", "D) textColor", "A"),
  new question("How can you include external JavaScript code in an HTML document?", "A) Using the "<script>" tag with the src attribute pointing to the JavaScript file", "B) Using the "<link>" tag with the href attribute pointing to the JavaScript file", "C) Using the "<js>" tag with the src attribute pointing to the JavaScript file", "D) Using the "<script>" tag with the href attribute pointing to the JavaScript file", "A"),
  new question("Which of the following is NOT a valid way to declare a variable in JavaScript?", "A) var x = 5;", "B) let x = 5;", "C) const x = 5;", "D) variable x = 5;", "D"),
  new question("What does CSS stand for?", "A) Creative Style Sheets", "B) Computer Style Sheets", "C) Cascading Style Sheets", "D) Colorful Style Sheets", "C"),
  new question("Which HTML tag is used to define the structure of a table?", "A) "<table>", "B) "<tr>", "C) "<td>", "D) "<th>", "A"),
  new question("How can you add a comment in HTML?", "A) "<!--This is a comment-->", "B) `/`/This is a comment`/`/", "C) `/*This is a comment*/", "D) //This is a comment", "A"),
  new question("Which property is used in CSS to control the spacing between lines of text?", "A) line-height", "B) text-spacing", "C) line-spacing", "D) spacing", "A"),
  new question("How do you add a click event to an HTML button using JavaScript?", "A) "<button onclick="myFunction()">Click me</button>", "B) "<button click="myFunction()">Click me</button>", "C) "<button on_click="myFunction()">Click me</button>", "D) "<button event="myFunction()">Click me</button>", "A"),

 ];

<!-- // Function to render questions-->

function showQuestions(questions, quizContainer){
	for(var i=0; i<questions.length; i++){
				answers = [];
			for(letter in questions[i].answers){

			// ...add an html radio button
			answers.click(
				
			);
		}

}
showQuestions(questions, quizContainer);

// The init function is called when the page loads 
function init() {
  getWins();
  getlosses();
}

// The startGame function is called when the start button is clicked
function startGame() {
  isWin = false;
  timerCount = 90;

  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  renderBlanks()
  startTimer()
}

// The winGame function is called when the win condition is met
function winGame() {
  wordBlank.textContent = "YOU WON!!!🏆 ";
  winCounter++
  startButton.disabled = false;
  setWins()
}

// The loseGame function is called when timer reaches 0
function loseGame() {
  wordBlank.textContent = "GAME OVER";
  loseCounter++
  startButton.disabled = false;
  setLosses()
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}

// Updates win count on screen and sets win count to client storage
function setWins() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}

// Updates lose count on screen and sets lose count to client storage
function setLosses() {
  lose.textContent = loseCounter;
  localStorage.setItem("loseCount", loseCounter);
}

// These functions are used by init
function getWins() {
  // Get stored value from client storage, if it exists
  var storedWins = localStorage.getItem("winCount");
  // If stored value doesn't exist, set counter to 0
  if (storedWins === null) {
    winCounter = 0;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    winCounter = storedWins;
  }
  //Render win count to page
  win.textContent = winCounter;
}

function getlosses() {
  var storedLosses = localStorage.getItem("loseCount");
  if (storedLosses === null) {
    loseCounter = 0;
  } else {
    loseCounter = storedLosses;
  }
  lose.textContent = loseCounter;
}

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setWins()
  setLosses()
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);

