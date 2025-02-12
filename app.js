const game = () =>  {
  let pScore = 0;
  let cScore = 0;
  const playBtn = document.querySelector('.intro button');

  const startGame = () => {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match')

    playBtn.addEventListener('click', () => {
      introScreen.classList.add("fadeOut");
    });
  };

  //Is call all the inner function
  startGame();
}

  //Start the game function
  game();
