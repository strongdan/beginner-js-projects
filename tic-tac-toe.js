let board = [ [' ', ' ', ' '],
              [' ', ' ', ' '],
              [' ', ' ', ' '] ];

const printBoardPositions = () => {
  console.log('Here is the current board...');
  // prints positions for user
  let currentNumber = 1;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
        board[i][j] = currentNumber;
        currentNumber += 1;
    }
  }
 console.log(board);
}

const placeMarker = (marker, position) => {
  // adds X or O to board at specified location  
}


