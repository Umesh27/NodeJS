console.log("starting app.js");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
// fs.appendFile('greetings.txt', 'Hello World!');

// fs.appendFile('greetings.txt', 'Hello World!', function(err){
//   console.log('Unable to write file !');
// });

var user = os.userInfo();
// console.log(user);
// fs.appendFileSync('greetings.txt', 'Hello ' + user.username + '!');

fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);
