let startingBoard = [ [  0,  1,  0,  1,  0,  1,  0,  1 ],
                    [  1,  0,  1,  0,  1,  0,  1,  0 ],
                    [  0,  1,  0,  1,  0,  1,  0,  1 ],
                    [  0,  0,  0,  0,  0,  0,  0,  0 ],
                    [  0,  0,  0,  0,  0,  0,  0,  0 ],
                    [  2,  0,  2,  0,  2,  0,  2,  0 ],
                    [  0,  2,  0,  2,  0,  2,  0,  2 ],
                    [  2,  0,  2,  0,  2,  0,  2,  0 ] ];

let userOneCheckers = [];
let userTwoCheckers = [];

const startGame = () => {
  // set up game board in starting position  
  let board = startingBoard;
  return board;
}

const firstUser = () => {
  // returns first user randomly
  let user = Math.floor(Math.random() * 2) + 1 
  return user;
}

const printBoard = (board) => {
  // prints board with alphanumeric grid positions on the side and bottom 
  board.forEach(function(row){
    console.log(row);
  });
}

const moveToken = () => {
  // allows user to move a token to a grid position 
  
}

const jumpAvailable = (user, boardPosition) => {
  // checks if a user has a jump available at a specific position
}

const validMove = () => {
  // checks to see if move is valid 
  // if a jump is available, user must take it
}

const attack = () => {
  // jumps other user's piece(s) and removes those pieces from the board 
}

const kingMe = (user, boardYPosition, boardXPosition) => {
  // if token reaches the end of the board, it becomes a king 
  if (user === 1 && boardYPosition === 7) {
      // token is changed from a number to a "K"
      board[boardYPosition][boardXPosition] = 'K1';
  } else if (user === 2 && boardYPosition === 0) {
      board[boardYPosition][boardXPosition] = 'K2';  
  }
}

const switchUser = (currentUser) => {
  if (currentUser === 1) {
    return 2; 
  } else {
    return 1;
  }
}

const playGame = () => {
  // start game and play through 
  printBoard(startGame);
  console.log(`User ${firstUser()} goes first!`);
  
}

playGame();
