import { Attributes, DerivedAttributes } from "./types";

// function to check if the attributes are greater than equal to the class attributes
export const checkAttributes = (
  classAttributes: Attributes,
  attributes: DerivedAttributes[]
) =>
  Object.entries(classAttributes).every(
    ([key, value]) =>
      attributes.find((attr) => attr.label === key)?.value >= value
  );
