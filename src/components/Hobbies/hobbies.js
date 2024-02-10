import React from "react";
import "./hobbies.css";
import { Link } from "react-router-dom";

const hobbiesList = [
  "Baking",
  "Blogging",
  "Camping",
  "Dancing",
  "Gardening",
  "Handicraft",
  "Hiking",
  "Journaling",
  "Learning a new language",
  "Mood Swing",
  "Nail art",
  "Nature identification",
  "Playing an instrument",
  "Reading",
  "Running",
  "Staying informed",
  "Yoga",
  'others'
];

const Hobbies = () => {
  return (
    <div className="hobbies-wrapper" id="hobbies">
      <h2>Hobbies</h2>
      <div className="hobbies-list">
        {hobbiesList.map((hobby, index) => (
          <div key={index} className="hobby-item">
            {hobby}
          </div>
        ))}
      </div>
      <div className="cardDiv">
        <Link to="/issues" >
          <button  className="btnSecondary" onClick={onclick}>Next</button>
        </Link>
        <Link to="/" >
        <button className="btnSecondary" onClick={onclick}>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Hobbies;
