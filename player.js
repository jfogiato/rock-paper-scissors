class Player {
  constructor(name) {
    this.name = name;
    this.wins = 0;
    this.token = '🧑‍🦲';
    this.choice = '';
  }

  takeTurn(choice) {
    if (choice) {
      this.choice = choice;
    } else {
      this.choice = this.chooseRandom(fighters);
    }
  }

  chooseRandom() {
    return fighters[Math.floor(Math.random() * fighters.length)];
  }
}

