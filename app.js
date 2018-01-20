console.log("starting app.js");

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');
// fs.appendFile('greetings.txt', 'Hello World!');

// fs.appendFile('greetings.txt', 'Hello World!', function(err){
//   console.log('Unable to write file !');
// });

// var user = os.userInfo();
// // console.log(user);
// // fs.appendFileSync('greetings.txt', 'Hello ' + user.username + '!');
//
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);

// var res = notes.addNote();
// console.log(res);
//
// var addition = notes.addTwoNumbers(4, 5);
// console.log('Result : ', addition);

console.log(_.isString(true));
console.log(_.isString('Umesh'));
var filteredArray = _.uniq(['Umesh', 1,2,3,4,'umesh',1,2,3,4,6,7,2,3,4,2]);
console.log(filteredArray);
