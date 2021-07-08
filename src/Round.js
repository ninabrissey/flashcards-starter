const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.currentDeck;
    this.turns = 0;
    this.currentCard = this.deck[0];
    this.incorrectGuesses = [];
    //👆 this might need to have a variable for the index, but this will work and can just be reassigned
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(userGuess) {
    let turn = new Turn(userGuess, this.currentCard);
    turn.evaluateGuess();
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    turn.giveFeedback();
    this.turns++;
    this.currentCard = this.deck[this.turns];
    return turn;
  }
}

module.exports = Round;
