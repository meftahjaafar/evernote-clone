import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteNote, toggleFav } from "../../store/actions/noteAction";

const NoteItem = ({ note }) => {
  const dispatch = useDispatch();
  //@delete note
  const handleDelete = () => {
    dispatch(deleteNote(note));
  };
  //@add/remove note from/to favorite noteslist
  const handleFavorite = () => {
    dispatch(toggleFav(note));
  };
  //@display heart icon
  const heartMarkup = note.favorite ? "favorite" : "favorite_border";
  return (
    <div className="note white">
      <div className="right-align">
        <i
          className="material-icons red-text"
          style={{ cursor: "pointer" }}
          onClick={handleFavorite}
        >
          {" "}
          {heartMarkup}{" "}
        </i>
        <i
          className="material-icons"
          style={{ cursor: "pointer" }}
          onClick={handleDelete}
        >
          {" "}
          delete{" "}
        </i>
      </div>
      <h5 className="black-text center">{note.title}</h5>
      <p className="truncate center">{note.content}</p>
      <p className="grey-text center">
          {moment(note.createdAt.toDate()).fromNow()}
      </p>
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
