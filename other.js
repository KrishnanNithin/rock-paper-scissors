const options = document.querySelectorAll(".options");
const res = document.querySelector('#res');
let aScore = 0;
let bScore = 0;///const

options.forEach((option) => {
    option.addEventListener("click", function () {
        aInput = this.textContent.toLowerCase();
        const aOptions = ["rock", "paper", "scissors"];
        bInput = aOptions[Math.floor(Math.random() * 3)];
    
        compareInputs(aInput, bInput);
        updateScore();
        if (checkWinner()) {
          bScore = aScore = 0;
          updateScore();
        }
  });
});

function compareInputs(aInput, bInput) {
  const currentMatch = `${aInput} vs ${bInput}`;
  if (aInput === bInput) {
    res.textContent = `${currentMatch} is a **tie**.`;
    return;
  }
//rock
  if (aInput === "rock") {
    if (bInput === "scissors") {
  res.textContent = `${currentMatch} = You **win** this round.`;
      aScore++;
    } else {
      res.textContent = `${currentMatch} = Computer **wins** this round.`;
      bScore++;
    }
  }
  //paper
  else if (aInput === "paper") {
    if (bInput === "rock") {
      res.textContent =`${currentMatch} = You **win** this round.`;
      aScore++;
    } else {
      res.textContent =`${currentMatch} = Computer **wins** this round.`;
      bScore++;
    }
  }
  //scissors
  else {
    if (aInput === "paper") {
      res.textContent = `${currentMatch} = You **win** this round.`;
      aScore++;
    } else {
      res.textContent = `${currentMatch} = Computer **wins** this round.`;
      bScore++;
    }
  }
}
function updateScore() {
    document.getElementById("a-score").textContent = "Your score: " + aScore;
    document.getElementById("b-score").textContent = "Computer's score: " + bScore;
}

function checkWinner() {
  if (aScore === 5 || bScore === 5) {
    const winner =
    aScore === 10
   ? "You win the RPS Game! Congrats!"
      : "Computer wins the game. Try again next time, or not.";
    alert(winner);
    return true;
  }
  return false;
}
