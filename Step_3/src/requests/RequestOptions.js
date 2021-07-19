// In this file we will define a Class
// Classes start with the class keyword
// Classes start with an uppercase letter
// Classes are in a file that starts with an uppercase letter
// Classes can really just be thought of as templates

// We are going to create a class for our RequestOptions object
// It will define all of the different things we can send in requests
// I will show you how to use this class in another file

// First we start with the class keyword and then the Class name
class RequestOptions {
  // this is the constructor
  // When we actually use this class to create an object, we will
  // use this function to add values to our object
  constructor({
    method,
    url,
    data
  }) {
    // The "this" keyword here just refers the object that was created
    // So, this.method = method can be translated as:
    // "This object's method varibale equals the method varibale above"
    this.method = method;
    this.url = url;
    this.data = data;
  }

  // This is not great, but this is fine for the purposes of this tutorial
  // This is a function that can be called on any object that uses this class
  // All this function does is add the id for the resource we are working with
  setResourceId(id) {
    this.url = `${this.url}?${id}`;
  }
}

module.exports = RequestOptions;
