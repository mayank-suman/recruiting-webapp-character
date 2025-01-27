import React from "react";
import { AttributesContext } from "../context/attributesProvider";

function useAttributes() {
  const attributes = React.useContext(AttributesContext);

  if (!attributes) {
    throw new Error("useAttributes must be used within an AttributesProvider");
  }

  return attributes;
}

export default useAttributes;
