import React from "react";
import NoteItem from "./NoteItem";

const NotesList = ({ notes }) => {
  return (
    <div className="noteslist">
      {notes && notes.map((note) => <NoteItem note={note} key={note.id} />)}
    </div>
  );
};

export default NotesList;
