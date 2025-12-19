let userScore = 0;
let computerScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genCompChoice = () => {
    const options = ['rock','paper','scissors'];
    const ranIndex = Math.floor(Math.random() * 3);
    return options[ranIndex];
}

const drawGame = () => {
    msg.innerText = "Game was draw. Play again."
    msg.style.backgroundColor = "#081b31"
     
}

showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    }else {
        computerScore++;
        compScorePara.innerText = computerScore;
        msg.innerText = `You lose. ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}



const playGame = (userChoice) => {
    // genarate computer choice
    const compChoice = genCompChoice();
    
    if(userChoice === compChoice){
        // Draw Game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock") {
            // scissors , paper
            userWin = compChoice === "paper" ? false : true ;
        }else if (userChoice === "paper") {
            // rock , scissors
            userWin = compChoice === "scissors" ? false : true;
        }else {
            // rock , paper
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
}


choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
         const userChoice = choice.getAttribute("id");
         playGame(userChoice);
    })
})