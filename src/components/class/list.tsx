import React from "react";
import { CLASS_LIST } from "../../consts";
import Item from "./item";
import { Attributes, Class } from "../../types";

function List({
  setSelectedClass,
}: {
  setSelectedClass: (selectedClass: Class) => void;
}) {
  return (
    <section className="App-section">
      <h2>Class</h2>
      {Object.entries(CLASS_LIST).map((classItem: [Class, Attributes]) => (
        <Item
          key={classItem[0]}
          classItem={classItem}
          setSelectedClass={setSelectedClass}
        />
      ))}
    </section>
  );
}

export default List;
