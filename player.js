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

  win() {
    this.wins += 1;
  }

  updateToken(token) {
    this.token = token;
  }

  resetChoice() {
    this.choice = '';
  }

  saveWinsToStorage() {
    window.localStorage.setItem(`${this.name}Wins`, this.wins)
  }

  retrieveWinsFromStorage() {
    this.wins = Number(window.localStorage.getItem(`${this.name}Wins`));
  }

  clearWinsFromStorage() {
    window.localStorage.clear();
  }
}

