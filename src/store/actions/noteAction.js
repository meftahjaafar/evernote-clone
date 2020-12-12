export const addNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("notes")
      .add({
        ...note,
        favorite: false,
        createdAt: new Date(),
      })
      .then(() => {
        console.log("add the note successfully !");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("notes")
      .doc(note.id)
      .delete()
      .then(() => {
        console.log("delete the note successfully !");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const toggleFav = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const myfavorite = !note.favorite;
    const firestore = getFirestore();
    firestore
      .collection("notes")
      .doc(note.id)
      .update({favorite:myfavorite})
      .then(() => {
        console.log("toggle favoritesuccessfully !");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
