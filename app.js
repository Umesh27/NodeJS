console.log("starting app.js");

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

var command = process.argv[2];
console.log('Command: ', command);
console.log('all arguments: ', process.argv);

if (command === 'add'){
  console.log("Adding new Note!");
} else if (command === "list") {
  console.log("Listing all notes");
} else if (command === "read") {
  console.log("Reading all notes");
} else if (command === "remove") {
  console.log("Removing all notes");
} else {
  console.log("command not recongnized");
}
