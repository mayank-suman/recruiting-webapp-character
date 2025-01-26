import React from "react";
import { CLASS_LIST } from "../../consts";
import Item from "./item";

function list() {
  return (
    <section className="App-section">
      <h2>Class</h2>
      {Object.entries(CLASS_LIST).map((classItem) => (
        <Item key={classItem[0]} classItem={classItem} />
      ))}
    </section>
  );
}

export default list;
