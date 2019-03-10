//Array of words to guess
var words = ['italy', 'bermuda', 'brazil', 'mexico', 'china', 'germany', 'france']
var dash = []
var correct = []
var incorrect = []

// Creating variables to hold the number of wins, guesses. They start at 0.
var guessesLeft = 15
var wins = 0
var losses = 0
var lettersLeft = 0
var selectedWord 

// Create variables that hold references to the places in the HTML where we want to display things.
var winsText = document.getElementById("wins-text") 
var lossesText = document.getElementById("losses-text")
var currentWords = document.getElementById("current-word")
var remaingGuesses = document.getElementById("remaining-guesses")
var wrongGuess = document.getElementById("wrong-guess")
var winningImg = document.getElementById("image")

//Code to select random word from array
function randWord() {
selectedWord = words[Math.floor(Math.random()*words.length)]
console.log(selectedWord)
}
//Call function to get random word
randWord()
lettersLeft = selectedWord.length
console.log(selectedWord)

//Determine number of dashes to put in dash array for current word
function dashes() {
    for(var i = 0; i < selectedWord.length; i++) {
        dash.push('_')
        currentWords.textContent = dash
    }
    return dash
}
console.log(dashes())
//Function to restart game
function reset() {
  guessesLeft = 15
  remaingGuesses.textContent = guessesLeft
  randWord()
  clearArray()
  dashes()
  lettersLeft = selectedWord.length
  document.getElementById("answer").src="assets/images/earth.jpg"
  game()
}
//Clear dash array
function clearArray() {
    return dash = []
}

//Rest Button 
var myBtn = document.getElementById('answer');
//add event listener
myBtn.addEventListener('click', function(event) {
reset();
})

//Game function
game()
function game() {
    document.onkeyup = function(event) {

    var letters = event.key.toLowerCase()

    if (guessesLeft > 0 && lettersLeft > 0) {
        if(selectedWord.indexOf(letters) > -1) {
            correct.push(letters)
            dash[selectedWord.indexOf(letters)] = letters            
            console.log(letters)
            lettersLeft--
            guessesLeft--
            remaingGuesses.textContent = guessesLeft
            // Display the users correct guesses.
            currentWords.textContent = dash
            if (lettersLeft === 0) {
                wins++
                winsText.textContent = wins
                document.getElementById("answer").src="assets/images/"+selectedWord+".jpg"  
                
                
                               
            }
        }
        else {
            incorrect.push(letters)
            console.log(incorrect)
            // Display the users incorrect guesses.
            wrongGuess.textContent = incorrect
            guessesLeft--
            remaingGuesses.textContent = guessesLeft
        }
    } else {
        guessesLeft = 15
        losses++
        lossesText.textContent = losses
        console.log(losses)  
        reset()
    }
    
};
} 
