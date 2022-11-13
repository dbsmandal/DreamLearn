import React from "react";
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <div className="Nav">
      <nav className="top-0 flex px-6 py-4 bg-purple-900 text-white justify-between">
        <div className="flex px-4 space-x-3">
          <img
            src="./images/dl-logo.png"
            // src="https://thumbs.dreamstime.com/z/music-note-including-musical-instruments-vector-black-white-background-77100562.jpg"
            className="h-16 rounded-lg cursor-pointer"
            alt="Dream Learn Logo"
          ></img>
          <span className="font-extrabold flex items-center justify-start text-3xl cursor-pointer">Dream Learn</span>
        </div>
        <div>
          <ul className=" flex  sm:mt-0 items-center py-4 space-x-10 px-28 text-3xl ">
            <Link to="/" className="font-bold cursor-pointer mx-2  ">Home</Link>
            <Link to="/learn" className="font-bold cursor-pointer">Learn</Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
