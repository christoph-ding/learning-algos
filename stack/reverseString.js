function reverseStringOne(original) {
  var output = '';

  for (var i = original.length - 1; i >= 0; i--) {
    var currentChar = original[i];
    output = output + currentChar;
  }

  return output;
}

function reverseStringStack(original) {
  // helper stack
  var stack = [];
  var output = '';

  for (var i = 0; i < original.length; i++) {
    var currentChar = original[i];
    stack.push(currentChar);
  }

  // reverse by popping off the helper stack
  while (stack.length) {
    output = output + stack.pop();
  }

  return output;
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
console.log(reverseStringStack(testOne));
console.log(reverseStringStack(testTwo));
console.log(reverseStringStack(testThree));
