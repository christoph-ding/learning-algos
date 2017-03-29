 function balancedParens(inputStr) {
  // a hash for the 'opening character' and their corresponding 'closing character'
  var openingCharacters = {'(' : ')'};
  var closingCharacters = {')': true};

  // helper data structure
  // I am using an array to imitate a stack, instead of implementing a stack
  // I will only use canonical stack methods

  var helper = [];

  // iterate through inputStr
  for (var i = 0; i < inputStr.length; i++) {
    var char = inputStr[i];
    // do something when we encounter 'open'
    if (openingCharacters.hasOwnProperty(char)) {
      helper.push(openingCharacters[char]);
    } 
    // do something when we encounter 'closed'
    if (closingCharacters.hasOwnProperty(char)) {
      var topHelper = helper.pop();
      if (char !== topHelper) {        
        return false;
      }
    }
  }
  
  // at the end ... is helper empty?
  // having a length of 0 imitates 'isEmpty' function of stack
  return helper.length === 0;
}

// tests
var stringOne = 'abc'; // true
var stringTwo = '(asdasd)'; // true
var stringThree = '(asdfa(sdfads)fadf' // false
var stringFour = ')'; // false
var stringFive = ''; // true
var stringSix = '(((asdasdasd))'; // false

console.log(balancedParens(stringOne));
console.log(balancedParens(stringTwo));
console.log(balancedParens(stringThree));
console.log(balancedParens(stringFour));
console.log(balancedParens(stringFive));
console.log(balancedParens(stringSix));
