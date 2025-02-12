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
    const options = document.querySelector('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('player-hand');
    //computer options
    const computerOptions = ['rock', 'paper', 'scissors'];

      const computerNumber = Math.floor(Math.random() * 3);
      console.log(computerNumber);
  }

  //Is call all the inner function
  startGame();
  playMatch();
}

  //Start the game function
  game();
