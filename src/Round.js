const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.currentDeck;
    this.turns = 0;
    this.currentCard = this.deck[0];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(userGuess) {
    let turn = new Turn(userGuess, this.currentCard);
    // turn.evaluateGuess();
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.turns++;
    this.currentCard = this.deck[this.turns];
    return turn.giveFeedback();
    // return turn;
  }

  calculatePercentCorrect() {
    return Math.round(
      ((this.turns - this.incorrectGuesses.length) / this.turns) * 100
    );
  }

  endRound() {
    let perentageCorrect = this.calculatePercentCorrect();
    console.log(
      `* Round over! * You answered ${perentageCorrect}% of the questions correctly!`
    );
    return `* Round over! * You answered ${perentageCorrect}% of the questions correctly!`;
  }
}

module.exports = Round;
