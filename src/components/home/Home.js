import React from "react";
import Form from "./Form";

const Home = () => {
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
