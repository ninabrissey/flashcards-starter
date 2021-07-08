const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentGame = {};
  }

  start() {
    let newCards = prototypeQuestions.map(function (currentQuestion) {
      let card = new Card(
        currentQuestion['id'],
        currentQuestion['question'],
        currentQuestion['answers'],
        currentQuestion['correctAnswer']
      );
      return card;
    });
    let deck = new Deck(newCards);
    this.currentGame = new Round(deck);
    this.printMessage(deck, this.currentGame);
    this.printQuestion(this.currentGame);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
