# Step 2

##Summary
**In this step we are going to:**

- Create a new branch off of main for all of the changes we are going to make in Step_2
- Add some code to our _indx.js_ file
- Add 3rd party libraries for debugging, storing environmental variables and to enforce coding best practices
- Add "_prettier_" to VSCode to auto format our code
- Add a src folder
- Add a our first file with code
- Pracite using the debugging library and some simple outputs
- Add a script to _package.json_ to run our code
- Test our code

##Walkthrough

1. Let's create a new branch: `git checkout -b step-2` <<<Now all of the changes we will be making will only be on this step-2 branch>>>
   - To see our branches we can use: `git branch` <<<You should see 2 branches: main and step-2>>>
2. Add some simple code to our index.js file
   - If you open my index.js file there are comments to guide you through the code and what it means. The file is setup into 2 parts, for this portion just take the first part
3. We are going to use npm to manage all of our third party libraries. First we are going to add a library called "debug" and then we are going to add a library called "eslint"
   - First lets make sure npm has the library we are going to use by searching for it: `npm search debug`
   - Now that we know it's there let's install it: `npm install debug`
   - And after that we will install a library to handle environmental varibales (place where we will also store things like API keys): `npm install dotenv`
   - After that finishes installing, we will install and init eslint:
     `npm install eslint`
     `npx eslint --init` <<<This starts a prompt to initialize eslint>>>
     In the prompt select the following options: - How would you like to use ESLint? `To check syntax, find problems, and enforce code style` - What type of modules does your project use? `CommonJS (require/exports)` - Which framework does your project use? `None of these` - Does your project use TypeScript? `No` - Where does your code run? `Node` <<<You can select and deselect options using the spacebar>>> - How would you like to define a style for your project? `Use a popular style guide` - Which style guide do you want to follow? `Airbnb: https://github.com/airbnb/javascript` - What format do you want your config file to be in? `JavaScript` - <<<Then you will probably have to install some other libraries, just say yes to that>>> Would you like to install them now with npm? `Yes` - Now if you open the package.json folder you should see two new fields "_[dependencies][1]_" and "_[devDependencies][2]_" for more information <<<debug should really be in the devDependencies section, but for the purposes of this tutorial it does not really matter that much>>>
   - After all of that finishes, we are going to open the _.eslintrc.js_ and customize it a bit. See my _.eslintrc.js_ file for details
4. Now we are going to add ther extension "_prettier_" to VSCode <<<prettier just auto formats code before you save. This will help out a lot when you start getting a lot of code>>>
   - On the left hand side you should see several icons. Select the Extensions icon
   - In extensions search for "_prettier_"
   - Select install <<<You might have to reopen VSCode for the changes to take effect>>>
   - After it's installed you can change settings for "_prettier_" in Code > Prefferences > Settings > and then search for "_prettier_"
5. Once that is all setup let's create a folder called "_src_"
6. In the _src_ folder lets add a file called "_debugTest.js_"
7. Follow the instruction in my _debugTest.js_ file
8. Ater the _debugTest.js_ file is all setup, complete part 2 of the _indx.js_ file
9. After the _indx.js_ file part 2 is finished open _package.json_ and follow my comments to add in a script to run our code
10. Now in the terminal, let's run our code using the two scripts we made and see what happens
    - Let's try the the simpler one first: `npm start` <<<Start is a special script command, so you do not need to use run like you do with the other script we made>>>
      You should only see "_Hello World_", "_new Function_" and "_This is the newFunctionWithParameters_" output to the terminal on seperate lines
    - Next we are going to run our debug script with: `npm run start:debug`
      You should see everything you saw before plus an additional message that is color coded and says: "_debugTest newFunctionThatUsesDebug +0ms_"

---

## Additional References

**[dependencies][1]** In package.json this is where we lsit all the 3rd party libraries we use in our app <<<It's all taken care of by our package manager npm>>>
**[devDependencies][2]** In package.json this is where we lsit all the 3rd party libraries we use in our app for development purposes <<<It's all taken care of by our package manager npm>>>
