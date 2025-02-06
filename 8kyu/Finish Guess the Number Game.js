class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  guess(n) {
    if (this.lives > 0 && n !== this.number) {
      this.lives -= 1;
      console.log(this.lives);
      return false;
    } else if (this.lives > 0 && n === this.number) {
      return true;
    } else {
      return false;
    }
  }
}

let player = new Guesser(5, 3);
console.log(player.guess(1));
console.log(player.guess(2));
console.log(player.guess(3));
console.log(player.guess(4));
// throw Error
