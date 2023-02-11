var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

var wordToGuessEl = document.getElementById ('word-to-guess')
var previousWordEl = document.getElementById ('previous-word')
var incorrectLettersEl = document.getElementById ('incorrect-letters')
var remainingGuessesEl = document.getElementById ('remaining-guesses')
var win = document.getElementById ('wins')
var loss = document.getElementById ('losses')

var wins = 0
var losses = 0 
var remainingGuesses = 10
var correct = []
var incorrect = []
var hiddenWord
var displayed

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

document.onkeyup = function(e){
  var pressedKey = e.key.toLowerCase()

  if (letters.indexOf(pressedKey) == -1) return

  if (hiddenWord.includes(pressedKey)){
    correct.push(pressedKey)
  }
  
  else if (!hiddenWord.includes(pressedKey)){
    incorrect.push(pressedKey)

    remainingGuesses --
  }

  userInput()

  if (displayed === hiddenWord){
    wins ++
    win.textContent = wins
    previousWordEl.textContent = hiddenWord
    gamePlay()
  }

  if (remainingGuesses <=0){
    losses ++
    loss.textContent = losses
    previousWordEl.textContent = ""
    gamePlay()
  }
}

function gamePlay() {
  hiddenWord = words[Math.floor(Math.random() * words.length)]
  console.log(hiddenWord)
  remainingGuesses = 10
  correct = []
  incorrect = [];
  userInput()
}

function userInput(){
  displayed=""

  for (var i = 0; i <hiddenWord.length; i++){
    if(correct.indexOf(hiddenWord[i]) > -1){
      displayed += hiddenWord[i]
    }
    else {
      displayed += '_'
    }
  }

  remainingGuessesEl.textContent=remainingGuesses
  wordToGuessEl.textContent=displayed
  incorrectLettersEl.textContent=incorrect
}

gamePlay()