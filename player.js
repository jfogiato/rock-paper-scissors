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

  // saveWinsToStorage() {
  //   var userDetails = {
  //     name: this.name,
  //     wins: this.wins
  //   };
  //   window.localStorage.setItem('player', JSON.stringify(userDetails)); 
  // }

  // retrieveWinsFromStorage() {
  //   this.name = window.localStorage.getItem('name');
  //   this.wins = window.localStorage.getItem('wins');
  // }

  // clearWinsFromStorage() {
  //   window.localStorage.clear();
  // }
}

