console.log("Hello World!")

let options = ["rock", "paper", "scissors"]
let score = 0

function computerPlay(){
    let randomElement = options[Math.floor(Math.random() * options.length)];
    return randomElement;
}

function playRound(playerSelection, compSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == compSelection) {
        return "Oops, looks like a draw..."
    }
    else if ((playerSelection == "rock" && compSelection == "scissors") || (playerSelection=="paper"&&compSelection=="rock")||(playerSelection="scissors"&&compSelection=="paper")){
        score += 1;
        return `You win: ${playerSelection} beats ${compSelection}`
    }
    else {
        return `You lose: ${compSelection} beats ${playerSelection}`
    }

}


function game(){
    for (let i = 0; i < 5; i++) {
        player = prompt("Enter your selection. ")
        console.log(playRound(player, computerPlay()))
     }
    if (score >= 3) {
        console.log("You win! Humanity has been saved!")
    } 
    else {
        console.log("You lose.. Who shall save humanity now?")
    }
}

game()