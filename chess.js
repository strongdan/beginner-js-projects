let board = [ ['', '', '', '', '', '', '', ''],
              ['', '', '', '', '', '', '', ''],
              ['', '', '', '', '', '', '', ''],
              ['', '', '', '', '', '', '', ''],
              ['', '', '', '', '', '', '', ''],
              ['', '', '', '', '', '', '', ''],
              ['', '', '', '', '', '', '', ''],
              ['', '', '', '', '', '', '', ''] ];

const setupBoard = () => {
  // set pawns on both sides of board, with white on the bottom
  for (let i = 0; i < board[1].length; i++) {
     board[1][i] = 'BP';
  }
  for (let j = 0; j < board[6].length; j++) {
    board[6][j] = 'WP'; 
  }
  board[0][0] = 'BR'; // black rook left
  board[0][7] = 'BR'; // black rook right
  board[7][0] = 'WR'; // white rook left
  board[7][7] = 'WR'; // white rook right
  board[0][1] = 'BN' // black knight left
  board[0][6] = 'BN' // black knight right
  board[7][1] = 'WN' // white knight left
  board[7][6] = 'WN' // white knight right
  board[0][2] = 'BB' // black bishop left
  board[0][5] = 'BB' // black bishop right
  board[7][2] = 'WB' // white bishop left
  board[7][5] = 'WB' // white bishop right
  board[0][3] = 'BQ' // black queen
  board[0][4] = 'BK' // black king
  board[7][3] = 'WQ' // white queen
  board[7][4] = 'WK' // white king
}
