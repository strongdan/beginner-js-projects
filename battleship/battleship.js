const	ships = { 'carrier' : 5, 
                'battleship' : 4, 
                'cruiser' : 3,
                'submarine' : 3, 
                'destroyer' : 2 }

let board1 =  [ [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '] ];
let board2 =  [ [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '] ];

let shipPositionsUser1 = {}; // tracks which squares have a ship on them
let shipPositionsUser2 = {}; 

const userTurn = (previousUser) => {
  // switches turns between 1 and 2 
  if (previousUser === 1) {
    return 2; 
  } else {
    return 1; 
  }
}

const resetBoard = () => {
  // resets both user's board
  board1.forEach(function(row) {
    row.forEach(function(el) {
      el = ' ';
    });
  });
  board2.forEach(function(row) {
    row.forEach(function(el) {
      el = ' ';
    });
  });
  shipPositionsUser1 = {};
  shipPositionsUser2 = {};
}

const showBoard = (user) => {
  // print grid with ships to console 
  console.log(`${board}user`);
}

const shipsRemaining = (user) => {
  // list remaining ships and their length 
}

const placeShip = (user, ship, positionStart, positionEnd) => {
  // allows user to place five ships on board 
  // checks whether ship is already present and ensures ship doesn't extend off board
}

const fireShot = (position) => {
  // allows user to select position on board to fire at (eg. A1) 
  // updates board with Xs for hits, Os for misses
}

const hitOrNot = () => {
  // checks whether shots hit a ship or not and notifies other user
  // updates shipPositions object with Xs for hit ships
}

const sunkShip = (user) => {
  // checks whether entire ship has been destroyed and alerts user  
}

const gameWon = () => {
  // checks whether game has been won and prints winner
  if (shipsRemaining(1) === 0) {
    console.log(`${user2} won!`);
    return true; 
  } else if (shipsRemaining(2) === 0) {
    console.log(`${user2} won!`);
    return true;  
  } else {
    return false;
  }
}

const playGame = () => {
  // starts new game 
  resetBoard();
  placeShip(1);
  placeShip(2);
  user = Math.floor(Math.random() * 2; // chooses a random user to start
  console.log(`User ${user) + 1} starts!`);
  while (!gameWon()) { 
    showBoard(user);
    fireShot(position);
    hitOrNot(position);
    console.log(sunkShip(user));
    console.log(shipsRemaining(user));
    user = userTurn(user);
  }
  gameWon();
  playGame();
}

playGame();



module.exports = {
	userTurn,
  resetBoard,
  showBoard,
  shipsRemaining,
  placeShip,
	fireShot,
	hitOrNot,
	sunkShip,
	gameWon,
	playGame
}
