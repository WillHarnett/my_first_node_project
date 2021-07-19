// Importing our RequestOptions class
const RequestOptions = require('../../requests/RequestOptions');

// This states what kind of request we are going to make
// DELETEs are used to *Surprise* delete something
const method = 'DELETE';

// This shows you how back ticks work: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// The process.env.CRUDCRUD_BASEURL is the baseURL that we saved in our .env file
// The last bit of string here is the path
const url = `${process.env.CRUDCRUD_BASEURL}/recipe`;

// Here we are both createing an object from our RequestOptions class and passing a parameter
// We use the 'new' keyword to create the object
// We call the constructor with ()
// We then pass our attributes by wrapping them in {} and passing it between the ()
module.exports = new RequestOptions({
  method: method,
  url: url
});
