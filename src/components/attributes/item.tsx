import { DerivedAttributes } from "../../types";
import useAttributes from "../../hooks/useAttributes";

function Item({ attribute }: { attribute: DerivedAttributes }) {
  const { increment, decrement } = useAttributes();

  return (
    <div>
      {attribute.label} : {attribute.value} &nbsp;
      <button
        onClick={() => {
          increment(attribute.id);
        }}
      >
        +
      </button>
      &nbsp;
      <button
        onClick={() => {
          decrement(attribute.id);
        }}
      >
        -
      </button>
    </div>
  );
}

export default Item;
