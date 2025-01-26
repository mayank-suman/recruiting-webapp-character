import React from "react";
import { Attributes } from "../../types";
import useAttributes from "../../hooks/useAttributes";
import { checkAttributes } from "../../utils";

function Item({ classItem }: { classItem: [string, Attributes] }) {
  const { attributes } = useAttributes();
  const [className, classAttributes] = classItem;
  const areRequirementsMet = checkAttributes(classAttributes, attributes);

  return (
    <div className={`class-item ${areRequirementsMet ? "highlight" : ""}`}>
      {className}
    </div>
  );
}

export default Item;
