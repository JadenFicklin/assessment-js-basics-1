/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition =
  "I like to think of the git terminal as a file explorer just without the user interface. you can navigate, create, delete, rename files or folders, open coding projects, add changes from a coding project and save/share them from your local files to the cloud remote storage a.k.a github";

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition =
  "GitHub is basically a cloud drive, it saves your local files to a remote location, like an off shore island where everyone else can put their stuff to which we all share.";

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
let gitInitDefinition =
  "git init is set at the base repository of a project (inside the folder where all the other files for the project is) this creates a new git repository";

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
let gitCloneDefinition =
  "targets an existing repository and then creates a copy for you to use";

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
let gitStatusDefinition =
  "git status will display the state of the files and which ones have been staged, if they are red then you need to add them (with git add .) once you type git status again it should turn from red to green";

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
let gitAddDefinition =
  "git add will save the current state of your project into your commit history";

let gitAddCode = "git add .";
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
let gitCommitDefinition =
  "git commit will allow you to add a comment to your push";

let gitCommitCode = `git commit -m "initial commit"`;

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
let gitPushDefinition =
  "git push will send your added changes of the project into your remote repository on the github interface with the commited message";
