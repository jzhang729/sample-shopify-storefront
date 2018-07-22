import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="z-max fixed top-0 left-0 bg-washed-green w-100 h-100 flex justify-center items-center">
      <div className="flex flex-column items-center">
        <div className="f-4 db ma2">Not Found...</div>
        <div className="db ma2">
          <Link to="/">
            <button>Click here to go back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
