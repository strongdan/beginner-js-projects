let currentScore = 0;
const cards = {'two' : 2,
               'three' : 3,
               'four' : 4,
               'five' : 5,
               'six' : 6,
               'seven' : 7,
               'eight' : 8,
               'nine' : 9,
               'ten' : 10,
               'jack' : 10,
               'queen' : 10,
               'king' : 10,
               'ace' : [1, 11] }

const randomCard = (cards) => {
  // returns random element from cards as an array
  let card1 = Math.floor(Math.random())
}

const initialDeal = () => {
  // deals two cards to start the game
  card1 = randomCard(cards);
  card2 = randomCard(cards);
  // returns object with card names and values
  return { card1, card2 };
}

const dealCard = () => {
  // if user requests additional card, card is drawn and score is incremented
  let card = randomCard(cards);
  // returns card and value
}

const playGame = () => {
  firstCards = initialDeal(cards);
  currentScore += firstCards[0].val + firstCards[1].val;
  console.log(`Your first cards are: ${firstCards[0]} and ${firstCards[1]});
  console.log(`Your score is ${currentScore});
  console.log('Welcome to blackjack!');
  cards = initialDeal();
  console.log();
  
}




playGame();
