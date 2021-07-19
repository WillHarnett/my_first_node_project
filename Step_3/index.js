const debug = require('debug')('index');
const dotenv = require('dotenv');

function run() {
  // dotenv.config() will read your .env file, parse the contents,
  // assign it to process.env <<< which is a global node varibale
  // we can access this node variable from anyfile without specifically importing it
  // dotenv.config() also returns an Object
  // The object has a parsed key containing the loaded content or an error key if it failed.
  // All the above means is now we will be able to access the variables we created in our .env file
  const result = dotenv.config();

  // This if statement checks for an error from dotenv.config()
  if (result.error) {
    throw result.error;
  }

  debug(result.parsed);
}

// Now we invoke the run function we created above,
// so run() will be triggered when we call our start functions in our package.json file
run();
