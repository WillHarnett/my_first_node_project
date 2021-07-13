# Step 1

## Summary
**In this step we are going to:**
 - Initialize git
 - Add a gitignore, so we don't use git to manage changes in folders/files that have sensitive information or are for 3rd party libraries
 - Initialize our node project
 - Setup our first .js file which will be our entry point to our application

## Walkthrough
1. Let's open the VSCode terminal using the hotkeys: `Control + Shift + ``
2. Initialize git:
      - In terminal: `git init`
      - To create a file to tell git which files/folders we want to ignore: `touch .gitignore`
      - Open the .gitignore file and copy over what I have in mine
            The only two things you really need to know in here are: 
                  node_modules <<<When you install a 3rd party library, this is where all the files for that library are stored>>>
                  .env <<<This is where we will store some sensitive information like API keys, passwords etc.>>>
3. Initilize npm:
      - `npm init`
      - You should get prompted to fill out some information, the only thing you need to add for now is the name of the package which we will set as: `My_First_node_project`
      - After you set the package name, just hit enter until the prompt exists. You should see that a package.json file has been created now in your current directory
4. Now we will add our changes to git:
      - First we will add any files/folders we've created: `git add .` <<<The . just means everything (except for the stuff we've added to our gitignore file)>>>
      - Now we will commit those changes: `git commit -m "All of step 1"` <<<with every commit you should add a message to let you know what the changes are. We do this with -m>>>

---

## package.json breakdown
The package.json is basically a file that explains some general information about how your program is setup. I will walk through a few of the important things you should know for now. I will go into more detail when we setup some more things later on in this tutorial

Let's open the package.json file:

**main** - declares the entry point for our application. It should be set to a file called "index.js". This means if we were to try and run our application, this is the file that would be run.

**scripts** - This lets us setup some custom commands for our application. 
      For example we could:
             - make it so our app had a debug mode you could run it in
             - run a very specific function in our application
