const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const expect = chai.expect;

describe('Round', () => {
  let round;
  let deck;
  let card1;
  let card2;
  let card3;

  beforeEach(() => {
    card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    card2 = new Card(
      14,
      'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder'
    );
    card3 = new Card(
      12,
      "What is Travis's favorite stress reliever?",
      ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
      'playing with bubble wrap'
    );
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should have a deck of cards', () => {
    expect(round.deck).to.deep.equal(deck.currentDeck);
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it('should start with the first card in the deck', () => {
    expect(round.currentCard).to.equal(card1);
  });

  it('should keep track of the current card', () => {
    expect(round.returnCurrentCard()).to.equal(round.currentCard);
  });

  it('should be able to take a turn, evaluate the guess, and switch to the next card', () => {
    expect(round.turns).to.equal(0);

    const turnOne = round.takeTurn('sea otter');
    const turnTwo = round.takeTurn('spleen');

    expect(turnOne).to.be.instanceOf(Turn);
    expect(turnOne.evaluateGuess()).to.equal(true);
    expect(turnTwo.evaluateGuess()).to.equal(false);
    expect(turnOne.giveFeedback()).to.equal('correct!');
    expect(turnTwo.giveFeedback()).to.equal('incorrect!');
    expect(round.incorrectGuesses).to.deep.equal([14]);
    expect(round.turns).to.equal(2);
    expect(round.currentCard).to.equal(card3); //only if there are only two round.takeTurns invoked prior to this
  });

  it('should calculate the percentage of correct answers in the deck', () => {});
});
