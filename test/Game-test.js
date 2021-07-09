const chai = require('chai');
const Game = require('../src/Game');
const Round = require('../src/Round');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const expect = chai.expect;

describe('Game', () => {
  it('should create cards to start the game', () => {
    let game = new Game();

    game.start();

    expect(game.currentGame).to.be.instanceOf(Round);

    expect(game.currentGame.deck).to.deep.equal(prototypeQuestions);

    expect(game.currentGame.deck[3].correctAnswer).to.equal('accessor method');
  });
});
