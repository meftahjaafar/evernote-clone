import React from "react";

const NoteItem = ({ note }) => {
  return (
    <div className="note white">
      <div className="right-align">
        <i className="material-icons red-text" style={{ cursor: "pointer" }}>
          {" "}
          favorite{" "}
        </i>
        <i className="material-icons" style={{ cursor: "pointer" }}>
          {" "}
          delete{" "}
        </i>
      </div>
      <h5 className="black-text center">{note.title}</h5>
      <p className="truncate center">{note.content}</p>
      <p className="grey-text center">one day ago</p>
      <div className="right-align">
      <i className="material-icons" style={{ cursor: "pointer" }}>
          {" "}
          edit{" "}
        </i>
      </div>
    </div>
  );
};

export default NoteItem;
