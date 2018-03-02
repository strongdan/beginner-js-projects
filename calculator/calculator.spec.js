require('./calculator.js');

describe('add', function() {
    it('adds two numbers', function() {
    expect(add(10, 42)).toEqual(52);
  });
});
  
describe('subtract', function() {
    it('subtracts two numbers', function() {
    expect(subtract(10, 42)).toEqual(-38);
  });
});

describe('multiply', function() {
    it('multiplies two numbers', function() {
    expect(multiply(10, 42)).toEqual(420);
  });
});

describe('divide', function() {
    it('divides two numbers', function() {
    expect(divide(10, 42)).toEqual(0.23809523809523808);
  });
});

describe('divide', function() {
    it('divides two numbers', function() {
    expect(divide(10, 0)).toEqual('You cannot divide by zero');
  });
});
