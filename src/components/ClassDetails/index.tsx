import React from "react";
import { CLASS_LIST } from "../../consts";
import { Class } from "../../types";

function ClassDetails({ className }: { className: Class }) {
  return (
    <div className="App-section">
      <h2>Class Requirements {`(${className})`}</h2>
      <div className="class-details-list">
        {Object.entries(CLASS_LIST[className]).map(([attribute, value]) => (
          <p key={attribute}>
            <span>{attribute}: </span>
            <span>{value}</span>
          </p>
        ))}
        {/* <p></p> */}
      </div>
    </div>
  );
}

export default ClassDetails;
