class Player {
  constructor(name) {
    this.name = name;
    this.wins = 0;
    this.token = '🧑‍🦲';
    this.choice = '';
  }

  takeTurn(choice, fighterArray) {
    if (choice) {
      this.choice = choice;
    } else {
      this.choice = this.chooseRandom(fighterArray);
    }
  }

  chooseRandom(fighterArray) {
    return fighterArray[Math.floor(Math.random() * fighterArray.length)];
  }
}

module.exports = Player;