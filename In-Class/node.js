//node.js
/* History: about 7-8 years old
created by Ryan Dall in 2009
node itself runs on javascript v8 engine which is googles javascript engine
an open source project
2014 io.js was forked from node.js
io advanced more rapidaly than node.js
Around 2015 node & io.js were merged toghther. Node 4.0
Now at 8. something
We've been using 6.11 now going to use node 8.2
*/

// NPM
/* node package manager (not technially called that)
you can find tons of libraries on their website
one of the most popular ways to host javascript modules
  - can be a problem if modules depend on each other
*/

// Learn how to initalize a node project
// nvm is node version manager- which version your using

// module- is a stand a lone peice of js code that performs some functionalty
// you can download node modules through npm install (the name) -- save
// can do @and version to install a specific version of the module
// .gitignore= anything in this file or folder git won't track/keep updtes on
// and not push up to github
// mocha is a framework for testing code- for developing not to run an actual project

// decpendencies you need to run code
// dev-dependencies you just need to test code

// node is built on the concept of modules: everything is a modules
// node has its own built in modules: i.e. hhtp & https

/* exercise 1:
- create a new project/directory
- create .gitignore modules
- Initialize this directory as an NPM module
-Install Npm module node-emoji & make sure that it's saved as a dependency
- Save & commit changes
- create new js file in directory
    - in the file create a fn that loops through an array of emojis and logs them to the console
      one line at a time (min of 10)
    - You will have to find the documentation for node-emoji module and find how to use it
- Save & Commit any changes
-Push changes to git

- change index to a node HTTP server that listens on 8001 : req will respond with a random emoji


/* next is how to build your own npm module
module self contained reusable piece of code
to create own: use export
  -have to create new file (const fn module pattern 1-option)
  revealing module pattern: preffered method

packaged.json or npm downloading modules of other peoples, but node has standard libraries:

Standard libraries:
  1- path module: way to work with directory paths
  path just evaluates the string we provide it to manupilate or give info on it
  (doesn't actuallyhave to exsist)
    includes diff functions:
      1- basename: to require you just need name of module
        returns the last portion of a path we pass in
          can supply a file extension as a second argument and it will remove
          that from the file name

      2- dirname: gives the whole directory of path string and exlucde the file name
      3- resolve: give an absoltue path from strings provided as args
        if you give it a file name it will give you the exact path that file lives in
        file name doesn't need to exist - gives you where it would if created
        - can also pass in directories and will give you where it would be if
        created within the sub-folder
          passed in and the file name
  2- file system module: fs
      1- create files: writeFileSync fn: takes 3 args
          - name of file you want to create, data (info written to file),
          options you give the file (coding, permissions)
      2- read a file: readFileSync: takes 2 args
          - name of file trying to read, options('utf-8')
      3- append data to file: appendFileSync
          -same args as write file sync
      4- delete a file: unlinkSync: takes 1 arg
          -path you want to delete

  event emitter: js pattern that gets used in front-end & back-end
    obj that we can interact with when writing js that can emit events
      - can listen for when those event occur (ie. click button) then do
      something when that event happens
        can call functions: to the event emitter
    - usual on back-end for subscribing to events when a request is made:
        can create a new log each time
    - can store fns when an event is emiited
    - 3 args: events (obj), on(fn), emit(fn)

*/

let emitter = {
  events: {},
  on: on,
  emit: emit
};
