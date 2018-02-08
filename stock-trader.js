let userFunds = 100.0; // user starts out with $100 to trade
let portfolio = { 'aapl': 10, // user starts with one stock
                  'value': function() { 
                      let sum = 0;
                      for (var el in obj) {
                      if (this.hasOwnProperty(el) ) {
                      sum += parseFloat(this[el]);
                        }
                      }
                      return sum; } 
                }; 

constDisplayFunds() {
  // returns current uninvested money along with invested value
}

constDisplayChanges() {
  // displays user losses or gains
}

const userFundChoice() {
  // ask user if they want to buy stocks or mutual funds
}

const userTimeChoice(startDate='current') {
  // allows user to select historical data or current 
}

const showStocks(choice_of_type) {
  // show list of ten stocks or mutual funds
}

const getUserSymbol() {
  try {
    // get user input for stock symbol
    let symbol = prompt("Please enter a stock of your choice");
  }
  catch(error) {
    console.log(error);
    alert('Please enter a valid stock symbol');
    userSymbol();
  }
  displayCurrentPrice(symbol);
  return symbol;
}

const displayCurrentPrice(symbol) {
  // uses IEX for current stock prices - https://iextrading.com/developer/docs/
  let getRequest = `GET /stock/${symbol}/company`; 
  let pricePerShare = getRequest.price;
  return pricePerShare;
}

const displayDayChart() {
  // displays current days price in line graph
}

const displayGainLoss() {
  // displays gain or loss in users stocks 
}

const buyStock(dollarAmount, shares) {
  if (dollarAmount >= userFunds) {
    alert('Dollar amount exceeds funds');
    break;
  }
  if (shares * displayCurrentPrice(getUserSymbol()) >= userFunds) {
    alert('Dollar amount exceeds funds');
    break;
  }
  if (shares % 1 !== 0) { // shares must be a whole number
    alert('Number of shares must be a whole number');
    break;
  }
  // allows user to buy a dollar amount or number of shares
  let currentPrice = displayCurrentPrice(symbol);
  if (args[0] !== undefined) {
    userFunds -= dollarAmount;
    shares = dollarAmount / displayCurrentPrice(symbol);
    portfolio['symbol'] = shares; // add stock to user's portfolio with current price
  } else {
    userFunds -= shares * currentPrice;
    portfolio['symbol'] = shares; // add stock to user's portfolio with current price
  }
}

const sellStock(dollarAmount, shares) {
  // allows user to sell a dollar amount or number of shares
}
