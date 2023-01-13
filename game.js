class Game {
  constructor() {
    this.player = new Player('Human', '');
    this.computer = new Player('Computer', '💻');
    this.type;
    this.fighters;
  }

  setChoice(gameChoice) {
    this.type = gameChoice === 'classicSection' ? 'Classic' : 'Hard';
  }

  resetChoices() {
    this.player.resetChoice();
    this.computer.resetChoice();
  }

  getCleanBoard() {
    if (this.type === 'Classic') {
      this.fighters = ['🐱', '🧹', '🦴'];
    } else {
      this.fighters = ['🐱', '🧹', '🦴', '💣', '✌️'];
    }
  }

  determineWinner() {
    if (this.player.choice === this.computer.choice) {
      return this.updateScore('draw');
    } else if (this.player.choice === '🐱' && (this.computer.choice === '🧹' || this.computer.choice === '💣')) { 
      return this.updateScore('computer');
    }  else if (this.player.choice === '🧹' && (this.computer.choice === '✌️' || this.computer.choice === '🦴')) {
      return this.updateScore('computer');
    } else if (this.player.choice === '🦴' && (this.computer.choice === '🐱' || this.computer.choice === '💣')) {
      return this.updateScore('computer');
    } else if (this.player.choice === '💣' && (this.computer.choice === '✌️' || this.computer.choice === '🧹')) {
      return this.updateScore('computer');
    } else if (this.player.choice === '✌️' && (this.computer.choice === '🐱' || this.computer.choice === '🦴')) {
      return this.updateScore('computer');
    } else {
      return this.updateScore('user');
    }
  }

  updateScore(playerWhoWon) {
    if (playerWhoWon === 'draw') {
      return 'It was a draw!';
    } else if (playerWhoWon === 'computer') {
      this.computer.win();
      return 'The computer won!';
    } else {
      this.player.win();
      return 'You won!';
    }
  }
}
