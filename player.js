class Player {
  constructor(name, token) {
    this.name = name;
    this.wins = 0;
    this.token = token;
    this.choice = '';
  }

  takeTurn(choice) {
    if (choice) {
      this.choice = choice;
    } else {
      this.choice = this.chooseRandom();
    }
  }

  chooseRandom() {
    return currentGame.fighters[Math.floor(Math.random() * currentGame.fighters.length)];
  }
}

