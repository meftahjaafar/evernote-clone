import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import NotesList from "./NotesList"

const FavoriteItem = () => {
        useFirestoreConnect([
          {
            collection: 'notes',
            where: ['favorite', '==', true],
            orderBy: ['createdAt', 'desc'],
            storeAs: 'favnotes',
          },
        ]);
      
        const favnotes= useSelector(
          (state) => state.firestore.ordered.favnotes
        );
  console.log("Favorites Notes: ", favnotes);
  return <NotesList notes={favnotes} /> ;
};

export default FavoriteItem;
