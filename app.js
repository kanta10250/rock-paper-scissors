const game = () =>  {
  let pScore = 0;
  let cScore = 0;

  //Start the game
  const startGame = () => {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match')

    playBtn.addEventListener('click', () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //play match
  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    //computer options
    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach(option=> {
      option.addEventListener('click', function() {
        // computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        //Here is where we call compare hands
        compareHands(this.textContent, computerChoice);
        //Update Images
        playerHand.src = `./assets/${this.textContent}.png`;
        computerHand.src = `./assets/${computerChoice}.png`;
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');

    computerScore.textContent = pScore;
    playerScore.textContent = cScore;
  }

   const compareHands = (playerChoice, computerChoice) => {
     const winner = document.querySelector('.winner');
      if (playerChoice === computerChoice) {
        winner.textContent = 'It is a tie';
        return;
      }
      // Check for rock
      if (playerChoice === 'rock') {
        if(computerChoice === 'scissors') {
          winner.textContent = 'player Wins';
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = 'Computer Wins';
          cScore++;
          updateScore();
          return;
        }
      }
      // Check for paper
      if (playerChoice === 'paper') {
        if(computerChoice === 'scissors') {
          winner.textContent = 'Computer Wins';
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = 'Player Wins';
          pScore++;
          updateScore();
          return;
        }
      }
      // Check for Scissors
      if (playerChoice === 'scissors') {
        if(computerChoice === 'rock') {
          winner.textContent = 'Computer Wins';
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = 'Player Wins';
          pScore++;
          updateScore();
          return;
        }
      }
   }

  //Is call all the inner function
  startGame();
  playMatch();
}

  //Start the game function
  game();
