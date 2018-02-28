require('./battleship.js');

describe('userTurn', function() {
    it('switches turns between 1 and 2', function() {
    expect(userTurn(1)).toEqual(2);
  });
});

describe('userTurn', function() {
    it('switches turns between 1 and 2', function() {
    expect(userTurn(2)).toEqual(1);
  });
});

describe('resetBoard', function() {
  it('resets both user\'s board', function() {
  expect(resetBoard()).toEqual();
  });
});

describe('shipsRemaining', function() {
  it('lists remaining ships and their length', function() {
  expect(shipsRemaining()).toEqual();
  });
});

describe('placeShip', function() {
  it('checks whether ship is already present and ensures ship doesn\'t extend off board', function() {
  expect(placeShip()).toEqual();
  });
});

describe('fireShot', function() {
  it('updates board with Xs for hits, Os for misses', function() {
  expect(fireShot()).toEqual();
  });
});

describe('hitOrNot', function() {
  it('checks whether shots hit a ship or not and notifies other user', function() {
  expect(hitOrNot()).toEqual();
  });
});

describe('sunkShip', function() {
  it('checks whether entire ship has been destroyed and alerts user', function() {
  expect(sunkShip()).toEqual();
  });
});

describe('gameWon', function() {
  it('checks whether game has been won and prints winner', function() {
  expect(gameWon()).toEqual();
  });
});

describe('playGame', function() {
  it('starts and plays through game', function() {
  expect(playGame()).toEqual();
  });
});
