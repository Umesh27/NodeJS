console.log('Starting notes.js');

var addNote = (title, body) => {
  console.log('Adding note', title, body);
};

var getAll = () => {
  console.log("Getting all notes");
};

var getNote = (title) => {
  console.log("reading ", title, " note");
};

var removeNote = (title) => {
  console.log("removing ", title, " note");
};

module.exports = {
  addNote, // Simular to :- addNote: addNote
  getAll,
  getNote,
  removeNote
};
