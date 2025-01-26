import { DerivedAttributes } from "../../types";
import useAttributes from "../../hooks/useAttributes";

function Item({ attribute }: { attribute: DerivedAttributes }) {
  const { increment, decrement } = useAttributes();

  return (
    <div className="attribute-item">
      <p>{attribute.label} :</p>
      <p>{attribute.value}</p>
      <div>
        <button
          onClick={() => {
            increment(attribute.id);
          }}
        >
          +
        </button>
        &nbsp;&nbsp;
        <button
          onClick={() => {
            decrement(attribute.id);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Item;
