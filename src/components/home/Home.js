import React from "react";
import Form from "./Form";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

const Home = () => {
  useFirestoreConnect([
    { collection: "notes", orderBy: ["createdAt", "desc"] },
  ]);
  const notes = useSelector((state) => state.firestore.ordered.notes);
  console.log(notes);
  return (
    <div className="container">
      <div className="row align-center">
        <div className="col s7">
          <Form />
        </div>
        <div className="col s5">Note List</div>
      </div>
    </div>
  );
};

export default Home;
