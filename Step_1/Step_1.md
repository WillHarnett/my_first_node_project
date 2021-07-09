# Step 1
We are going to simply setup our package.json file and the index.js file for the node application
1. If you are using In terminal navigate to the root folder for this project (if you followed previous steps it should be the My_First_Node_Project folder)
2. In terminal paste: npm init
3. You should get prompted to fill out some information, the only thing you need to add for now is the name of the package which we will set as: My_First_node_project
4. After you set the package name, just hit enter until the prompt exists. You should see that a package.json file has been created now in your current directory

## package.json breakdown
The package.json is basically a file that explains some general information about how your program is setup. I will walk through a few of the important things you should know for now. I will go into more detail when we setup some more things later on in this tutorial

Let's open the package.json file:

main - declares the entry point for our application. It should be set to a file called "index.js". This means if we were to try and run our application, this is the file that would be run. <<< It would fail now, because we haven't created that file yet. We will do so in the next step>>>
scripts - This lets us setup some custom commands for our application. 
      For example we could:
             - make it so our app had a debug mode you could run it in
             - run a very specific function in our application
