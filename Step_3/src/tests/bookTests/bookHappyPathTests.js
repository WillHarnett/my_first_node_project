const debug = require('debug')('bookHappyPathTests');

const sendRequest = require('../../requests/sendRequest');

const createBookRequestOptions = require('../../crudcrud/book/createBook');
const readBookRequestOptions = require('../../crudcrud/book/readBook');
const updateBookRequestOptions = require('../../crudcrud/book/updateBook');
const deleteBookRequestOptions = require('../../crudcrud/book/deleteBook');

describe('Book Happy Path Tests', () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    return initializeFoodDatabase();
  });

  test('Vienna <3 veal', () => {
    expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
  });

  test('San Juan <3 plantains', () => {
    expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
  });
});
