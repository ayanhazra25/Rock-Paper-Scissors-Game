let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreDisplay = document.querySelector("#user-score");
const compScoreDisplay = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was a Draw!");
    msg.innerText = "Game was a Draw!";
    msg.style.backgroundColor = "#FFED00";
    msg.style.boxShadow = "0 0 55px #FFED00";
}

// Deciding the Winner
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScoreDisplay.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Won! Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "#16FF00";
        msg.style.boxShadow = "0 0 55px #16FF00";
    } else {
        compScore++;
        compScoreDisplay.innerText = compScore;
        console.log("You Lose!");
        msg.innerText = `You Lost! ${compChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor = "#FF2929";
        msg.style.boxShadow = "0 0 55px #FF2929";
    };
};

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    // Computer Choice
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice) {
        // Draw Game
        drawGame();
    } else {
        let userWin = true;

        if(userChoice === "Rock") {
            // CompChoices => "Paper" or "Scissor"
            userWin = compChoice === "Paper"? false : true; 
        } else if(userChoice === "Paper") {
            // compChoices => "Rock" or "Scissor"
            userWin = compChoice === "Rock"? true : false;
        } else if(userChoice === "Scissor") {
            // compChoices => "Rock" or "Paper"
            userWin = compChoice === "Paper"? true : false;
        }

        showWinner(userWin, userChoice, compChoice);
    };
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});