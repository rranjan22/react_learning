let playGame = confirm("Do you want to play Rock, Paper, Scissors?");
if(playGame){
    //play
    let playerChoice = prompt("Enter your choice (rock, paper, or scissors):");
    if(playerChoice){
        if(playerChoice.toLowerCase() === "rock" || playerChoice.toLowerCase() === "paper" || playerChoice.toLowerCase() === "scissors"){
            const choises = ["rock", "paper", "scissors"];
            const computerChoice = choises[Math.floor(Math.random() * choises.length)];
            alert("You chose: " + playerChoice + "\nComputer chose: " + computerChoice);
            console.log("User choice:", playerChoice);
            console.log("Computer choice:", computerChoice);
            if(playerChoice.toLowerCase() === computerChoice){
                alert("It's a tie!");
                console.log("Result: It's a tie!");
            }
            else if(
                (playerChoice.toLowerCase() === "rock" && computerChoice === "scissors") ||
                (playerChoice.toLowerCase() === "paper" && computerChoice === "rock") ||
                (playerChoice.toLowerCase() === "scissors" && computerChoice === "paper")
            ){
                alert("You win!");
                console.log("Result: You win!");
            }
            else{
                alert("You lose!");
                console.log("Result: You lose!");
            }

            let playAgain = confirm("Do you want to play again?");
            if(playAgain){
                // Restart the game
                location.reload(); // Reloads the page to start over
                console.log("User chose to play again.");
            }
            else{
                alert("Thanks for playing!");
                console.log("User chose not to play again.");
            }
        }
        else{
            alert("Invalid choice! Please enter rock, paper, or scissors.");
            console.log("User entered an invalid choice.");
        }
    }
    else{
        alert("I think you changed your mind. Maybe next time!");
    }
}
else{
    alert("Maybe next time!");
    console.log("User chose not to play.");
}
