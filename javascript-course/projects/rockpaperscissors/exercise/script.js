/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
const resultDiv = document.getElementById('result')

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']

  return choices[Math.floor(Math.random() * choices.length)]
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost  

  // All situations where human draws, set `score` to 0
  if (playerChoice == computerChoice) {
    score = 0
  }

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  else if ( (playerChoice == 'rock' && computerChoice == 'scissors') ||
        (playerChoice == 'paper' && computerChoice == 'rock') ||
        (playerChoice == 'scissors' && computerChoice == 'paper')) {
          score = 1
        }

  // Otherwise human loses (aka set score to -1)
  else {
    score = -1
  }

  // return score
  return score
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**

function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  resultDiv.innerText = `👩‍💻 chose: ${playerChoice} \n 🤖 chose: ${computerChoice} \n` 

  let valueP = Number(resultDiv.getAttribute('data-value-p')) 
  let valuePC = Number(resultDiv.getAttribute('data-value-pc')) 

  if (score == 1) {
    resultDiv.innerText += `You won! 🎉` 
    valueP++
  } else if (score == 0) {
    resultDiv.innerText += `It's a draw 😐` 
  } else {
    resultDiv.innerText += `You lose! 😭` 
    valuePC++
  }

  resultDiv.setAttribute('data-value-p', `${valueP}`)
  resultDiv.setAttribute('data-value-pc', `${valuePC}`)

  resultDiv.innerText += `\n👩‍💻 score: ${valueP}\n🤖 score: ${valuePC}`
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const result = getResult(playerChoice, computerChoice)
  showResult(result, playerChoice, computerChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const choices = document.querySelectorAll('.choices')
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument
  choices.forEach(option => {
    option.onclick = () => onClickRPS(option.value)
  })
 

  // Add a click listener to the end game button that runs the endGame commands on click
  document.getElementById('clear').onclick = () => {
    resultDiv.innerText = ''
    resultDiv.setAttribute('data-value-p', `0`)
    resultDiv.setAttribute('data-value-pc', `0`)
  }
}

playGame()
