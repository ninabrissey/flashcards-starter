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

  it('should be a function', () => {
    const card = new Card(
      15,
      'The callback function for reduce() takes in an accumulator and a current element.',
      ['true', 'false'],
      'true'
    );
    const turn = new Turn('false', card);

    expect(turn.returnGuess('false')).to.equal('false');
  });
});
