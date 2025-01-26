import { Attributes, Class } from "../../types";
import useAttributes from "../../hooks/useAttributes";
import { checkAttributes } from "../../utils";

function Item({
  classItem,
  setSelectedClass,
}: {
  classItem: [Class, Attributes];
  setSelectedClass: (selectedClass: string) => void;
}) {
  const { attributes } = useAttributes();
  const [className, classAttributes] = classItem;
  const areRequirementsMet = checkAttributes(classAttributes, attributes);

  return (
    <button
      onClick={() => setSelectedClass(className)}
      className={`${areRequirementsMet ? "highlight" : ""}`}
    >
      <div>{className}</div>
    </button>
  );
}

export default Item;
