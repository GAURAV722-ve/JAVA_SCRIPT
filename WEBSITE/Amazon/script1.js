let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg  = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was a draw.");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        console.log("You win!");
        console.log("Your Score =", userScore);
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        console.log("You lose!");
        console.log("Computer Score =", compScore);
        msg.innerText = "You lose.";
        msg.style.backgroundColor = "red";
        msg.innerText = `You lost! ${compChoice} beats ${userChoice}`;
    }
};

const playGame = (userChoice) => {
    console.log("User choice =", userChoice);

    const compChoice = genCompChoice();
    console.log("Computer choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } 
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } 
        else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    });
});
