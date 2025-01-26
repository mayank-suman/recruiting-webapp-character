import React from "react";
import { Attributes } from "../../types";

function Item({ classItem }: { classItem: [string, Attributes] }) {
  const [className, attributes] = classItem;
  return <div>{className}</div>;
}

export default Item;
