const wordsList = ['abacaxi', 'morango', 'manga', 'banana', 'acerola' ]

const randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
let wordArray = randomWord.split("");
let boxes = wordArray.map(letter => {return '_'});
let lives = 6;
let correctLetter = []
let wrongLetter = []

showCorrectLetters()

document.addEventListener("keydown", (event) => {
    const code = event.keyCode;
   if (isLetter(code)){
    const letter = event.key
    
    if (wrongLetter.includes(letter)){
        repeatedLetter()
    } else {
        if (wordArray.includes(letter) && !correctLetter.includes(letter)){
            correctLetter.push(letter)
        } else {
            wrongLetter.push(letter)
        }
    }
    playGame()
    //console.log(wrongLetter)
    //console.log(correctLetter)
   }
})

function playGame(){
    showWrongLetters()
    showCorrectLetters()
    youWin()
}


function showWrongLetters(){
    const wrongLetters = document.querySelector('.wrong-letter')
    wrongLetters.innerHTML = ""
    wrongLetter.forEach(letter => {
       wrongLetters.innerHTML += `<span>${letter}</span>`
    })
}

function showCorrectLetters(){
    const secretWord = document.querySelector('.secret-word-container')
    secretWord.innerHTML = "" 
    wordArray.forEach(letter => {
        if(correctLetter.includes(letter)){
            secretWord.innerHTML += `<span>${letter}</span>`
        } else {
            secretWord.innerHTML += `<span> _ </span>`
        }
    })
}

function youWin (){
    if (correctLetter.length == wordArray.length){
        alert(`You Won!`)
    }
}

function repeatedLetter() {
    console.log('já foi')
}

function restartGame() {
    window.location.reload();
  }

  function isLetter (letter){
    if (letter >= 65 && letter <= 90){
        return true
    } else {return false} 
}
/*
function checkCharacter(char){
    let gotRight = false
    for (let i = 0; i < wordArray.length; i++){
        if(char == wordArray[i]){
            if(char !== wordArray[i]){
                corrects++
            }
            boxes[i] = char;
            gotRight = true
            console.log(boxes);
        } else {
            console.log('x')
        }
    }

    if(!gotRight) {lives--}
    console.log(lives)

if (lives == 0){
    console.log('perdeu')
} else{
    if (corrects == wordArray.length){
        console.log('Vocë venceu')

    } 

}
}  
checkCharacter('a')
checkCharacter('x')
checkCharacter('r')
checkCharacter('o')
*/