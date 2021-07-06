const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', () => {
  it('should be a function', () => {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of a Turn', () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it("should take in a user's guess and instance of Card", () => {
    const card = new Card(
      1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object'
    );
    const turn = new Turn('object', card);

    expect(card.question).to.equal(
      'What allows you to define a set of related information using key-value pairs?'
    );

    expect(turn.userGuess).to.equal('object');

    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });

  it("should return a user's guess", () => {
    const card = new Card(
      17,
      'What does the reduce() method take in?',
      [
        'callback function and initializer',
        'callback function and current element',
        'callback function and accumulator',
      ],
      'callback function and initializer'
    );
    const turn = new Turn('callback function and current element', card);

    const userGuess = turn.returnGuess();

    expect(userGuess).to.equal('callback function and current element');
  });

  it('should return the current card', () => {
    const card = new Card(
      21,
      'Which iteration method is best for DOM manipulation?',
      ['forEach()', 'map()', 'reduce()'],
      'forEach()'
    );
    const turn = new Turn('forEach()', card);

    const currentCard = turn.returnCard();

    expect(currentCard).to.deep.equal({
      id: 21,
      question: 'Which iteration method is best for DOM manipulation?',
      answers: ['forEach()', 'map()', 'reduce()'],
      correctAnswer: 'forEach()',
    });
  });

  it("should return a boolean indicating if user's guess is correct", () => {
    const card = new Card(
      26,
      'shift(), unshift(), pop(), and push() are examples of what type of array property method?',
      ['mutator method', 'accessor method', 'iteration method'],
      'mutator method'
    );
    const turn = new Turn('mutator method', card);

    expect(turn.evaluateGuess()).to.equal(true);
  });
});
