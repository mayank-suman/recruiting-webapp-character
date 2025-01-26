import React, { useState } from "react";
import List from "./list";
import ClassDetails from "../ClassDetails";
import { Class } from "../../types";

function Index() {
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);

  return (
    <>
      <List setSelectedClass={setSelectedClass} />
      {selectedClass && <ClassDetails className={selectedClass} />}
    </>
  );
}

export default Index;
