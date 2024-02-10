// Issues.js
import React from "react";
import "./issues.css";
import { Link } from "react-router-dom";

// Assuming you have a list of issues or it could be fetched from an API
const issues = ["Anger", "Anxiety and panic attacks", "Suicidal feelings",'Borderline personality disorder', 'Depression'
,'Recreatonal drug ,alcohol and addiction','Seasonal affective  disorder', 'PTSD','Personality disorders','Dissociation disorder'
,'Loneliness' ];

const Issues = () => {
  return (
    <div className="issues-container" id="issues">
      {issues.map((issue, index) => (
        <div key={index} className="issue-item">
          {issue}
        </div>
      ))}
      <div className="cardDiv">
        <Link to="/therapist">
          <button className="btnSecondary" onClick={onclick}>
            Next
          </button>
        </Link>
        <Link to="/hobbies">
          <button className="btnSecondary" onClick={onclick}>
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Issues;
