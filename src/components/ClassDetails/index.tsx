import React from "react";
import { CLASS_LIST } from "../../consts";
import { Class } from "../../types";

function ClassDetails({ className }: { className: Class }) {
  return (
    <div className="App-section">
      <h2>Class Requirements</h2>
      <div>
        {Object.entries(CLASS_LIST[className]).map(([attribute, value]) => (
          <p key={attribute}>
            {attribute}: {value}
          </p>
        ))}
        {/* <p></p> */}
      </div>
    </div>
  );
}

export default ClassDetails;
