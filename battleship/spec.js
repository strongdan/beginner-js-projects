require('./battleship.js');

describe('userTurn', function() {
    it('switches turns between 1 and 2', function() {
    expect(userTurn(1)).toEqual(2);
  });
});
