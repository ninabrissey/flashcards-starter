const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const expect = chai.expect;

describe('Deck', () => {
  let deck, card1, card2, card3;

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
      "What is Travis's middle name?",
      ['Lex', 'William', 'Fitzgerald'],
      'Fitzgerald'
    );
    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should take in an array of cards', () => {
    expect(deck.currentDeck[1].correctAnswer).to.equal('gallbladder');
    expect(deck.currentDeck[2].answers).to.deep.equal([
      'Lex',
      'William',
      'Fitzgerald',
    ]);
  });

  it('should be able to count the number of cards in a deck', () => {
    expect(deck.countCards()).to.equal(3);
  });
});
