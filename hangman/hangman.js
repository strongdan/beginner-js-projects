const newHangman =  [ [ '  -----------        ' ],
                      [ '  |         |        ' ],
                      [ '  |         |        ' ],
                      [ '  |                  ' ],
                      [ '  |                  ' ],
                      [ '  |                  ' ],
                      [ '  |                  ' ],
                      [ '  |                  ' ] ];

const completedHangman = [ [ '  -----------        ' ],
                           [ '  |         |        ' ],
                           [ '  |         |        ' ],
                           [ '  |         O        ' ],
                           [ '  |        /|\       ' ],
                           [ '  |         |        ' ],
                           [ '  |        / \       ' ],
                           [ '  |                  ' ] ];

const hangmanWords = ['jazz', 
                      'buzz', 
                      'jazzed', 
                      'jazzy', 
                      'buzzed', 
                      'fuzz', 
                      'jinx', 
                      'fizz', 
                      'buzzing', 
                      'fuzzy', 
                      'puff',
                      'jiff',
                      'buff',
                      'quiz',
                      'huff',
                      'zine',
                      'duff',
                      'zit' ];

const getNewWord = () => {
  // retrieve random word from hangmanWords
  return hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
}

const guessLetter = (word) => {
  // allows user to guess letter and returns true or false based on current word 
  let letter = prompt('Please guess a letter.');
  return word.includes(letter);
}

const printHangman = (hangmanArray) => {
  // print playHangman array
  console.log(hangmanArray);
}

const printBlankWord = (word) => {
  // print blanks for current word
  word = word.split('');
  for (let i = 0; i < word.length; i++) {
    word[i] = '_';  
  }
  return word.join('');
}

const addToHangman = () => {
  // add new element to hangman 
}

const fillWord = (word, guessLetter = '') => {
  // add correctly guessed letter to blanks
  let blankWord = printBlankWord(word);
  if (guessLetter()) {
    // if letter is correct, fill in blanks
    word.split('').forEach(function(letter) {
      if (!letter === guessLetter) {
        letter = letter.replace('_');
      }
    });
  }
  word = word.join('');
  printWord(word);
  return word;
}

const wonGame = () => {
  // checks if word is complete
  return (word.length === fillWord());
  }    
}

const lostGame = (playHangman) => {
  // checks whether playHangman equal to completedHangman
  return playHangman === completedHangman;
}

const playGame = () => {
  // starts game and plays through to end
  let playHangman = newHangman;
  let word = getNewWord();
  while (!wonGame()) {
    printHangman(playHangman);
    printBlankWord(word);
    guessLetter(); // users get seven guesses
    if (!guessLetter()) {  
      if (lostGame(playHangman)) {
        printHangman(playHangman);
        console.log('Sorry. You lost.');
        break;
      }     
    } else {
      fillWord(word);
      printHangman(playHangman);
    }
  }
  printHangman(playHangman);
  console.log('You won!');
  playGame()
}

playGame();
