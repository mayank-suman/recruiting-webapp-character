import useAttributes from "../../hooks/useAttributes";
import Item from "./item";

function List() {
  const { attributes } = useAttributes();
  return (
    <section className="App-section attributes">
      <h2>Attributes</h2>
      <div className="attributes-list">
        {attributes.map((attribute) => (
          <Item key={attribute.id} attribute={attribute} />
        ))}
      </div>
    </section>
  );
}

export default List;
