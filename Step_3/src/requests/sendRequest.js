// First we are going to import our dependencies
const debug = require('debug')('sendRequest'); // This is for debugging
const axios = require('axios'); // This is the library that we will be using to make requests

// This sendRequest funciton is going to take requestOptions as a parameter.
// requestOptions is going to be an object that will have a bunch of different attributes
// We will define what requestOptions is and all of it's attributes in a separete file
function sendRequest(requestOptions) {
  // Lets also output what requestOptions is to the terminal
  debug('requestOptions', requestOptions);

  // This is the function that actually makes the request for us
  // The request method is actually in the requestOptions object
  // don't worry if you don't understand this, I will cover this later on
  axios(requestOptions)
    .then((response) => {
      // .then just says that after the axios function finishes do something
      // We will save whatever axios returns in a variable called "response"
      // for now we are just going to output response to the terminal
      debug('response', response);
    })
    .catch((error) => {
      // .catch is here just in case there is an error when we run the axios function
      // for now we are just going to output response to the terminal
      debug('error', error);
    });
}

// Now we will export our sendRequest function, so we can use it in other files
module.exports = sendRequest;
