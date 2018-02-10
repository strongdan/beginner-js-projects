const	ships = { carrier : 5, 
                battleship : 4, 
                cruiser : 3,
                submarine : 3, 
                destroyer : 2 }

let userTurn = 1; // users take turns => 1 = user1, 2 = user2

let shipPositions = {}; // tracks which squares have a ship on them, and which user they belong to

const setGrid = (rows, columns) => {
  // creates space for ships based on user's preference, not more than 10 x 10 and not less than 5 x 5
}

const placeShip = (ship, startNum, endNum, startAlpha, endAlpha) => {
  // allows user to place five ships on board 
  // checks whether ship is already present and ensures ship doesn't extend off board
}

const fireShots = (alpha, numeric) => {
  // allows user to select position on board to fire at 
}

const hitOrNot = () => {
  // checks whether shots hit a ship or not and notifies other user
  // updates shipPositions object with Xs for hit ships
}

const sunkShip = () => {
  // checks whether entire ship has been hit and alerts user  
}



const playGame = () => {
  // starts game play 
}




