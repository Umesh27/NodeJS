console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };

  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {
    // console.log(e);
  }

  var duplicateNotes = notes.filter((note) => note.title === title);
  console.log(duplicateNotes);

  if (duplicateNotes.length === 0){
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));  
  };
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
