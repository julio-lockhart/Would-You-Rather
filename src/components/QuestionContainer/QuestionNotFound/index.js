import React from "react";
import { Link } from "react-router-dom";

const QuestionNotFound = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>Oops!</h1>
          <h2>404 - The question could not be found</h2>
        </div>

        <Link to="/">Go TO Homepage</Link>
      </div>
    </div>
  );
};

export default QuestionNotFound;
