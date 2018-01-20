console.log('Starting notes.js');

// console.log(module);
module.exports.age = 25;
module.exports.addNote = () => {
  console.log('add note function !');
  return 'New Note.';
};

module.exports.addTwoNumbers = (a, b) => {
  c = a + b;
  return c
};
