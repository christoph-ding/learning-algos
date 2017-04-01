function reverseStringOne(original) {
  var output = '';

  for (var i = original.length - 1; i >= 0; i--) {
    var currentChar = original[i];
    output = output + currentChar;
  }

  return output;
}

function reverseStringStack(original) {

}

// tests
var testOne = 'abc';
var testTwo = 'hello!';
var testThree = 'whoaaa whoa whoa yes!';

// reverseStringOne
console.log(reverseStringOne(testOne));
console.log(reverseStringOne(testTwo));
console.log(reverseStringOne(testThree));

// reverseStringStack
