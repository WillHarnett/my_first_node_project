# Step 3

## Summary

**In this step we are going to:**

- Remove some of the tutorial files we created in previous steps and cleanup the _index.js_ file
- Install some dependencies to make requests out to an application and doing unit tests
- Setup some simple methods for the a CRUD[^1] endpoint
- Configure jest to work the way we want it to
- Setup some unit test files in jest to use the request actions we setup earlier
- Update linter rules, so we don't get unecessary errors with our unit tests

## Walkthrough

### Cleanup

1. First lets just delete the _debugTest.js_ file in the src folder.
2. Next lets delete everything that's in the _index.js_ file, but don't delete the file itself.

### Install dependecies

- We are going to install _Axios[^2]_, _Jest[^3]_ and _eslint-plugin-jest[^4]_. In terminal:
  - `npm install axios`
  - `npm install jest`
  - `npm install eslint-plugin-jest`

### General Setup

1. In your index.js file, add the code that I have in my index.js file: There are comments to walk you through the code.
2. Create a file called .env <<<In my project you will only see an example one, becauase the gitignore removes the original>>>in your root folder (where index.js is). In this file we are only going to add the baseURL for our test API. To get the base URL for our test API, go to https://crudcrud.com/ and copy the URL that appears. It should look somehting like this: https://crudcrud.com/api/8fe8f37fd5dd40f1b17af0dd2015f4ab
3. In the src folder lets create a "_requests_" folder
4. In the requests folder create the following files
   - "_sendRequest.js_" Then copy over the code from my file. There are comments in my file to help you understand the code.
   - "_RequestOptions.js_" Then copy over the code from my file. There are comments in my file to help you understand the code.
5. Next create a folder called "_crudcrud_" for a test API we are going to be using: https://crudcrud.com/
6. In the _crudcrud_ folder we are going to store some folders and files for two endpoints. One for books and one for recipes:
   - Add a folder for book: "_book_"
     Then Add four files to that folder: "_createBook.js_", "_readBook.js_", "_updateBook.js_", and "_deleteBook.js_"
   - Add a folder for recipe: "_recipe_"
     Then Add four files to that folder: "_createRecipe.js_", "_readRecipe.js_", "_updateRecipe.js_", and "_deleteRecipe.js_"
   - After you've created the above folders and files, copy over the code from my project. There are comments in each file to walk you through the code.
7. In your eslint.js file, add the code that I have in my eslint.js file: There are comments to walk you through the code. <<<This prevents eslint from displaying errors, becuase of the jest keywords>>>

### Tests and Cocde

<<<Now we are going to actually write some tests and see some test results!>>>

1. In the src folder lets create a "_tests_" folder
2. In the tests folder create the following folders and files:
   - "_bookTests_" and "_recipeTests_"
   - In booktests add the following file:
     "_bookHappyPathTests.js_" Then copy over the code from my file. There are comments in my file to help you understand the code.
   - In recipeTests add the following file:
     "_recipeHappyPathTests.js_" Then copy over the code from my file. There are comments in my file to help you understand the code.

---

## Additional References

**CRUD[^1]** CRUD stands for Create Read Update Delete, which actually translates to the following Request Types: POST, GET, PUT, DELETE
**Axios[^2]**
**Jest[^3]**
**eslint-plugin-jest[^4]**
**[devDependencies][2]** In package.json this is where we lsit all the 3rd party libraries we use in our app for development purposes <<<It's all taken care of by our package manager npm>>>
