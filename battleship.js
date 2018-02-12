const	ships = { 'carrier' : 5, 
                'battleship' : 4, 
                'cruiser' : 3,
                'submarine' : 3, 
                'destroyer' : 2 }

let grid1 = [];
let grid2 = [];

let userTurn = 1; // users take turns => 1 = user1, 2 = user2

let shipPositions = {}; // tracks which squares have a ship on them, and which user they belong to

const setGrid = (user) => {
  // creates space for ships based on user's preference, not more than 10 x 10 and not less than 5 x 5
  let dimensions = prompt('Please enter the number of rows and columns between 5 and 10');
  // updates and returns grid variable
  if (user === 1) {
    let newArr = [];
    for (let i = 0; i < dimensions; i++) {
      newArr.push();
      grid1.push([ '' * dimensions ]); 
    }
    return grid1; 
  } else {
    grid2.push([ '' * dimensions ]);
    return grid2; 
  }
}

const showGrid = (user, grid) => {
  // print grid with ships to console 
  console.log(`${grid}user`);
}

const shipsRemaining = () => {
  // list remaining ships and their length 
}

const placeShip = (ship, startNum, endNum, startAlpha, endAlpha) => {
  // allows user to place five ships on board 
  // checks whether ship is already present and ensures ship doesn't extend off board
}

const fireShots = (x, y) => {
  // allows user to select position on board to fire at 
}

const hitOrNot = () => {
  // checks whether shots hit a ship or not and notifies other user
  // updates shipPositions object with Xs for hit ships
}

const sunkShip = () => {
  // checks whether entire ship has been destroyed and alerts user  
}

const gameWon = () => {
  // checks whether game has been won and prints winner
}

const playGame = () => {
  // starts game play 
}




