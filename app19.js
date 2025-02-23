//terminal-A text input and output environment.
//many packages install using terminal in node.js,github programming
//to access hidden files

//basic commands - ls list files(show all files)
//pwd = print working directory
//clear = clear the screen

//navigation=inside & outside directories
//cd=change directory cd ..=back button

//paths=absolute and relative
//cd desktop/delta(relative path)
//cd /users/shardha/desktop(absolute path)
//cd / root directory,cd ~ home directory

//making directories
//mkdir=make directory(to make new folder)mkdir newfolder or mkdir desktop/newfolder

//flags are character that we pass with commands to modify their behaviour
//manual command =man ls-give info about ls command,man mkdir-give info about mkdir commmand

//touch command=used to create file
//touch index.html,touch app.js,touch abc.txt

//delete files and folders
//rm=remove files(ex-rm abc)
//rmdir=removes empty folder
//rm-rf=removes any folder

//git-free&open source version control system(tools that help to tracks changes in code)
//1.track history ,2.help to collaborate with team 
//github - website where we host respositories online
//commit means changes.

//using git
//-command line
//-IDE/Code editor(Like vscode)
//-Graphical user interface(gitkraken)

//configuring git
//git config --global user.name "My Name"
//git config --global user.email "someone@gmail.com"

//basic commands
//clone-cloning repository on our local machine(git clone <-some link->)to copy code in vs code from any github repository(link is code=>https)
//status-displays the state of the code(git status)
//add-adds new or changed files in your working directory to the Git staging area (git add <-file name-> or git add .(for all files))(jo humne nayi banai h)
//commit-it is record of change (git commit -m "some message")ex-git commit -m "add new files"
//push-upload local repo content to remote repo(git push origin main)
//pushing local repo
//init-used to create a new git repo 
//git remote add origin <-link->(link of https after creating new repository in which we want to push the code.)
//git remote -v(to verify remote)
//git branch(to check branch),generally for group project ,everyone make its own branch to code and work
//git branch -M main(to rename branch).


//To need to write again and again(git push origin main) to save any change.similarly for pull
//git push -u origin main(setting upstream)
//git push

//workflow-In github ->code changes->commit
//In local Git->code changes->add(stage a change)->commit(commit changes)->push.

//git branches(to smooth development process and maintain hierarchy)
//branch commands - git branch(to check branch)
//git branch -M main(to rename branch)
//git checkout <-branch name->(to navigate)(ek branch se dusri branch jana)
//git checkout -b <-new branch name->(to create new branch)
//git branch -d <-branch name->(to delete branch) 
//to merge branch or to push code of feature branch(git push --set-upstream origin feature)(feature is a branch that we have created.)

//merging code-> git diff <-branch name->(to compare commits,branches,files & more)
//git merge <-branch name->(to merge 2 branches)(ye do command diff and merge to merge from terminal ya git se pull request se) or create a PR(pull request)
//pull request->It lets you tell others changes you've pushed to a branch in a repository on Github(pull request option comes itself on github by creating a new branch)
//all files of feature branch will also show in main branch also.
//pull command(git pull origin main)(used to fetch and download content from a remote repo and immediately update the local repo to match that content)
//jo new file banai feature branch mai thi khali unko main mai lane k liye vs code mai github pr to aagayi thi pull request se(or merge in vs code)

//merge conflicts(An event that take place when Git is unable to automatically resolve differences in code between two commits)
//conflict jab aate h same file mai dono branch mai change krdia to git ko samajh nahi aayega ki konsa commit lena or konsa change krna h.

//fixing mistakes -
//case1:staged changes (if unnecessary change add command)
//git reset <-file name->
//git reset (for all files)
//case 2: commited changes (for one commit)(agar galti se commit kar diya)
//git reset HEAD~1
//case 3:commited changes (for many commits)
//git reset <-commit hash->
//git reset --hard <-commit hash->

//forking :-A fork is a new repository that shares code and visibility settings with original "upstream" repository.
//fork is a rough copy
