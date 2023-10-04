const wordsList = ['abacaxi', 'morango', 'manga', 'banana', 'acerola' ]

const randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
let wordArray = randomWord.split("");
let correctLetter = []
let wrongLetter = []

showCorrectLetters()
incorrectGuesses()
lettersButton();

document.addEventListener("keydown", (event) => {
    const code = event.keyCode;
   if (isLetter(code)){
    const letter = event.key
    
    if (wrongLetter.includes(letter)){
        repeatedLetter()
    } else {
        if (wordArray.includes(letter) && !correctLetter.includes(letter)){
            correctLetter.push(letter)
        } else if (!wordArray.includes(letter) && !correctLetter.includes(letter)){
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
    checkGame()
    incorrectGuesses()
    showBody()
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

function checkGame(){
    let msg = ''
    const secretWord = document.querySelector('.secret-word-container')
    const body = document.querySelectorAll('.hanger-body')

    if (body.length == wrongLetter.length){
        msg = "You lost"
    }

    if (secretWord.innerText == randomWord){
        msg = "You won"
    }

    if (msg) {
        document.querySelector("#msg").innerHTML = msg;
        document.querySelector(".popup-container").style.display = "flex";
      }
}

function showBody(){
    const body = document.querySelectorAll('.hanger-body')
    for(let i = 0; i < wrongLetter.length;i++){
        body[i].style.display="block"
    }
}

function repeatedLetter() {
    const repeated = document.querySelector('.alert-repeated-word')
    repeated.classList.add("show")
    setTimeout(()=>{
        repeated.classList.remove("show")
    }, 2000)
}


function incorrectGuesses(){
    const incorrectGuesses = document.querySelector('.incorrect-guesses')

    if (wrongLetter.length > 2 &&  wrongLetter.length <= 4){
        incorrectGuesses.style.color="orange"
    } else if (wrongLetter.length > 4 ){
        incorrectGuesses.style.color="red"
    } else{
        incorrectGuesses.style.color="green"
    }
    incorrectGuesses.innerHTML = `<span>${(wrongLetter.length)} / 6</span>  `
    
}

function restartGame() {
    window.location.reload();
  }

  function isLetter (letter){
    if (letter >= 65 && letter <= 90){
        return true
    } else {return false} 
}


function lettersButton() {
    const teclado = document.querySelector(".teclado");
    for (let i = 65; i < 91; i++) {
      let letter = String.fromCharCode(i);
      teclado.innerHTML += `<button class="btn">${letter}</button>`;
    }
    const btn = document.querySelectorAll(".btn");
    console.log(btn);
  
    btn.forEach((btn) => {
      btn.addEventListener("click", () => {
        const letter = btn.innerText.toLowerCase();
  
        if (wrongLetter.includes(letter)) {
          repeatedLetter();
        } else {
          if (wordArray.includes(letter) && !correctLetter.includes(letter)) {
            correctLetter.push(letter);
            
          } else if (
            !wordArray.includes(letter) &&
            !correctLetter.includes(letter)
          ) {
            wrongLetter.push(letter);
          }
        }
        playGame();
      });
    });
  }
