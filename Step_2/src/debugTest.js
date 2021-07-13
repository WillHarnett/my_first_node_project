// We always import our 3rd party libraries and other dependencies at the top of our files
const debug = require('debug')('debugTest'); // This is what we will use to add some additional logging to our applications

// Now we are going to create a few functions for practice.
// We will only be using the last function in this file
// in latter steps we will delete this file altogether, so feel free to play around.

// This is how you declare a function
function newFunction() {
  console.log('new Function');
}

// This is how you call or invoke a function (It's how you use the function we created above)
newFunction();

// This is how you create a function with Parameters (you can name the parameters anyhting you want)
function newFunctionWithParameters(exampleParameter) {
  console.log(exampleParameter);
}

// This is how you call or invoke a function that has parameters
newFunctionWithParameters('This is the newFunctionWithParameters');

// This is how you use the 3rd party library we imported
function newFunctionThatUsesDebug() {
  debug('newFunctionThatUsesDebug');
}

// This is how you export a function, so you can use it in other files
// After you complete this, go back to your index.js file and complete part 2
module.exports = newFunctionThatUsesDebug;
