const cards = { 'hearts': [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A' ],
                'diamonds': [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A' ],
                'spades': [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A' ],
                'clubs': [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A' ] }

const hands = [ 'Royal flush',
                'Straight flush',
                'Four of a kind',
                'Full house',
                'Flush',
                'Straight',
                'Three of a kind',
                'Two pair',
                'Pair',
                'High Card' ]

let playerCards = {};
let dealerCards = {};

const randNum = (low, high) => {
  // provides a random number between a high and low
  return Math.floor(Math.random() * high) + low;
}

const dealCards = () => {
  // deals five random cards to a dealer and player
  while (dealerCards.length <= 5) {
    randomSuite = cards[randNum(0,5)];
    randomCard = cards[randomSuite][randNum(0, 14)]
    if (!playerCards.includes(randomCard)) {
      playerCards.push(randomCard);  
    }
  }
  
}

const whichHand = () => {
  // checks cards to see which hand someone has 
}

const highHand = () => {
  // checks to see whether player or dealer has high hand 
}

const ante = () => {
  // allows players to ante  
}

const playGame = () => {
  // starts game and plays one hand 
}

playGame();
